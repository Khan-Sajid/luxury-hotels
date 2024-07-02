import Image from "next/image";
import React from "react";
import styles from "./homeBanner.module.scss";

const HomeBanner = () => {
  return (
    <section className={styles.homeBannerSection} style={{ height: 845 }}>
      <Image
        src={"/images/homeBanner.png"}
        width={1440}
        height={759}
        className={styles.bannerImage}
        alt="home page banner"
      />
      <div className={"sectionContainer" + ` ${styles.content}`}>
        <div className={styles.innerContent}>
          <div className={styles.mainContent}>
            <h2>Welcome to Luxury hotels</h2>
            <p>Ho</p>
          </div>
          <div className={styles.search}>
            <div className={styles.searchItems}>
              <span>
                <Image
                  src={"/icons/hotel.svg"}
                  width={24}
                  height={24}
                  alt="hotel icon"
                />
                Hotel name
              </span>
              <input type="text" />
            </div>
            <div className={styles.searchItems}>
              <span>
                <Image
                  src={"/icons/location.svg"}
                  width={24}
                  height={24}
                  alt="hotel icon"
                />
                Country
              </span>
              <input type="text" />
            </div>
            <button>Find hotel</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
