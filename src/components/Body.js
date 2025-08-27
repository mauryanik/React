import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurant, setListOfRestuarant] = useState([]);
  const [filteredRestuarant, setFilteredRestuarant] = useState([]);

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4978019&lng=77.3912953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestuarant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredRestuarant(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  //Conditional Rendering
  // if(listOfRestaurant.length === 0){
  //     return <Shimmer/>
  // }
  console.log("Body Render");

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>looks like you are offline</h1>;
  }
  const {loggedInUser,setUserName} = useContext(UserContext);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-200 m-4 rounded-lg"
            onClick={() => {
              console.log(searchText);

              const filteredList = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestuarant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurant.filter(
                (res) => res.info.avgRating > 4.5
              );
              setListOfRestuarant(filteredList);
            }}
          >
            Top Rated Restuarant
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label htmlFor="">Username: </label>
          <input type="text" className="border border-black" value = {loggedInUser} onChange={(e)=>
            setUserName(e.target.value)
          }/>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRestuarant.map((restuarant) => (
          <Link
            to={"/restuarants/" + restuarant.info.id}
            key={restuarant.info.id}
          >
            <ResturantCard resData={restuarant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
