import React, { useState } from 'react';
import DropdownInputTag from '../components/DropdownInputTag';
import { useGetCategories, useGetPlans } from '../customHooks';
import { STYLES } from '../styles';

type classType = {
  classTypeName: string;
  id: number;
};

interface packageType {
  selectedCategory: {};
  selectedGroupType: {};
  selectedPlan: {};
}

const INITIAL_PACKAGE_DATA: packageType = {
  selectedCategory: {},
  selectedGroupType: {},
  selectedPlan: {},
};

const CreatePackage = () => {
  const { categories } = useGetCategories();
  const { plans } = useGetPlans();

  console.log(plans);
  const [packageData, setPackageData] =
    useState<packageType>(INITIAL_PACKAGE_DATA);

  const classTypes: classType[] = [
    { id: 1, classTypeName: 'Regular' },
    { id: 2, classTypeName: 'Special' },
  ];

  const groupTypes = [
    { groupTypeName: 'Group', id: 1 },
    { groupTypeName: 'Individual', id: 2 },
  ];

  const filterCategoriesHandle = (objPropertyName: string, value: string) => {
    return categories.filter((pkage: any) =>
      pkage[objPropertyName]
        .replace(/\s/gm, '')
        .toLowerCase()
        .includes(value.toLocaleLowerCase().replace(/\s/gm, ''))
    );
  };
  const filterGroupTypeHandle = () => {
    return groupTypes;
  };

  const filterPlanHandle = () => {
    return plans;
  };

  const selectCategoryHandle = (selected: {}) => {
    setPackageData((prev) => ({ ...prev, selectedCategory: selected }));
  };
  const selectGroupTypeHandle = (selected: {}) => {
    setPackageData((prev) => ({ ...prev, selectedGroupType: selected }));
  };
  const selectPlanHandle = (selected: {}) => {
    setPackageData((prev) => ({ ...prev, selectedPlan: selected }));
  };

  const createPackageHandle = () => {
    // fetch(`${import.meta.env.VITE_HOST_URL}/package/add`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(classData),
    // });
  };

  return (
    <div className="w-full">
      <div
        className={`${STYLES.form_max_width} ${STYLES.paddingY} ${STYLES.margin_center} ${STYLES.paddingX} flex flex-col gap-[20px]`}
      >
        <div className="flex items-center justify-between">
          <h3 className={`${STYLES.formHeading}`}>Create Package Form</h3>
          <button className="bg-red-500 py-[6px] px-[10px] rounded-md text-red-900 font-poppins text-[15px]">
            Reset Data
          </button>
        </div>
        <DropdownInputTag
          selectedLabel="Category"
          initialLetter="Please select Category"
          dropdownValues={filterCategoriesHandle}
          objPropertyName="name"
          selectedDropdownValue={packageData.selectedCategory}
          selectHandle={selectCategoryHandle}
          includeSearchInput
        />
        <DropdownInputTag
          selectedLabel="Plan"
          initialLetter="Please select Plan"
          dropdownValues={filterPlanHandle}
          objPropertyName="plan_type"
          selectedDropdownValue={packageData.selectedPlan}
          selectHandle={selectPlanHandle}
        />
        <DropdownInputTag
          selectedLabel="Group Type"
          initialLetter="Please select Group type"
          dropdownValues={filterGroupTypeHandle}
          objPropertyName="groupTypeName"
          selectedDropdownValue={packageData.selectedGroupType}
          selectHandle={selectGroupTypeHandle}
        />
        <button
          onClick={createPackageHandle}
          className="bg-primary py-[10px] rounded-md font-poppins font-bold text-secondary"
        >
          Create Class
        </button>
      </div>
    </div>
  );
};

export default CreatePackage;
