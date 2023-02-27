import React from "react";
import { NavLink } from "react-router-dom"
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <h2>Devmountain Eatery</h2>
      <nav>
        <NavLink to="">
          <button className={styles.nav_btn}>Home</button>
        </NavLink>
        <NavLink to="/newRecipe">
          <button className={styles.nav_btn}>Add Recipe</button>
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
