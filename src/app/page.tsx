import Header from "@/components/header/header";
import styles from "./page.module.scss";
import HomeBanner from "@/components/homeBanner/homeBanner";
import Magazine from "@/components/magazine/magazine";
import VideoBanner from "@/components/videoBanner/videoBanner";
import { Suspense } from "react";
import LogoSection from "@/components/logoSection/logoSection";
import PopularAttractions from "@/components/popularAttractions/popularAttractions";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HomeBanner />
      <PopularAttractions />
      <Magazine />
      <Suspense>
        <VideoBanner />
      </Suspense>
      <LogoSection />
    </main>
  );
}
