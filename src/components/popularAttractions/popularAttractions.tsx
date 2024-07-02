import React from "react";
import styles from "./popularAttractions.module.scss";
import Heading from "../commonComponents/heading/heading";
import Image from "next/image";

const attractions = [
  {
    name: "Wessminster Abbey",
    img: "/images/attraction1.png",
    rating: "4.6/7",
    reviews: "938 reviews",
  },
  {
    name: "Wessminster Abbey",
    img: "/images/attraction2.png",
    rating: "4.6/7",
    reviews: "1238 reviews",
  },
  {
    name: "Wessminster Abbey",
    img: "/images/attraction3.png",
    rating: "4.6/7",
    reviews: "948 reviews",
  },
  {
    img: "/images/attraction1.png",
    explore: true,
  },
];

const PopularAttractions = () => {
  return (
    <section>
      <Heading text="Popular attractions" />
      <div className="sectionContainer">
        <div>
          <div className={styles.buttonGroup}>
            {["London", "Manchester", "Bankok", "New York", "New Delhi"].map(
              (place, index) => {
                return (
                  <button
                    key={place}
                    className={index === 0 ? styles.active : ""}
                  >
                    {place}
                  </button>
                );
              }
            )}
          </div>
          <div className={styles.attractions}>
            {attractions.map((attraction) => {
              return (
                <div key={attraction.name} className={styles.attraction}>
                  <Image
                    src={attraction.img}
                    alt="img"
                    width={!attraction?.explore ? 284 : undefined}
                    height={!attraction?.explore ? 284 : undefined}
                    fill={attraction?.explore}
                    className={attraction?.explore ? styles.fullImage : ""}
                  />
                  {attraction.name && <p>{attraction.name}</p>}
                  {attraction?.rating && (
                    <div className={styles.rating}>
                      <span>{attraction.rating}</span>
                      <span> {"( " + attraction.reviews + " )"}</span>
                    </div>
                  )}
                  {attraction?.explore && (
                    <div className={styles.exploreMore}>
                      <p>Explore more popular destinations</p>
                      <button>Go Now</button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularAttractions;
