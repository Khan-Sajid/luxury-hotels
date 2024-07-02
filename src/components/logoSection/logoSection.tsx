import React from "react";
import Heading from "../commonComponents/heading/heading";
import styles from "./logoSection.module.scss";
import Image from "next/image";

const logoes = [
  "/images/logo_1.png",
  "/images/logo_2.png",
  "/images/logo_3.png",
  "/images/logo_4.png",
  "/images/logo_5.png",
];

const LogoSection = () => {
  return (
    <section className={styles.logoSection}>
      <Heading text={"Who we are working with"} />
      <div className="sectionContainer">
        <div className={styles.logoes}>
          {logoes.map((logo, index) => {
            return (
              <Image
                src={logo}
                alt={"logo " + `${index}`}
                key={logo}
                width={220}
                height={136}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
