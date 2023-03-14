import React, { useEffect, useRef } from 'react'
// Styles.
import animation from '@/styles/animation.module.css'
import buttonStyles from '@/styles/button.module.css'
import layoutStyles from '@/styles/layout.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './Welcome.module.css'
// Utils.
import { selectIcon } from '@/utils/selectIconUtil'
import { incorporateClasses } from '@/utils/cssUtils'
import { ContactInteraction } from '../contact'
import { useInView } from 'framer-motion'

const Welcome = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)



  return (
    <div className={styles.container} ref={ref}>
      <div className={incorporateClasses([layoutStyles.xy__center, ' w-full m-auto max-w-[1200px]'])}>
        <div className={incorporateClasses([layoutStyles.y__center, (isInView ? animation.animate__in__top : animation.animate__out__top), 'relative w-full max-w-[1200px] transition-all duration-2000'])}>
          <div className={incorporateClasses([layoutStyles.y__center, 'absolute top-0 left-[15%] -translate-y-1/2  w-[60px] h-[60px] border-[3px] p-[10px] border-double border-gray rounded-full'])}>
            {selectIcon("law")}
          </div>

          <h3 className={incorporateClasses([textStyles.text__100, 'text-center  text-white'])}>
            Welcome to the
          </h3>

          <div className="flex">
            <h3 className={incorporateClasses([textStyles.text__100, 'text-center  text-white'])}>
              BK
            </h3>

            <div className={incorporateClasses([layoutStyles.y__center, 'w-[100px] h-[100px] mx-[20px]'])}>
              {selectIcon("law")}
            </div>

            <h3 className={incorporateClasses([textStyles.text__100, 'text-center  text-white'])}>
              Law Group.
            </h3>
          </div>

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
