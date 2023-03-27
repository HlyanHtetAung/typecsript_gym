import { Link } from 'react-router-dom';

import { STYLES } from '../styles';

import { RxDoubleArrowDown } from 'react-icons/rx';
import { useEffect, useRef, useState } from 'react';
import YoutubeEmbed from '../components/YoutubeEmbded';



const ClassDetail = ({ clsDetail } : any) => {
  const toScrollElement = useRef<null | any >();
  const scrollHandle = ()=> {
    toScrollElement.current.scrollIntoView();
  }

  const image = `./images/${clsDetail.backgroundImage}`;
  console.log(image === `./images/bg.jpg`);
  https://youtu.be/xtfXl7TZTac
  return (
    <>
    <div className='relative w-full h-screen'>
    <img 
    src={clsDetail.backgroundImage}
          id="hero-section"
          className={`w-full
          h-screen bg-cover bg-center bg-no-repeat object-cover`}
    />
      <div className='flex justify-center items-center absolute top-0 left-[50%] right-[50%] -translate-x-2/4'>
         <div
            onClick={scrollHandle} className='flex flex-col items-center onImage-blackBg-color mt-[30px] py-[10px] px-[50px] rounded-full cursor-pointer hover:scale-110 duration-500'>
            <h2 className={`${STYLES.heading2} text-white`}>{clsDetail.header}</h2>
            <RxDoubleArrowDown className={`${STYLES.iconStyle} text-white`}/>
        </div>
      </div>
      </div>
      <section ref={toScrollElement} id="classes-detailsSection" className="w-full bg-bgBlack">
        <div
          className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX} ${STYLES.paddingY}`}
        >
          <h2 className={STYLES.heading2}>Classes We Provide</h2>

          <YoutubeEmbed embedId='kmM6mqvnxcs'/>
        </div>
      </section>
    </>

  )
}

export default ClassDetail

