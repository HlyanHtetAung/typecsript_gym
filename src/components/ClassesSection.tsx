import React from "react";
import { Link } from "react-router-dom";
import { STYLES } from "../styles";
import ShowcaseClass from "./ShowcaseClass";

const ClassesSection = () => {
  return (
    <section id="classes-section" className="w-full bg-bgBlack">
      <div
        className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX} ${STYLES.paddingY}`}
      >
        <h2 className={STYLES.heading2}>Classes We Provide</h2>
        <ShowcaseClass
          imageUrl="https://images.lifestyleasia.com/wp-content/uploads/sites/6/2019/04/25203114/best-pilates-reformers-amazon.jpg"
          title="Pilate"
          titleInfo="Lorem ipsum dolor sit amet consectetur. Sem velit consequat non ut placerat fermentum habitasse vitae. Id sem nibh nunc auctor. Eleifend eu pellentesque vulputate nisi amet velit commodo laoreet aliquet. Pellentesque risus cursus nec suscipit. Lorem ipsum dolor sit amet consectetur. Sem velit consequat non ut placerat fermentum habitasse vitae. Id sem nibh nunc auctor. Eleifend eu pellentesque vulputate nisi amet velit commodo laoreet aliquet. Pellentesque risus cursus nec suscipit."
        />
        <ShowcaseClass
          imageUrl="https://cdn.shopify.com/s/files/1/1336/0857/articles/Yoga_for_Sleep_1024x.jpg?v=1618334963"
          title="Yoga"
          titleInfo="Lorem ipsum dolor sit amet consectetur. Sem velit consequat non ut placerat fermentum habitasse vitae. Id sem nibh nunc auctor. Eleifend eu pellentesque vulputate nisi amet velit commodo laoreet aliquet. Pellentesque risus cursus nec suscipit. Lorem ipsum dolor sit amet consectetur. Sem velit consequat non ut placerat fermentum habitasse vitae. Id sem nibh nunc auctor. Eleifend eu pellentesque vulputate nisi amet velit commodo laoreet aliquet. Pellentesque risus cursus nec suscipit."
        />
      </div>
    </section>
  );
};

export default ClassesSection;
