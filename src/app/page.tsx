import Header from "@/components/header/header";
import styles from "./page.module.scss";
import HomeBanner from "@/components/homeBanner/homeBanner";
import Magazine from "@/components/magazine/magazine";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <HomeBanner />
      <Magazine />
    </main>
  );
}
