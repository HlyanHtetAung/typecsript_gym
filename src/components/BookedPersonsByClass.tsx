import { useEffect, useState } from "react";
import { ExpanderComponentProps } from "react-data-table-component";

const BookedPersonsByClass = ({ data }: any) => {
  const [bookedPersons, setBookedPersons] = useState<any>([]);

  useEffect(() => {
    const fetchBookedPersons = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_HOST_URL}/schedule/booking?class_id=${
          data?.class?.id
        }&date=${data.date}`
      );
      const responseData = await res.json();
      setBookedPersons(responseData);
      console.log("responseData", responseData);
    };

    fetchBookedPersons();
  }, []);

  return (
    <div className="p-[20px] grid grid-cols-3 gap-[20px]">
      {bookedPersons?.map((bkPerson: any) => (
        <div className="flex items-center justify-between bg-slate-400 shadow-md px-[7px] py-[5px] rounded-md">
          <h3 className="text-slate-800 text-[16px] font-semibold">
            {bkPerson?.customer_id?.name} ({bkPerson?.status})
          </h3>
          {bkPerson?.status !== "Booked" ? null : (
            <button className="bg-slate-700 px-[10px] py-[3px] rounded-md text-[13px] text-white hover:bg-slate-900">
              Remove
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookedPersonsByClass;
