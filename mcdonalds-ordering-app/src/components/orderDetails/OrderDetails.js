
import React from 'react';
import classes from './OrderDetails.module.css';
import { useOrderContext } from '../OrderContext';

import MaterialIcon from 'material-icons-react';
import { Link } from 'react-router-dom';
const OrderDetails = () => {



    const { cartItems , resetOrder} = useOrderContext();
    const handleResetOrder = () => {
        resetOrder();
      };
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (<>
        <div className={classes["base"]}>1</div>
        <div className={classes["order"]}>
            <div className={classes["orderDetails"]}>
                <h2 style={{ marginBottom: "1rem" }}>Order no - 12</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty. Add items to your order!</p>
                ) : (
                    <>
                        <div>
                            <ul>
                                {cartItems.map((item) => (
                                    <li key={item.id}>
                                        {item.name} x {item.quantity} - ₹{item.price * item.quantity}
                                    </li>
                                ))}
                            </ul>
                            <p>Total Items: {totalItems}</p>
                            <h3>Total Cost: ₹{cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
                        </div>
                    </>
                )}
            </div>
            <div className={classes["btn-container"]}>
                <Link to='/'>
                    <div className={classes["btn-one"]}
                    onClick={handleResetOrder }
                    >

                        <MaterialIcon icon="replay" size={75} />
                        Order Again</div>
                </Link>
                <Link to="/end">
                <div className={classes["btn-two"]}
                onClick={handleResetOrder }
                >
                    <MaterialIcon icon="close" size={75} />
                    Cancel</div>
                </Link>
                
            </div>
        </div>
    </>
    );
};

export default OrderDetails;
