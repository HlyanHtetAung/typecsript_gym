import React from "react";
import { Link } from "react-router-dom";
import { STYLES } from "../styles";

const AdminControls = () => {
  return (
    <div className="w-full">
      <div
        className={`${STYLES.max_width} ${STYLES.paddingY} ${STYLES.paddingX} ${STYLES.margin_center}`}
      >
        {/* Actions */}
        <div className="my-[20px]">
          <h3 className={`${STYLES.formHeading}`}>Actions</h3>
          <div className={`mt-[20px] flex flex-wrap gap-[20px]`}>
            <Link
              to="/createPackage"
              className={`${STYLES.adminContorlActionBtn}`}
            >
              <h3 className={`${STYLES.adminContorlBtnHeading}`}>
                Create Package
              </h3>
            </Link>
            <Link
              to="/createClass"
              className={`${STYLES.adminContorlActionBtn}`}
            >
              <h3 className={`${STYLES.adminContorlBtnHeading}`}>
                Create Class
              </h3>
            </Link>
            <Link
              to="/createCategory"
              className={`${STYLES.adminContorlActionBtn}`}
            >
              <h3 className={`${STYLES.adminContorlBtnHeading}`}>
                Create Category
              </h3>
            </Link>
            <Link
              to="/createPlan"
              className={`${STYLES.adminContorlActionBtn}`}
            >
              <h3 className={`${STYLES.adminContorlBtnHeading}`}>
                Create Plan
              </h3>
            </Link>
            <Link
              to="/createMember"
              className={`${STYLES.adminContorlActionBtn}`}
            >
              <h3 className={`${STYLES.adminContorlBtnHeading}`}>
                Create Member
              </h3>
            </Link>
          </div>
        </div>
        {/* Tables */}
        <div className="my-[20px]">
          <h3 className={`${STYLES.formHeading}`}>Tables</h3>
          <div className={`mt-[20px] flex flex-wrap gap-[20px]`}>
            <Link
              to="/viewPackages"
              className={`${STYLES.adminContorlActionBtn}`}
            >
              <h3 className={`${STYLES.adminContorlBtnHeading}`}>
                View Packages
              </h3>
            </Link>
            <Link
              to="/viewClasses"
              className={`${STYLES.adminContorlActionBtn}`}
            >
              <h3 className={`${STYLES.adminContorlBtnHeading}`}>
                View Classes
              </h3>
            </Link>
            <Link
              to="/viewCategories"
              className={`${STYLES.adminContorlActionBtn}`}
            >
              <h3 className={`${STYLES.adminContorlBtnHeading}`}>
                View Categories
              </h3>
            </Link>
            <Link
              to="/viewMembers"
              className={`${STYLES.adminContorlActionBtn}`}
            >
              <h3 className={`${STYLES.adminContorlBtnHeading}`}>
                View Members
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminControls;
