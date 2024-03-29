import ResturantCard from './ResturantCard'
import resList from '../utils/mockData'
import { useState,useEffect } from 'react';
import Shimmer from './Shimmer'
import {Link} from 'react-router-dom'

const Body = () => {
    const [listOfRestaurant, setListOfRestuarant] = useState([]);
    const [filteredRestuarant, setFilteredRestuarant] = useState([]);

    const [searchText,setSearchText] = useState("");
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4978019&lng=77.3912953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setListOfRestuarant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
        setFilteredRestuarant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants );
    }
    
    //Conditional Rendering
    // if(listOfRestaurant.length === 0){
    //     return <Shimmer/>
    // }
    console.log("Body Render");
    return listOfRestaurant.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange = {(e)=>{setSearchText(e.target.value)}}/>
                <button onClick={()=>{
                    console.log(searchText);

                    const filteredList = listOfRestaurant.filter((res) => 
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setFilteredRestuarant(filteredList);

                    }}>Search</button>
            </div>
            <button className="filter-btn" onClick={() => {
                const filteredList = listOfRestaurant.filter((res) => res.info.avgRating > 4);
                setListOfRestuarant(filteredList);
            }}>Top Rated Restuarant</button>
            </div>
                <div className="res-container">
                    {
                        filteredRestuarant.map(restuarant => <Link to={"/restuarants/"+restuarant.info.id} key={restuarant.info.id}><ResturantCard resData={restuarant}/>
                        </Link>
                        )
                    }    
                </div>
        </div>
    )
}
export default Body;