import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestuarantCategory from "./RestuarantCategory";

const RestuarantMenu = () => {
  //const [resInfo,setResInfo] = useState(null);
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();
  //console.log(resId);
  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo);
  // useEffect(()=>{
  //     fetchMenu();
  // },[])

  // const fetchMenu = async () => {
  //     const data = await fetch(MENU_API+resId);

  //     //https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4978019&lng=77.3912953&restaurantId=223411&catalog_qa=undefined&submitAction=ENTER

  //     //https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4978019&lng=77.3912953&restaurantId=191407&catalog_qa=undefined&submitAction=ENTER

  //     //772025
  //     // const json = await data.json();
  //     // console.log(json);
  //     // setResInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2].card.card.info;

  // const { itemCards } =  
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =  
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] === 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-6">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordion */}
      {categories.map((category, index) => (
        //Controlled Component
        <RestuarantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex && true}
          setShowIndex = {() => {setShowIndex(index)}}
        />
      ))}
    </div>
  );
};
export default RestuarantMenu;
