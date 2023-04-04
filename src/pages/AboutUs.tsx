import { FACILITIES_PHOTO } from '../assets/content';
import { STYLES } from '../styles';
import { FaFacebookSquare, FaInstagram, FaYoutube } from 'react-icons/fa';
import { MdOutlinePlace } from 'react-icons/md';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';

const AboutUs = () => {
  return (
    <>
      <div className="w-full bg-white">
        <div
          className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX} ${STYLES.paddingY}`}
        >
          <h2 className={`${STYLES.heading2OnBgWhite} my-[10px]`}>About US</h2>
          <img src={FACILITIES_PHOTO[2]} className="mb-[20px]" alt="" />
          <div className="flex gap-[20px] flex-wrap justify-between">
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[20px] font-medium">Studio Address</h3>
              <div className="flex items-center gap-[10px]">
                <MdOutlinePlace className={`w-[40px] h-[40px] text-gray-500`} />
                <p className={`${STYLES.letter}`}>
                  60 Street Bet 34x35 Street (Mandalay)
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[20px] font-medium">Contact Phone Numbers</h3>
              <div className="flex items-center gap-[10px]">
                <HiOutlineDevicePhoneMobile
                  className={`w-[40px] h-[40px] text-gray-500`}
                />
                <p className={`${STYLES.letter}`}>09970378394,09402688404</p>
              </div>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-[20px] font-medium">Social Medias</h3>
              <div className="flex gap-[10px]">
                <a
                  href="
              https://www.youtube.com/watch?v=P01O1As5hLE&ab_channel=anonlikes"
                >
                  <FaFacebookSquare
                    className={`w-[40px] h-[40px] text-blue-500`}
                  />
                </a>
                <a
                  href="
              https://www.youtube.com/watch?v=P01O1As5hLE&ab_channel=anonlikes"
                >
                  <FaInstagram className={`w-[40px] h-[40px] text-red-500`} />
                </a>
                <a
                  href="
              https://www.youtube.com/watch?v=P01O1As5hLE&ab_channel=anonlikes"
                >
                  <FaYoutube className={`w-[40px] h-[40px] text-red-500`} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-bgBlack">
        <div
          className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX} ${STYLES.paddingY}`}
        >
          <h2 className={`${STYLES.heading2} my-[10px]`}>Facilities</h2>
          <div className="grid sm:grid-cols-2 gap-[10px]">
            {FACILITIES_PHOTO.map((photo, index) => (
              <img
                key={index}
                src={photo}
                className="w-full h-[350px] sm:h-[500px] object-cover cursor-pointer rounded-sm"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
