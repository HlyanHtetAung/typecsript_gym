import { STYLES } from "../styles";
import { useGetTrainers, useGetCategories } from "../customHooks/index";
import DropdownInputTag from "../components/DropdownInputTag";
import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import TimeSelector from "../components/TimeSelector";
import dayjs, { Dayjs } from "dayjs";

interface objType {
  selectedCategory: {};
  selectedTrainer: {};
  selectedClassType: {};
  selectedGroupType: {};
  selectedDateTime: [
    {
      dateDay: string;
      selectedTime: any[];
    },
    {
      dateDay: string;
      selectedTime: any[];
    },
    {
      dateDay: string;
      selectedTime: any[];
    },
    {
      dateDay: string;
      selectedTime: any[];
    },
    {
      dateDay: string;
      selectedTime: any[];
    },
    {
      dateDay: string;
      selectedTime: any[];
    },
    {
      dateDay: string;
      selectedTime: any[];
    }
  ];
}

const INITIAL_CLASS_DATA: objType = {
  selectedCategory: {},
  selectedTrainer: {},
  selectedClassType: {},
  selectedGroupType: {},
  selectedDateTime: [
    {
      dateDay: "Sun",
      selectedTime: [],
    },
    {
      dateDay: "Mon",
      selectedTime: [],
    },
    {
      dateDay: "Tue",
      selectedTime: [],
    },
    {
      dateDay: "Wed",
      selectedTime: [],
    },
    {
      dateDay: "Thu",
      selectedTime: [],
    },
    {
      dateDay: "Fri",
      selectedTime: [],
    },
    {
      dateDay: "Sat",
      selectedTime: [],
    },
  ],
};

type classType = {
  classTypeName: string;
  id: number;
};

type createClassProps = {
  edit?: boolean;
};

