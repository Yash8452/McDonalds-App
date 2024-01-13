import { Fragment } from "react";
import classes from "./Header.module.css";

import logo from '../../assests/logo/logo.png'
import country from '../../assests/logo/country.jpg'

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src={logo} alt="McDonalds Clone" className={classes["logo"]} />
        <img className={classes['country']} src={country} alt="India" />
      </header>
    </Fragment>
  );
};

export default Header;
