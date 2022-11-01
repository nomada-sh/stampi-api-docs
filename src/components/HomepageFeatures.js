import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import LottieControl from "../components/LottieControl";

import easy from '../../static/img/easy.json'

const FeatureList = [
  {
    title: "Fácil de usar",
    Svg: require("../../static/img/easy.svg").default,
  },
  {
    title: "Enfocado a desarrolladores",
    Svg: require("../../static/img/developer.svg").default,
  },
  {
    title: "Abierto a integraciones con terceros",
    Svg: require("../../static/img/third.svg").default,
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
