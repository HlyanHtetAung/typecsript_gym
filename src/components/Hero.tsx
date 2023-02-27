import React from "react";
import { Link } from "react-router-dom";
import { STYLES } from "../styles";

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="w-full bg-[url(https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brunette-girl-doing-pilates-exercise-for-the-royalty-free-image-1660039849.jpg)] 
    h-[600px] bg-cover bg-center bg-no-repeat"
    >
      <div
        className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX}`}
      >
        <div className="onImage-blackBg-color w-full ss:w-[450px] px-[50px] py-[60px] flex flex-col gap-[10px]">
          <h2 className={`${STYLES.heading2}`}>Soul For Pilates</h2>
          <p className={STYLES.letter}>
            Lorem ipsum dolor sit amet consectetur. Sit fusce scelerisque quis
            mi mattis leo facilisis. Dolor turpis purus ridiculus faucibus
            facilisis. Proin nam tortor porttitor nunc ut bibendum. Ligula
            aliquam ut ut interdum dignissim vestibulum tempus ac scelerisque.
          </p>
          <Link to="/classes">
            <button
              className={`${STYLES.button} w-[50%] mt-[30px] text-[16px]`}
            >
              View Classes
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
