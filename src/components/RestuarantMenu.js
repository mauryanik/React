import { useEffect,useState } from 'react';
import {useParams} from 'react-router-dom';
import Shimmer from './Shimmer'
import {MENU_API} from '../utils/constants'

const RestuarantMenu = () => {
    const [resInfo,setResInfo] = useState(null);
    const {resId} = useParams();
    console.log(resId);
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API+resId);

        //https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4978019&lng=77.3912953&restaurantId=223411&catalog_qa=undefined&submitAction=ENTER

        //https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4978019&lng=77.3912953&restaurantId=191407&catalog_qa=undefined&submitAction=ENTER

        //772025
        const json = await data.json();
        console.log(json);
        setResInfo(json.data);
    };

    if(resInfo === null)
       return <Shimmer/>;

    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2].card.card.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


    console.log(itemCards);
    
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{costForTwoMessage}</h3>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100 || item.card.info.defaultPrice/100}</li>)}
            </ul>
        </div>
    )
}
export default RestuarantMenu;