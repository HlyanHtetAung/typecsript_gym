import { useEffect, useState } from 'react';
import { ExpanderComponentProps } from 'react-data-table-component';

const BookedPersonsByClass = ({ data, setBookings }: any) => {
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
    };

    fetchBookedPersons();
  }, []);

  const fetchBooking = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_HOST_URL}/schedule/bookings`
    );
    const data = await res.json();
    console.log('booking data', data);
    setBookings(data);
  };

  const removeHandle = async (id: any) => {
    const copiedBookedPerson = [...bookedPersons];
    const res = await fetch(
      `${import.meta.env.VITE_HOST_URL}/schedule/update?schedule_id=${id}`
    );
    const data = await res.json();
    setBookedPersons(
      copiedBookedPerson.filter(
        (bkPerson: any) => bkPerson.customer_id.id !== data.customer_id
      )
    );

    fetchBooking();
  };

  return (
    <div className="p-[20px] grid grid-cols-3 gap-[20px]">
      {bookedPersons?.map((bkPerson: any) => (
        <div
          key={bkPerson.id}
          className="flex items-center justify-between bg-slate-400 shadow-md px-[7px] py-[5px] rounded-md"
        >
          <h3 className="text-slate-800 text-[16px] font-semibold">
            {bkPerson?.customer_id?.name} ({bkPerson?.status})
          </h3>
          {bkPerson?.status !== 'Booked' ? null : (
            <button
              onClick={() => removeHandle(bkPerson.id)}
              className="bg-slate-700 px-[10px] py-[3px] rounded-md text-[13px] text-white hover:bg-slate-900"
            >
              Remove
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookedPersonsByClass;
