import React from "react";
import styles from "./heading.module.scss";

const Heading = ({ text }: { text: string }) => {
  return (
    <div className={"sectionContainer " + styles.heading}>
      <div className={styles.innerDiv}>
        <span>
          <h2>{text}</h2>
        </span>
      </div>
    </div>
  );
};

export default Heading;
