import React from 'react';
import classes from './OrderType.module.css'
import logo from '../../assests/logo/logo.png'
import { useOrderContext } from '../OrderContext';
import { Link } from 'react-router-dom';


const OrderType = () => {
    const { orderType, handleOrderTypeChange } = useOrderContext();
    return (
        <>
            <div className={classes["order"]}>
                <img className={classes["order-img"]} src={logo} alt="mcdonalds" />
                <p>Where will you eat today?</p>
                <Link to="/menu" style={{ textDecoration: "none", color: "#333" }}>
                    <div className={classes["order-container"]}>
                        <div className={classes["order-type"]}

                            onClick={() => handleOrderTypeChange('eat-in')}
                        >
                            Eat In
                        </div>
                        <div className={classes["order-type"]}
                            onClick={() => handleOrderTypeChange('takeaway')}
                        >
                            Takeaway
                        </div>
                    </div>
                </Link>
            </div>


        </>
    );
};

export default OrderType;
