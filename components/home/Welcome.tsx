import React from 'react'
// Styles.
import buttonStyles from '@/styles/button.module.css'
import layoutStyles from '@/styles/layout.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './Welcome.module.css'
// Utils.
import { selectIcon } from '@/utils/selectIconUtil'
import { incorporateClasses } from '@/utils/cssUtils'
import { ContactInteraction } from '../contact'

const Welcome = () => {

  return (
    <div className={styles.container}>




      <div className={incorporateClasses([layoutStyles.y__center, 'absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full max-w-[1200px]'])}>
        <div className={incorporateClasses([layoutStyles.y__center, 'relative w-full max-w-[1200px]'])}>
          <div className={incorporateClasses([layoutStyles.y__center, 'absolute top-0 left-0 -translate-y-1/2  w-[150px] h-[150px]'])}>
            {selectIcon("law")}
          </div>

          <h3 className={incorporateClasses([textStyles.text__100, 'text-center  text-white'])}>
            Welcome to the
            <br />
            BK Law
            Law Group.
          </h3>

          <span className={incorporateClasses([textStyles.text__30, 'text-center my-[40px]  text-gray'])}>
            Centralize your legal needs with BK Law Group.
          </span>

          <div className='mt-[40px] max-w-[500px] w-full'>
            <ContactInteraction />
          </div>
        </div>
      </div>



      <button className={incorporateClasses([buttonStyles.button__orange, textStyles.text__26, layoutStyles.xy__center]) + 'absolute bottom-[40px] right-[48px] translate-y-0.5 bg-sunsetOrange border-l-[1px] border-t-[1px] border-r-[5px] border-b-[5px]   h-[88px] w-[88px]  rounded-[50%] '}>
        {selectIcon('message')}
      </button>
    </div >
  )
}

export default Welcome
