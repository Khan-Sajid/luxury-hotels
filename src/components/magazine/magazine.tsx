import React from "react";
import styles from "./magazine.module.scss";
import Heading from "../commonComponents/heading/heading";
import Image from "next/image";

const Magazine = () => {
  return (
    <section>
      <Heading text="explore magazines" />
      <div className={"sectionContainer " + `${styles.contentDiv}`}>
        <div className={styles.magazineContainer}>
          <div className={styles.content}>
            <p>
              Luxury Hotels, a renowned global brand founded in England 17 years
              ago, is currently present in 89 countries. We provide Luxury
              Hotels for affluent travellers through our online platform and in
              print and digital formats. Each Edition is accessible for free
              download on 5 different platforms and attracts 4-5 million online
              readers annually.
            </p>
            <p>
              Through our Printed Edition Rotation Program, your hotel will be
              featured as one of the top Luxury Hotels and will ensure a
              continuous influx of bookings and a consistent occupancy rate of
              800,000 to 1 million tourists throughout the year, all without any
              commission fees.
            </p>
            <button>Explore magazines</button>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={"/images/magazineFront.png"}
              width={363}
              height={535}
              alt="front-magazine"
              className={styles.mainImg}
            />
            <Image
              src={"/images/magazineInner.png"}
              width={429}
              height={283}
              alt="inner-magazine"
              className={styles.innerImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Magazine;
