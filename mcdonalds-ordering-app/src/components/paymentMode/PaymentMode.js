import React from 'react';
import classes from './PaymentMode.module.css';
import { useOrderContext } from '../OrderContext';
import MaterialReact  from 'material-icons-react';
import { Link } from 'react-router-dom';

const PaymentMethod = () => {
  const { paymentMethod, handlePaymentMethodChange } = useOrderContext();

  return (
    <div className={classes["payment"]}>

      <h2>Choose Payment Method</h2>
      <Link to="/orderDetails" className={classes['link']}>
        <div className={classes["payment-method"]}>


          <div
            className={`${classes.paymentOption} ${paymentMethod === 'cash' ? classes.active : ''}`}
            onClick={() => handlePaymentMethodChange('cash')}
          >
            <MaterialReact icon="qr_code_2" size={75} />
            <span>UPI</span>

          </div>

          <div
            className={`${classes.paymentOption} ${paymentMethod === 'credit-card' ? classes.active : ''}`}
            onClick={() => handlePaymentMethodChange('credit-card')}
          >
            <MaterialReact icon="credit_card" size={75} />
            <p>Card</p>
          </div>

          <div
            className={`${classes.paymentOption} ${paymentMethod === 'cash' ? classes.active : ''}`}
            onClick={() => handlePaymentMethodChange('cash')}
          >
            <MaterialReact icon="currency_rupee" size={75} />
            <p>Cash</p>
          </div>



        </div>
      </Link>

    </div >
  );
};

export default PaymentMethod;
