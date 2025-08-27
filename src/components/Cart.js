import {useDispatch,useSelector} from 'react-redux';
import ItemList from './ItemList.js'
import {clearCart} from '../utils/cartSlice.js'
const cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store)=> store.cart.items );
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <>
            <div className="m-4 p-4 text-center font-bold text-2xl">
            Cart
            </div>
            <div className="w-6/12 m-auto">

                <button className="p-2 m-2 bg-black text-white rounded-lg" onClick={handleClearCart}>Clear Cart</button>
                <ItemList items = {cartItems}/>
            </div>
        </>
    )
}
export default cart;