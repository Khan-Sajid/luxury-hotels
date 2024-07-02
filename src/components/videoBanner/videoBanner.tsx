"use client";
import React from "react";
import styles from "./videoBanner.module.scss";
import Image from "next/image";

const VideoBanner = () => {
  return (
    <section className={styles.videoBanner}>
      <iframe
        src="https://www.youtube.com/embed/4j9XkiTWSrA,HoZbrQlc3gw?&autoplay=1&mute=1&loop=1&color=white&controls=0&playsinline=1&rel=0&playlist=4j9XkiTWSrA,HoZbrQlc3gw"
        frameBorder="0"
      ></iframe>
      <div className={styles.overLay}>
        <Image src="/images/whiteLogo.png" alt="logo" width={460} height={58} />
        <p>Presents</p>
      </div>
    </section>
  );
};

export default VideoBanner;
