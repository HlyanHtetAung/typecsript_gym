import { Link } from 'react-router-dom';

import { STYLES } from '../styles';

import { RxDoubleArrowDown } from 'react-icons/rx';



const ClassDetail = ({clsDetail } : any) => {
  
  return (
    <section 
    id="hero-section"
    className={`w-full bg-[url('./images/${clsDetail.backgroundImage}')] 
  h-screen bg-cover bg-center bg-no-repeat`}
  >
    <div
      className={`${STYLES.max_width} ${STYLES.margin_center} ${STYLES.paddingX} h-full`}
    >
        <div className='flex justify-center items-center'>
            <div className='flex flex-col items-center onImage-blackBg-color mt-[30px] py-[10px] px-[50px] rounded-full'>
                <h2 className={`${STYLES.heading2} text-white`}>{clsDetail.header}</h2>
               <RxDoubleArrowDown className={`${STYLES.iconStyle} text-white`}/>
            </div>
        </div>
    </div>
  </section>
  )
}

export default ClassDetail