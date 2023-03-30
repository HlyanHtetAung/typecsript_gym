import React from 'react';
import { Link } from 'react-router-dom';
import { STYLES } from '../styles';

type clientClassProps = {
  trainerName: string;
  categoryName: string;
  packageId: number;
  trainerId: number;
  packageType: string;
};

const ClientClass = ({
  trainerName,
  categoryName,
  packageId,
  trainerId,
  packageType,
}: clientClassProps) => {
  return (
    <div className="bg-gray-200 rounded-md p-[10px] drop-shadow-lg">
      <div className="flex justify-between  rounded-md cursor-pointer">
        <h2 className="text-[20px] font-bold">{trainerName}</h2>
        <div className="flex items-center gap-[5px] rounded-md">
          <p className="text-[14px] font-normal bg-primary py-[3px] px-[10px] rounded-full">
            {categoryName}
          </p>
          <p className="text-[14px] font-normal bg-gray-700 py-[3px] px-[10px] rounded-full text-white">
            {packageType}
          </p>
        </div>
      </div>
      <Link to={`/classStatusDetail/${packageId}/${trainerId}`}>
        <button className="w-full mt-[10px] py-[4px] bg-green-300 rounded-md text-black font-semibold hover:bg-green-400 duration-300 text-[15px]">
          View Class Status
        </button>
      </Link>
    </div>
  );
};

export default ClientClass;
