import React from 'react'
// Styles.
import buttonStyles from '@/styles/button.module.css'
import layoutStyles from '@/styles/layout.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './Welcome.module.css'
// Utils.
import { selectIcon } from '@/utils/selectIconUtil'
import { incorporateClasses } from '@/utils/cssUtils'

const Welcome = () => {

  return (
    <div className={styles.container}>
      <div className='absolute top-1/2 translate-y-0.5 left-[140px]'>
        <h3 className={textStyles.text__74 + ' text-white'}>
          We are here for {" "}
          <span className='underline'>
            YOU
          </span> <br />
          and your legal concerns.</h3>
        <button className={incorporateClasses([buttonStyles.button__orange, textStyles.text__26]) + ' h-[62px] w-[268px]  rounded-[40px] mt-[36px]'}>
          Get Appointment
        </button>
      </div>

      <button className={incorporateClasses([buttonStyles.button__orange, textStyles.text__26, layoutStyles.xy__center]) + 'absolute bottom-[40px] right-[48px] translate-y-0.5 bg-sunsetOrange border-l-[1px] border-t-[1px] border-r-[5px] border-b-[5px]   h-[88px] w-[88px]  rounded-[50%] mt-[36px] '}>
        {selectIcon('message')}
      </button>
    </div>
  )
}

export default Welcome
