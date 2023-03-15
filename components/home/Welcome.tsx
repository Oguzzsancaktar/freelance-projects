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
import YoutubeSliderVertical from '../slider/youtube/YoutubeSliderVertical'
import Link from 'next/link'
import { TestimonialsSlider } from '../slider/testimonials'

const Welcome = () => {
  const ref = useRef(null)
  const isInView = useInView(ref)

  return (
    <div className={styles.container} ref={ref}>

      <div className={incorporateClasses([styles.slider, 'absolute left-[50px] top-1/2 -translate-y-1/2 h-4/6 w-[190px] overflow-hidden'])}>
        <YoutubeSliderVertical />
      </div>

      <div className={incorporateClasses(['absolute right-[50px] top-1/2 -translate-y-1/2 h-4/6 w-[350px] overflow-hidden bg-mineShaft rounded-3xl'])}>
        <TestimonialsSlider />
      </div>

      <div className={incorporateClasses([layoutStyles.xy__center, 'h-full w-full m-auto max-w-[1200px]'])}>
        <div className={incorporateClasses([layoutStyles.y__center, (isInView ? animation.animate__in__top : animation.animate__out__top), 'relative w-full max-w-[1200px] transition-all duration-2000 flex-col'])}>


          <h3 className={incorporateClasses([textStyles.text__100, 'text-center  text-white'])}>
            Welcome to the
          </h3>

          <div className="flex">
            <h3 className={incorporateClasses([textStyles.text__100, 'text-center  text-white'])}>
              BK
            </h3>

            <div className={incorporateClasses([layoutStyles.y__center, 'w-[100px] h-[100px] mx-[20px] flex-col'])}>
              {selectIcon("law")}
            </div>

            <h3 className={incorporateClasses([textStyles.text__100, 'text-center  text-white'])}>
              Law Group.
            </h3>
          </div>

          <div className={incorporateClasses([styles.y__center, "flex my-[40px]  "])}>
            <div className={incorporateClasses([layoutStyles.y__center, 'w-[60px] h-[60px] border-[3px] p-[10px] border-double border-gray rounded-full flex-row justify-center'])}>
              {selectIcon("law")}
            </div>
            <span className={incorporateClasses(["flex-row", textStyles.text__26, layoutStyles.y__center, 'flex  flex-col text-center   text-blueRibbon ml-[20px]'])}>
              Attny.Melinda Basaran
            </span>
          </div>

          <div className='mt-[40px] max-w-[500px] w-full'>
            <ContactInteraction />
          </div>

          <span className={incorporateClasses([textStyles.text__20, 'text-blueRibbon mt-[60px]'])}>
            Free Consultation Saturday
          </span>

          <Link href={'#contact'}>
            <button className={incorporateClasses([buttonStyles.button__primary__solid, textStyles.text__26]) + 'text-white h-[62px] w-[268px] rounded-[40px] mt-[20px]'}>
              Get Appointment
            </button>
          </Link>
        </div>
      </div>
      <button className={incorporateClasses([buttonStyles.button__orange, textStyles.text__26, layoutStyles.xy__center]) + 'absolute bottom-[40px] right-[48px] translate-y-0.5 bg-sunsetOrange border-l-[1px] border-t-[1px] border-r-[5px] border-b-[5px]   h-[88px] w-[88px]  rounded-[50%] '}>
        {selectIcon('message')}
      </button>


    </div >
  )
}

export default Welcome
