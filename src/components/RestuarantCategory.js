import {useState} from 'react'
import ItemList from './ItemList';

const RestuarantCategory = ({data,showItems,setShowIndex}) => {
  
  console.log(data);
  const handleClick = () => {
    setShowIndex(); 
  };
  return (
    //  Header Body
    <div className="bg-gray-100 w-1/2 mx-auto my-4 shadow-lg p-4 ">
    <div className="flex justify-between cursor-pointer" onClick={handleClick}>
      <span className="font-bold">{data?.title} ({data?.itemCards?.length})</span>
      <span >⬇️</span>
    
    {/* Accordion Body */}
    </div>
      <div> {showItems && <ItemList items = {data?.itemCards}/> }</div>
    </div> 
  ); 
};
export default RestuarantCategory;
