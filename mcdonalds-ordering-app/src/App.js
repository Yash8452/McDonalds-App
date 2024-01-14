import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { OrderProvider } from './components/OrderContext';
import Header from './components/layout/Header';
import Menu from './components/menu/Menu';
import OrderType from './components/orderType/OrderType';
import PaymentMethod from './components/paymentMode/PaymentMode';
import OrderDetails from './components/orderDetails/OrderDetails';



function App() {
  return (
    <>



      <BrowserRouter basename="/">
        <OrderProvider>

          <Header />
          <Routes>
            <Route path="/" element={<OrderType />} /> {/* 👈 Renders at /app/ */}
            <Route path="/menu" element={<Menu /> } /> {/* 👈 Renders at /app/ */}
            <Route path="/payment" element={<PaymentMethod />} /> {/* 👈 Renders at /app/ */} 
            <Route path="/orderDetails" element={<OrderDetails />} /> {/* 👈 Renders at /app/ */} 

          </Routes>
        </OrderProvider>

      </BrowserRouter>










    </>
  );
}

export default App;
