import React from "react";
import {increment,decrement} from "../../../redux/cart";
import {useDispatch,useSelector} from "react-redux";
import "./CartButtons.css";

const AfterCart = () => {
	const { cartCount} = useSelector ((state) => state.cart);
	const dispatch = useDispatch();
	return (
	 	<div className="after-cart">
	 		<button className="cart-counter-button" onClick={()=>dispatch(decrement())}>-</button>
	 		<button className="cart-count">{ cartCount}</button>
	 		<button className="cart-counter-button" onClick={()=>dispatch(increment())}>+</button>
	 	</div>	
	 );
};

export default AfterCart;