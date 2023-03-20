
import { STYLES } from "../styles";
import Trainer from "./Trainer";
import {ABOUT_TRAINERS} from '../assets/content';
const ShowcaseTrainer = () => {
  return (
    <section id="trainer-section" className="w-full bg-bgWhite">
      <div
        className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX} ${STYLES.paddingY}`}
      >
        <h2 className={STYLES.heading2OnBgWhite}>Our Trainers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] mt-[20px]">
          {ABOUT_TRAINERS.map((aboutTrainer)=>           
          <Trainer
            trainerName={aboutTrainer.trainerName}
            trainerPhotoUrl={aboutTrainer.trainerPhotoUrl}
          />)}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseTrainer;
