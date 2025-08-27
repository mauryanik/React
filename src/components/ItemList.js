import { CDN_URL } from "../utils/constants";
import {useDispatch} from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleItems = (item) => {
        dispatch(addItem(item));
    }
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="py-2 w-9/12">
            <span className="font-medium">{item?.card?.info?.name}</span>
            <span>
              {" "}
              - ₹
              {item?.card?.info?.defaultPrice
                ? item?.card?.info?.defaultPrice / 100
                : item?.card?.info?.price / 100}
            </span>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 relative">
            <div className="">
              <button className="absolute left-1/2 -translate-x-1/2 bottom-0 p-2 bg-black text-white" onClick={() => handleItems(item)}>
                Add+
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info.imageId}
              alt=""
              className="w-full p-2"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
