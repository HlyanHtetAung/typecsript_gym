import { useEffect, useState } from 'react';
import { STYLES } from '../styles';

const ViewBooking = () => {
  const [bookings, setBookings] = useState<any>([]);

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
  console.log(bookings);
  return (
    <div
      className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX} ${STYLES.paddingY}`}
    >
      <h2 className={`${STYLES.heading2OnBgWhite} my-[10px]`}>Bookings</h2>
    </div>
  );
};

export default ViewBooking;
