import React from 'react'
// Styles.
import styles from './welcome.module.css'
import { selectIcon } from '@/utils/selectIconUtil'

const Welcome = () => {

  return (
    <div className={styles.container}>
      <div className='absolute top-1/2 translate-y-0.5 left-[140px]'>
        <h3 className='text-[74px] leading-[84px] text-white'>
          We are here for {" "}
          <span className='underline'>
            YOU
          </span> <br />
          and your legal concerns.</h3>

        <button className=' bg-sunsetOrange border-l-[1px] border-t-[1px] border-r-[5px] border-b-[5px]   h-[62px] w-[268px] border-heavyMetal border-solid text-[26px] leading-[30px] rounded-[40px] mt-[36px]'>
          Get Appointment
        </button>


      </div>

      <button className='absolute bottom-[40px] right-[48px] translate-y-0.5 bg-sunsetOrange border-l-[1px] border-t-[1px] border-r-[5px] border-b-[5px]   h-[88px] w-[88px] border-heavyMetal border-solid text-[26px] leading-[30px] rounded-[50%] mt-[36px] flex items-center justify-center'>
        {selectIcon('message')}
      </button>

    </div>
  )
}

export default Welcome
