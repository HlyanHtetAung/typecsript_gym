import { useState, useEffect, useRef } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

type DropdownInputTagProps = {
  initialLetter: string;
  dropdownValues: (propertyName: string, value: string) => any;
  objPropertyName: string;
  selectedDropdownValue: any;
  selectHandle: (selected: {}) => void;
  selectedLabel: string;
};

const DropdownInputTag = ({
  initialLetter,
  dropdownValues,
  objPropertyName,
  selectedDropdownValue,
  selectHandle,
  selectedLabel,
}: DropdownInputTagProps) => {
  const [openDropdown, setOpenDropdown] = useState<Boolean>(false);
  const [searchInput, setSearchInput] = useState<string>("");
  const dropdownInputWrapperRef = useRef<HTMLDivElement>(null);
  const dropdownHeaderRef = useRef<HTMLHeadingElement>(null);
  const dropdownIconRef = useRef<HTMLDivElement>(null);
  const dropdownValueRef = useRef<HTMLUListElement>(null);
  const dropdownHeaderWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeDropdownHandle = ({ target }: MouseEvent) => {
      if (dropdownValueRef?.current?.contains(target as Node)) {
        setOpenDropdown(false);
        return;
      }
      if (dropdownInputWrapperRef?.current?.contains(target as Node)) {
        if (dropdownInputWrapperRef.current === (target as Node)) {
          setOpenDropdown((prev) => !prev);
          return;
        }
        if (dropdownHeaderWrapperRef.current === (target as Node)) {
          setOpenDropdown((prev) => !prev);
          return;
        }
        if (dropdownHeaderRef.current === (target as Node)) {
          console.log("triggered");
          setOpenDropdown((prev) => !prev);
          return;
        }
        if (dropdownIconRef?.current?.contains(target as Node)) {
          console.log("triggered");
          setOpenDropdown((prev) => !prev);
          return;
        }
        setOpenDropdown(true);
        return;
      }
      if (!dropdownInputWrapperRef?.current?.contains(target as Node)) {
        setOpenDropdown(false);
        return;
      }
    };

    window.addEventListener("click", closeDropdownHandle);
    return () => window.removeEventListener("click", closeDropdownHandle);
  }, []);

  return (
    <div ref={dropdownInputWrapperRef} className="cursor-pointer">
      {Object.keys(selectedDropdownValue).length > 0 ? (
        <p className="font-normal font-poppins pb-[5px]">{selectedLabel}</p>
      ) : null}
      <div
        ref={dropdownHeaderWrapperRef}
        className={`flex items-center justify-between py-[10px] px-[10px]  ${
          openDropdown ? "rounded-tl-md rounded-tr-md" : "rounded-md"
        } ${
          Object.keys(selectedDropdownValue).length > 0
            ? "bg-green-600"
            : "bg-secondary"
        }`}
      >
        <h3
          className="font-poppins font-semibold text-white"
          ref={dropdownHeaderRef}
        >
          {Object.keys(selectedDropdownValue).length > 0
            ? selectedDropdownValue[objPropertyName]
            : initialLetter}
        </h3>
        <div ref={dropdownIconRef}>
          <RiArrowDropDownLine className="w-[30px] h-[30px] text-white" />
        </div>
      </div>
      <div
        className={`${
          !openDropdown ? "open_dropdown" : "open_dropdown active"
        }`}
      >
        <div className="flex items-center py-[10px] px-[10px] gap-2 bg-gray-200">
          <CiSearch className="w-[30px] h-[30px]" />
          <input
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value);
            }}
            className="outline-none flex-1 bg-transparent"
            type="text"
            placeholder="Search..."
          />
        </div>
        <ul className="flex flex-col bg-gray-200" ref={dropdownValueRef}>
          {dropdownValues(objPropertyName, searchInput).map(
            (ddValue: any, index: any) => (
              <li
                onClick={() => {
                  selectHandle(ddValue);
                  setSearchInput("");
                }}
                key={ddValue.id}
                className={`${
                  index ===
                  dropdownValues(objPropertyName, searchInput).length - 1
                    ? null
                    : "border-b border-gray-300"
                } px-[20px] py-[10px] hover:bg-primary font-poppins font-normal text-normal`}
              >
                {ddValue[objPropertyName]}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default DropdownInputTag;
