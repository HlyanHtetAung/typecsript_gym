import React from "react";
import { STYLES } from "../styles";

const Navbar = () => {
  return (
    <div className={`${STYLES.paddingX} h-[50px] bg-primary flex items-center`}>
      <div className={`${STYLES.max_width} ${STYLES.margin_center}`}>
        Navbar
      </div>
    </div>
  );
};

export default Navbar;
