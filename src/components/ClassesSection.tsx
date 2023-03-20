import { STYLES } from "../styles";
import ShowcaseClass from "./ShowcaseClass";
import {ABOUT_CLASSES} from '../assets/content';

const ClassesSection = () => {
  return (
    <section id="classes-section" className="w-full bg-bgBlack">
      <div
        className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX} ${STYLES.paddingY}`}
      >
        <h2 className={STYLES.heading2}>Classes We Provide</h2>
        {
          ABOUT_CLASSES.map((aboutClass)=>         
          <ShowcaseClass
          imageUrl={aboutClass.imageUrl}
          title={aboutClass.title}
          titleInfo={aboutClass.titleInfo}
        />)
        }
      </div>
    </section>
  );
};

export default ClassesSection;