const CreateClass = ({ edit }: createClassProps) => {
  const param = useParams();
  console.log(param);
  const { categories } = useGetCategories();
  const { trainers } = useGetTrainers();
  const [fromTime, setFromTime] = useState<Dayjs | null>(null);
  const [toTime, setToTime] = useState<Dayjs | null>(null);
  const [currentDay, setCurrentDay] = useState<string>("Sun");

  const groupTypes = [
    { groupTypeName: "Group", id: 1 },
    { groupTypeName: "Individual", id: 2 },
  ];

  const classTypes: classType[] = [
    { id: 1, classTypeName: "Regular" },
    { id: 2, classTypeName: "Special" },
  ];

  const [classData, setClassData] = useState<objType>(INITIAL_CLASS_DATA);

  const selectCategoryHandle = useCallback(
    (selected: {}) => {
      setClassData((prev) => ({ ...prev, selectedCategory: selected }));
    },
    [classData.selectedCategory]
  );

  const selectTrainerHandle = useCallback(
    (selected: {}) => {
      setClassData((prev) => ({ ...prev, selectedTrainer: selected }));
    },
    [classData.selectedTrainer]
  );

  const selectClassTypeHandle = useCallback(
    (selected: {}) => {
      setClassData((prev) => ({ ...prev, selectedClassType: selected }));
    },
    [classData.selectedClassType]
  );

  const selectGroupTypeHandle = useCallback(
    (selected: {}) => {
      setClassData((prev) => ({ ...prev, selectedGroupType: selected }));
    },
    [classData.selectedClassType]
  );

  const filteredCategoriesHandle = (objPropertyName: string, value: string) => {
    return categories.filter((category: any) =>
      category[objPropertyName]
        .replace(/\s/gm, "")
        .toLowerCase()
        .includes(value.toLocaleLowerCase().replace(/\s/gm, ""))
    );
  };

  const filteredTrainersHandle = (objPropertyName: string, value: string) => {
    return trainers.filter((category: any) =>
      category[objPropertyName]
        .replace(/\s/gm, "")
        .toLowerCase()
        .includes(value.toLocaleLowerCase().replace(/\s/gm, ""))
    );
  };

  const filteredClassTypesHandle = (objPropertyName: string, value: string) => {
    return classTypes.filter((category: any) =>
      category[objPropertyName]
        .replace(/\s/gm, "")
        .toLowerCase()
        .includes(value.toLocaleLowerCase().replace(/\s/gm, ""))
    );
  };

  const filteredGroupTypesHandle = (objPropertyName: string, value: string) => {
    return groupTypes.filter((category: any) =>
      category[objPropertyName]
        .replace(/\s/gm, "")
        .toLowerCase()
        .includes(value.toLocaleLowerCase().replace(/\s/gm, ""))
    );
  };

  const resetDataHandle = () => {
    setClassData(INITIAL_CLASS_DATA);
  };

  const addTimeHandle = () => {
    // console.log(!fromTime);
    // console.log("From Time", dayjs(fromTime?.toISOString()).format("LT"));
    // console.log("To Time", dayjs(toTime?.toISOString()).format("LT"));
    // const toPushObj = { startTime: "", endTime: "" };

    setClassData((prev: any) => ({
      ...prev,
      selectedDateTime: prev.selectedDateTime.map((selDateTime: any) =>
        selDateTime.dateDay === currentDay
          ? {
              ...selDateTime,
              selectedTime: [
                ...selDateTime.selectedTime,
                {
                  startTime: dayjs(fromTime?.toISOString()).format("LT"),
                  endTime: dayjs(toTime?.toISOString()).format("LT"),
                },
              ],
            }
          : selDateTime
      ),
    }));
    setFromTime(null);
    setToTime(null);
  };
  console.log(classData);
  // for Edit class form
  useEffect(() => {
    if (edit)
      setClassData({
        selectedCategory: { id: 1, name: "Yoga" },
        selectedClassType: { id: 2, classTypeName: "Special" },
        selectedGroupType: { groupTypeName: "Individual", id: 2 },
        selectedTrainer: { id: 2, name: "Trainer 2" },
        selectedDateTime: [
          {
            dateDay: "Sun",
            selectedTime: [],
          },
          {
            dateDay: "Mon",
            selectedTime: [],
          },
          {
            dateDay: "Tue",
            selectedTime: [],
          },
          {
            dateDay: "Wed",
            selectedTime: [],
          },
          {
            dateDay: "Thu",
            selectedTime: [],
          },
          {
            dateDay: "Fri",
            selectedTime: [],
          },
          {
            dateDay: "Sat",
            selectedTime: [],
          },
        ],
      });
  }, []);
  console.log(currentDay);

  console.log("filter Result");

  return (
    <div className="w-full">
      <div
        className={`${STYLES.form_max_width} ${STYLES.paddingY} ${STYLES.margin_center} ${STYLES.paddingX} flex flex-col gap-[20px]`}
      >
        <div className="flex items-center justify-between">
          <h3 className={`${STYLES.formHeading}`}>Create Class Form</h3>
          <button
            onClick={resetDataHandle}
            className="bg-red-500 py-[6px] px-[10px] rounded-md text-red-900 font-poppins text-[15px]"
          >
            Reset Data
          </button>
        </div>
        <DropdownInputTag
          selectedLabel="Category"
          initialLetter="Please select Category"
          dropdownValues={filteredCategoriesHandle}
          objPropertyName="name"
          selectedDropdownValue={classData.selectedCategory}
          selectHandle={selectCategoryHandle}
        />
        <DropdownInputTag
          selectedLabel="Trainer"
          initialLetter="Please select Trainers"
          dropdownValues={filteredTrainersHandle}
          objPropertyName="name"
          selectedDropdownValue={classData.selectedTrainer}
          selectHandle={selectTrainerHandle}
        />
        <DropdownInputTag
          selectedLabel="Class Type"
          initialLetter="Please select Class Type"
          dropdownValues={filteredClassTypesHandle}
          objPropertyName="classTypeName"
          selectedDropdownValue={classData.selectedClassType}
          selectHandle={selectClassTypeHandle}
        />
        <DropdownInputTag
          selectedLabel="Group Type"
          initialLetter="Please select Group Type"
          dropdownValues={filteredGroupTypesHandle}
          objPropertyName="groupTypeName"
          selectedDropdownValue={classData.selectedGroupType}
          selectHandle={selectGroupTypeHandle}
        />
        <div className="flex flex-wrap gap-[10px]">
          {classData.selectedDateTime.map((date) => (
            <h2
              onClick={() => setCurrentDay(date.dateDay)}
              className="flex items-center justify-center flex-1 py-[7px] px-[30px] rounded-md bg-secondary cursor-pointer text-white font-poppins font-normal"
              key={date.dateDay}
            >
              {date.dateDay}
            </h2>
          ))}
        </div>
        <div className="flex gap-[20px]">
          <TimeSelector label="From" setTime={setFromTime} value={fromTime} />
          <TimeSelector label="To" setTime={setToTime} value={toTime} />
          <button
            onClick={addTimeHandle}
            className="bg-blue-400 px-[20px] rounded-md text-white font-poppins"
          >
            Add
          </button>
        </div>
        <div className="min-h-[200px] bg-gray-200 rounded-md">
          {classData.selectedDateTime
            .filter((selectData) => selectData.dateDay === currentDay)[0]
            .selectedTime.map((selTime) => (
              <p>
                {selTime.startTime} -- {selTime.endTime}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CreateClass;
