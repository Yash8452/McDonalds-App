// components/Cart.js

import React from 'react';
import { useOrderContext } from '../OrderContext';
import classes from './Cart.module.css'
import { Link } from 'react-router-dom';
import MaterialIcon from 'material-icons-react';

const Cart = () => {
    const { cartItems, orderType, removeFromCart, increaseQuantity, decreaseQuantity } = useOrderContext();

    const calculateTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };
    return (
        <>
            {orderType && (

                <div className={classes['cartContainer']}>
                    <div className={classes['cartTop']}>
                        <h3>My<br />Order</h3>
                        {orderType && <p>{orderType}</p>}
                    </div>

                    <ul>
                        {cartItems.map((item) => (
                            <li key={item.id}>
                                <div className={classes['cartMain']}>
                                    <div className={classes["cartItem"]}>
                                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <span className={classes["cartItem-title"]}>{item.name}</span>
                                        <span className={classes["cartItem-price"]}>${item.price} x {item.quantity}{' '}</span>
                                    </div>
                                    <div className={classes["cartItem-btn-container"]}>
                                        <button className={classes["dec"]} onClick={() => decreaseQuantity(item.id)}><MaterialIcon icon="remove" size={15} /></button>
                                        <span style={{ fontWeight: "bolder", fontSize: "12px" }}>{item.quantity}</span>
                                        <button className={classes["add"]} onClick={() => increaseQuantity(item.id)}><MaterialIcon icon="add" size={15} /></button>
                                        <button className={classes["remove"]} onClick={() => removeFromCart(item.id)}><MaterialIcon icon="close" size={15} /></button>
                                    </div>
                                </div>

                            </li>
                        ))}
                    </ul>

                    {cartItems.length > 0 && (
                        <>
                            <div className={classes['cartBottom']}>
                                <p style={{ fontSize: "20px" }}>Total Price:<br /> <span style={{ fontWeight: "bolder" }}>₹{calculateTotalPrice()}</span></p>
                                <Link to='/payment'>
                                    <button className={classes["payment-btn"]}><MaterialIcon icon="arrow_forward_ios" /></button>

                                </Link>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

export default Cart;
