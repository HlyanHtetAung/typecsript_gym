import { useEffect, useState } from "react";
import { STYLES } from "../styles";
import DataTable, { ExpanderComponentProps } from "react-data-table-component";
import BookedPersonsByClass from "../components/BookedPersonsByClass";

const ViewBooking = () => {
  const [bookings, setBookings] = useState<any>([]);

  const columns = [
    {
      name: "Class name",
      selector: (row: any) => row.class.class_name,
    },
    {
      name: "Booked Date",
      selector: (row: any) => row.date,
    },
    {
      name: "From time - To Time",
      selector: (row: any) => `${row.class.from_time}-${row.class.to_time}`,
    },

    {
      name: "Action",
      selector: (row: any) => (
        <button className="bg-red-500 py-[6px] px-[10px] rounded-md text-red-900 font-poppins text-[15px]">
          Cancel Class
        </button>
      ),
    },
  ];

  const fetchBooking = async () => {
    const res = await fetch(
      `${import.meta.env.VITE_HOST_URL}/schedule/bookings`
    );
    const data = await res.json();
    setBookings(data);
  };

  useEffect(() => {
    fetchBooking();
  }, []);

  const data = bookings.map((bok: any) => bok);

  return (
    <div
      className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX} ${STYLES.paddingY}`}
    >
      <DataTable
        columns={columns}
        data={data}
        expandableRows
        expandableRowsComponent={BookedPersonsByClass}
      />
    </div>
  );
};

export default ViewBooking;
