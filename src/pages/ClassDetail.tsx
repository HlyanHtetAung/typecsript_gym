import { Link } from 'react-router-dom';

import { STYLES } from '../styles';

import { RxDoubleArrowDown } from 'react-icons/rx';
import { useRef } from 'react';



const ClassDetail = ({clsDetail } : any) => {
  const toScrollElement = useRef<null | any >();

  const scrollHandle = ()=> {
    toScrollElement.current.scrollIntoView();
  }

  return (
    <>
      <section 
          id="hero-section"
          className={`w-full bg-[url('./images/bg.jpg')] 
        h-screen bg-cover bg-center bg-no-repeat`}
        >
          <div
            className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX} h-full`}
          >
            <div className='flex justify-center items-center'>
                  <div
                   onClick={scrollHandle} className='flex flex-col items-center onImage-blackBg-color mt-[30px] py-[10px] px-[50px] rounded-full cursor-pointer hover:scale-110 duration-500'>
                    <h2 className={`${STYLES.heading2} text-white`}>{clsDetail.header}</h2>
                    <RxDoubleArrowDown className={`${STYLES.iconStyle} text-white`}/>
                  </div>
            </div>
          </div>
      </section>
      <section ref={toScrollElement} id="classes-detailsSection" className="w-full bg-bgBlack">
        <div
          className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX} ${STYLES.paddingY}`}
        >
          <h2 className={STYLES.heading2}>Classes We Provide</h2>
        </div>
      </section>
    </>

  )
}

export default ClassDetail