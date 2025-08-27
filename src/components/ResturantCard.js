import {CDN_URL} from '../utils/constants';
import UserContext from '../utils/UserContext';
import {useContext} from 'react';

const ResturantCard = (props) => {
  const {loggedInUser} = useContext(UserContext);
    const { resData } = props;
    const {cloudinaryImageId,name,cuisines,avgRating,costForTwo,deliveryTime} = resData?.info;
  return (
      <div className="m-2 p-4 w-[240px] bg-gray-100 hover:bg-gray-200">
        <img src={CDN_URL + cloudinaryImageId} alt="res-logo" className="h-[200px] w-[250px]"/>
        <h3 className="font-bold py-2 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
        <h4>{resData.info.sla.deliveryTime}</h4>
        <h4>User: {loggedInUser}</h4>
      </div>
  )
}
export default ResturantCard;