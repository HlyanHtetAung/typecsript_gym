import { STYLES } from '../styles';
import { RxDoubleArrowDown } from 'react-icons/rx';
import { useRef } from 'react';
import YoutubeEmbed from '../components/YoutubeEmbded';
import { Link } from 'react-router-dom';

const ClassDetail = ({ clsDetail }: any) => {
  const toScrollElement = useRef<null | any>();

  const scrollHandle = () => {
    toScrollElement.current.scrollIntoView();
  };
  var1 = list[:]
  return (
    <>
      <div className="relative w-full h-screen">
        <img
          src={clsDetail.backgroundImage}
          id="hero-section"
          className={`w-full
          h-screen bg-cover bg-center bg-no-repeat object-cover`}
        />
        <div className="flex justify-center items-center absolute top-0 left-[50%] right-[50%] -translate-x-2/4">
          <div
            onClick={scrollHandle}
            className="flex flex-col items-center onImage-blackBg-color mt-[30px] py-[10px] px-[50px] rounded-full cursor-pointer hover:scale-110 duration-500"
          >
            <h2 className={`${STYLES.heading2} text-white`}>
              {clsDetail.header}
            </h2>
            <RxDoubleArrowDown className={`${STYLES.iconStyle} text-white`} />
          </div>
        </div>
      </div>
      <section
        ref={toScrollElement}
        id="classes-detailsSection"
        className="w-full bg-bgBlack"
      >
        <div
          className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX} ${STYLES.paddingY}`}
        >
          <h2 className={`${STYLES.heading2} mb-[20px]`}>
            How {clsDetail.header} work
          </h2>
          <YoutubeEmbed embedId="ciR7LA23ooY" />
          <h2 className={`text-white text-[30px] mt-[20px]`}>
            Benefits of {clsDetail.header}
          </h2>
          {clsDetail.benefits.map((letter: any) => (
            <p className={`${STYLES.letter} my-[10px]`}>{letter}</p>
          ))}
          <div className="flex"></div>
          <Link to="/classes">
            <button
              className={`${STYLES.button} w-[100%] sm:w-[200px] mt-[20px]`}
            >
              View Class
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default ClassDetail;
