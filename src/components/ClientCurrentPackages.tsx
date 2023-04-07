import { FiPlus } from 'react-icons/fi';
import { BiWindowClose } from 'react-icons/bi';

import { useState, useEffect } from 'react';

type inputBoxTagProp = {
  packageName: string;
  //   currentPackages: any;
};

const ClientCurrentPackages = ({ packageName }: inputBoxTagProp) => {
  const [openPackages, setOpenPackages] = useState<Boolean>(false);
  const [unPickPackages, setunPickPackages] = useState<[]>([]);

  const currentPackages: any = [];

  const fetchCurrentPackages = async () => {
    const res = await fetch(`${import.meta.env.VITE_HOST_URL}/package/get`);
    const data = await res.json();

    const filteredResult =
      (packageName === 'Individual Packages' &&
        data.filter((dat: any) => dat.package_type === 'Individual')) ||
      (packageName === 'Group Packages' &&
        data.filter((dat: any) => dat.package_type === 'Group'));

    const finalFilteredResult =
      currentPackages.length > 0
        ? filteredResult.filter((fltRes: any) =>
            currentPackages.some((curPack: any) => curPack.id !== fltRes.id)
          )
        : filteredResult;

    setunPickPackages(finalFilteredResult);
  };

  useEffect(() => {
    fetchCurrentPackages();
  }, []);

  return (
    <div className="flex flex-col gap-[5px]">
      <div className="flex items-center justify-between">
        <h3 className="text-[18px] font-semibold">{packageName}</h3>
        {openPackages ? (
          <BiWindowClose
            onClick={() => setOpenPackages(false)}
            className="w-[30px] h-[30px] bg-red-500 rounded-full p-[5px] cursor-pointer text-white"
          />
        ) : (
          <FiPlus
            onClick={() => setOpenPackages(true)}
            className="w-[30px] h-[30px] bg-green-500 rounded-full p-[5px] cursor-pointer text-white"
          />
        )}
      </div>
      {openPackages ? (
        <div className="flex flex-wrap gap-[5px] my-[5px]">
          {unPickPackages.map((pack: any) => (
            <p
              className="px-[10px] py-[5px] bg-bgBlack text-primary rounded-full text-[14px] font-semibold cursor-pointer hover:bg-primary hover:text-white"
              key={pack.id}
            >
              {pack.package_name}
            </p>
          ))}
        </div>
      ) : null}

      <div className="bg-bgBlack p-[10px] rounded-md flex flex-col gap-[10px]">
        <div className="flex justify-between bg-gray-200 p-[10px] rounded-sm cursor-pointer">
          <p className="text-bgBlack font-bold text-[15px]">Pilates</p>
          <p className="text-bgBlack font-bold text-[15px]">50</p>
        </div>
        <div className="flex justify-between bg-gray-200 p-[10px] rounded-sm cursor-pointer">
          <p className="text-bgBlack font-bold text-[15px]">Pilates</p>
          <p className="text-bgBlack font-bold text-[15px]">50</p>
        </div>
        <div className="flex justify-between bg-gray-200 p-[10px] rounded-sm cursor-pointer">
          <p className="text-bgBlack font-bold text-[15px]">Pilates</p>
          <p className="text-bgBlack font-bold text-[15px]">50</p>
        </div>
      </div>
    </div>
  );
};

export default ClientCurrentPackages;
