import Image from "next/image";
import React from "react";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className="sectionContainer">
      <div>
        <ul className={styles.topBar}>
          <li>List Your Hotel</li>
          <li>Publish News</li>
          <li>Login</li>
          <li>
            <button>FIND A HOTEL</button>
          </li>
        </ul>
        <ul className={styles.bottomBar}>
          <li className={styles.imgContainer}>
            <Image
              src={"/images/logo.svg"}
              width={320}
              height={51}
              alt="luxury hotel logo"
            />
          </li>
          <li>Home</li>
          <li>Luxury Hotels & Resorts</li>
          <li>News</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
