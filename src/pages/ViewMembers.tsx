import { STYLES } from '../styles';
import { CiSearch } from 'react-icons/ci';
import { FiPlus } from 'react-icons/fi';
const ViewMembers = () => {
  return (
    <div
      className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX}`}
    >
      <div className="px-[10px] py-[8px] bg-secondary flex items-center gap-[5px] mt-[20px] rounded-md drop-shadow-md">
        <CiSearch className="w-[30px] h-[30px] text-gray-400" />
        <input
          className="outline-none flex-1 bg-transparent placeholder:text-gray-400 font-normal text-white"
          type="text"
          placeholder="search member with id"
        />
      </div>
      <div className="mt-[20px]">
        <div className="bg-gray-200 p-[20px] rounded-md drop-shadow-lg">
          <div className="  rounded-md  flex items-center justify-between">
            <h2 className="text-[20px] font-bold">Customer Name 1</h2>
            <h2 className="text-[20px] font-bold">CID: C001</h2>
          </div>
          <div className="mt-[15px] flex gap-[20px]">
            <div className="flex-1 flex flex-col gap-[10px]">
              <div className="flex flex-col gap-[5px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-semibold">
                    Individual Packages
                  </h3>
                  <FiPlus className="w-[30px] h-[30px] bg-green-500 rounded-full p-[5px] cursor-pointer text-white" />
                </div>
                <div className="bg-bgBlack p-[10px] rounded-md flex flex-col gap-[10px]">
                  <div className="flex justify-between bg-gray-200 p-[10px] rounded-sm cursor-pointer">
                    <p className="text-bgBlack font-bold text-[15px]">
                      Pilates
                    </p>
                    <p className="text-bgBlack font-bold text-[15px]">50</p>
                  </div>
                  <div className="flex justify-between bg-gray-200 p-[10px] rounded-sm cursor-pointer">
                    <p className="text-bgBlack font-bold text-[15px]">
                      Pilates
                    </p>
                    <p className="text-bgBlack font-bold text-[15px]">50</p>
                  </div>
                  <div className="flex justify-between bg-gray-200 p-[10px] rounded-sm cursor-pointer">
                    <p className="text-bgBlack font-bold text-[15px]">
                      Pilates
                    </p>
                    <p className="text-bgBlack font-bold text-[15px]">50</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[5px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-semibold">Group Packages</h3>
                  <FiPlus className="w-[30px] h-[30px] bg-green-500 rounded-full p-[5px] cursor-pointer text-white" />
                </div>
                <div className="bg-bgBlack p-[10px] rounded-md flex flex-col gap-[10px]">
                  <div className="flex justify-between bg-gray-200 p-[10px] rounded-sm cursor-pointer">
                    <p className="text-bgBlack font-bold text-[15px]">
                      Pilates
                    </p>
                    <p className="text-bgBlack font-bold text-[15px]">50</p>
                  </div>
                  <div className="flex justify-between bg-gray-200 p-[10px] rounded-sm cursor-pointer">
                    <p className="text-bgBlack font-bold text-[15px]">
                      Pilates
                    </p>
                    <p className="text-bgBlack font-bold text-[15px]">50</p>
                  </div>
                </div>
              </div>
            </div>
            {/* form */}
            <form className="flex-1">123</form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewMembers;
