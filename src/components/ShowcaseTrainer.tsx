import React from "react";
import { STYLES } from "../styles";
import Trainer from "./Trainer";

const ShowcaseTrainer = () => {
  return (
    <section id="trainer-section" className="w-full bg-bgWhite">
      <div
        className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX} ${STYLES.paddingY}`}
      >
        <h2 className={STYLES.heading2OnBgWhite}>Our Trainers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] mt-[20px]">
          <Trainer
            classType="Pliate"
            trainerName="John Cena"
            trainerPhotoUrl="https://media.istockphoto.com/id/1072395722/photo/fitness-trainer-at-gym.jpg?s=612x612&w=0&k=20&c=3VBLCgbxG3bGNRp9Sc3tN_7G-g_DxXhGk9rhuZo-jkE="
          />
          <Trainer
            classType="Yoga"
            trainerName="John Cena"
            trainerPhotoUrl="https://as2.ftcdn.net/v2/jpg/03/17/17/65/1000_F_317176586_WzFEf0NXPTEYVYhH4jbBOw6kRjYLqeWC.jpg"
          />
          <Trainer
            classType="Pliate"
            trainerName="Lisa"
            trainerPhotoUrl="https://cdn.cliqueinc.com/posts/297618/lisa-blackpink-297618-1643621385216-image.700x0c.jpg"
          />
          <Trainer
            classType="Pliate"
            trainerName="Jihyo"
            trainerPhotoUrl="https://upload.wikimedia.org/wikipedia/commons/e/e5/20220121%E2%80%94Jihyo_%EC%A7%80%ED%9A%A8_Campaign_Film%2C_Pearlygates_x_Twice_2022.jpg"
          />
          <Trainer
            classType="Yoga"
            trainerName="Dua Lipa"
            trainerPhotoUrl="https://images.news18.com/ibnlive/uploads/2022/03/pjimage-14-2.jpg"
          />
          <Trainer
            classType="Pliate"
            trainerName="Nayeon"
            trainerPhotoUrl="https://6.viki.io/image/e8607b51f6a8444aba320d3784f53069/dummy.jpeg?s=900x600&e=t"
          />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseTrainer;
