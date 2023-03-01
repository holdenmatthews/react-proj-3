import React from "react";
import { Link } from "react-router-dom";
import salmon from "../../assets/salmon.jpg";
import styles from './Home.module.css'

const AdBanner = () => {
  return (
    <div 
      className={styles.ad_banner}
      style={{
        background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 0.6)),
          url(${salmon})`,
        backgroundSize: "cover",
      }}
    >
      <div className={styles.ad_text}>
        <h3>New Recipe</h3>
        <h1>Pineapple Salmon</h1>
        <h3>
          This recipe consists of fresh wild Alaskan salmon, rubbed in a bbq
          brown sugar rub, baked for 25 minutes on a bed of pineapple, and garnished in butter, garlic, and chives. You won’t want to miss it!
        </h3>
        <Link to="/recipe/3">
          <button className={styles.blue_btn}>Check it out</button>
        </Link>
      </div>
    </div>
  );
};

export default AdBanner;
