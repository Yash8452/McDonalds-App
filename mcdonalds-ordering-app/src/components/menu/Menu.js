
import React, {useState } from 'react';
import classes from './Menu.module.css'

import BigMac from '../../assests/meals/BigMac.jpg'
import McChicken from '../../assests/meals/McChicken.jpg'
import FiletOFish from '../../assests/meals/Filet-O-Fish.jpg'
import McNuggets from '../../assests/meals/McNuggets.jpg'
import Cheeseburger from '../../assests/meals/Cheeseburger.jpg'
import Fries from '../../assests/meals/Fries.jpg'
import Coffee from '../../assests/meals/Coffee.jpg'
import VanillaCone from '../../assests/meals/VanillaCone.jpg'
import SausageBurrito from '../../assests/meals/SausageBurrito.jpg'
import BigBreakfast from '../../assests/meals/BigBreakfast.jpg'

import MaterialIcon from 'material-icons-react';


import { useOrderContext } from '../OrderContext';
import Cart from '../cart/Cart';



const Menu = () => {
    const { orderType, addToCart } = useOrderContext();
    const [showCart, setShowCart] = useState(false);
    const [menuWidth, setMenuWidth] = useState('100%');

    const handleCartButtonClick = () => {
        
        setMenuWidth(menuWidth === '100%' ? '80%' : '100%');

        setShowCart(!showCart);
        
    };

    const renderCartToggleButton = () => {
        return (
            <>
                {orderType && (
                    <div className={classes['cartbtn']}>
                        <button onClick={handleCartButtonClick}> 
                     {!showCart ?  <MaterialIcon icon="fastfood"/> : "X"}
                        </button>
                    </div >
                )}
            </>

        );
    };


    const menuItems = [
        {
            id: 1,
            name: 'Big Mac',
            description: 'Two all-beef patties, special sauce, lettuce, cheese, pickles, onions on a sesame seed bun.',
            price: 350.00, // Price in INR
            image: BigMac,
        },
        {
            id: 2,
            name: 'McChicken',
            description: 'A crispy chicken patty topped with lettuce and mayonnaise on a sesame seed bun.',
            price: 275.00, // Price in INR
            image: McChicken,
        },
        {
            id: 3,
            name: 'Filet-O-Fish',
            description: 'A fish filet topped with tartar sauce and a half-slice of cheese on a steamed bun.',
            price: 310.00, // Price in INR
            image: FiletOFish,
        },
        {
            id: 4,
            name: 'Cheeseburger',
            description: 'A simple cheeseburger with a beef patty, cheese, pickles, onions, ketchup, and mustard.',
            price: 150.00, // Price in INR
            image: Cheeseburger,
        },
        {
            id: 5,
            name: 'McNuggets',
            description: 'Ten pieces of crispy chicken McNuggets served with your choice of dipping sauce.',
            price: 490.00, // Price in INR
            image: McNuggets,
        },
        {
            id: 6,
            name: 'Big Breakfast',
            description: 'Scrambled eggs, sausage, hash browns, and a biscuit.',
            price: 420.00, // Price in INR
            image: BigBreakfast,
        },
        {
            id: 7,
            name: 'McCafé Coffee',
            description: 'A hot cup of freshly brewed coffee from McCafé.',
            price: 90.00, // Price in 
            image: Coffee,
        },
        {
            id: 8,
            name: 'Fries (Medium)',
            description: 'Golden, crispy French fries sprinkled with salt.',
            price: 120.00, // Price in INR
            image: Fries,
        },
        {
            id: 9,
            name: 'Sausage Burrito',
            description: 'loaded with fluffy scrambled egg, pork sausage, melty cheese, green chiles, and onion!',
            price: 80.00, // Price in INR
            image: SausageBurrito,
        },
        {
            id: 10,
            name: 'Vanilla Cone',
            description: 'Creamy vanilla soft-serve ice cream in a crispy cone.',
            price: 60.00, // Price in INR
            image: VanillaCone,
        },
    ];


    return (
        <>
            {renderCartToggleButton()}
            <main>

                {orderType && (

                    <div style={{ width: menuWidth, transition: 'width 0.5s' }} className={classes["menuContainer"]}>
                        <div className={classes["main-title"]}>
                            <h1 className={classes['one']}>Hey, </h1>
                            <h1 className={classes['two']}>whats up? </h1>
                        </div>
                        <ul className={classes["menuList"]}>
                            {menuItems.map((item) => (
                                <li key={item.id} className={classes['menuCard']}>
                                    <div className={classes["cardImage"]}>
                                        <img src={item.image} alt={item.name} />
                                    </div>
                                    <div className={classes['menuCardContent']}>
                                        <h3>{item.name}</h3>
                                        <p>₹{item.price}</p>
                                        <button onClick={() => addToCart(item)}><MaterialIcon icon="add" size={35} /></button>
                                    </div>

                                </li>
                            ))}
                        </ul>
                    </div>

                )}
                {showCart && <Cart />}

            </main>
        </>


    );
};

export default Menu;
