import { STYLES } from "../styles";
import {
  useGetTrainers,
  useGetCategories,
  useGetPackages,
} from "../customHooks/index";
import DropdownInputTag from "../components/DropdownInputTag";
import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import TimeSelector from "../components/TimeSelector";
import dayjs, { Dayjs } from "dayjs";

import { MdOutlineDelete } from "react-icons/md";

interface objType {
  selectedPackage: {};
  selectedTrainer: {};
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
  selectedPackage: {},
  selectedTrainer: {},
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
  const { packages } = useGetPackages();
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

  const selectTrainerHandle = useCallback(
    (selected: {}) => {
      setClassData((prev) => ({ ...prev, selectedTrainer: selected }));
    },
    [classData.selectedTrainer]
  );

  const selectPackageHandle = useCallback(
    (selected: {}) => {
      setClassData((prev) => ({ ...prev, selectedPackage: selected }));
    },
    [classData.selectedPackage]
  );

  const filterPackageHandle = (objPropertyName: string, value: string) => {
    return packages.filter((pkage: any) =>
      pkage[objPropertyName]
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

  const deleteTimeHandle = (index: number) => {
    const copiedSelectedTimeAry = classData.selectedDateTime.find(
      (res) => res.dateDay === currentDay
    )?.selectedTime;

    copiedSelectedTimeAry?.splice(index, 1);
    setClassData((prev: any) => ({
      ...prev,
      selectedDateTime: prev.selectedDateTime.map((selDateTime: any) =>
        selDateTime.dateDay === currentDay
          ? { ...selDateTime, selectedTime: copiedSelectedTimeAry }
          : selDateTime
      ),
    }));
  };

  // for Edit class form
  useEffect(() => {
    if (edit)
      setClassData({
        selectedPackage: {
          category_id: 1,
          id: 1,
          package_name: "Yoga Group",
          package_type: "Group",
          plan_id: 1,
          point_price: 100,
        },
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

  const createClassHandle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(classData);
    fetch("http://127.0.0.1:5000/classes/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(classData),
    });
  };

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
          showMultipleLables={["package_name", "package_type"]}
          selectedLabel="Package"
          initialLetter="Please select package"
          dropdownValues={filterPackageHandle}
          objPropertyName="package_name"
          selectedDropdownValue={classData.selectedPackage}
          selectHandle={selectPackageHandle}
        />
        <DropdownInputTag
          selectedLabel="Trainer"
          initialLetter="Please select Trainers"
          dropdownValues={filteredTrainersHandle}
          objPropertyName="name"
          selectedDropdownValue={classData.selectedTrainer}
          selectHandle={selectTrainerHandle}
        />
        <div className="flex flex-wrap gap-[10px]">
          {classData.selectedDateTime.map((date) => (
            <h2
              onClick={() => setCurrentDay(date.dateDay)}
              className={`${
                date.selectedTime.length > 0
                  ? "bg-green-600 font-semibold text-white"
                  : currentDay === date.dateDay && "bg-secondary text-white"
              }  flex items-center justify-center flex-1 py-[7px] px-[30px] 
              rounded-md cursor-pointer text-secondary font-poppins font-normal 
              hover:bg-secondary hover:text-white`}
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
        <h3 className={`text-[18px] font-poppins font-normal`}>
          For {currentDay}
        </h3>
        <div className="min-h-[200px] bg-gray-200 rounded-md p-3 flex flex-col gap-2">
          {classData.selectedDateTime
            .filter((selectData) => selectData.dateDay === currentDay)[0]
            .selectedTime.map((selTime, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white px-[10px] py-[15px] rounded-lg"
              >
                <p className="font-poppins text-[16px]">
                  {selTime.startTime} to {selTime.endTime}
                </p>
                <MdOutlineDelete
                  onClick={() => deleteTimeHandle(index)}
                  className={`w-[25px] h-[25px] text-red-400 cursor-pointer hover:text-red-900 duration-300`}
                />
              </div>
            ))}
        </div>
        <button
          onClick={(e) => createClassHandle(e)}
          className="bg-primary py-[10px] rounded-md font-poppins font-bold text-secondary"
        >
          Create Class
        </button>
      </div>
    </div>
  );
};

export default CreateClass;
