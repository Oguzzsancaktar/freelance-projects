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
import dynamic from 'next/dynamic'
import { YoutubeSlider } from '../slider'

// Dynamic Imports.
const TestimonialsSliderVertical = dynamic(() => import('../slider/testimonials/TestimonialsSliderVertical'))

interface IProps {
  data: any
}

const Welcome: React.FC<IProps> = ({ data }) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  if (!data) {
    return <div>...</div>
  }
  return (
    <div className={styles.container} ref={ref}>

      <div className={incorporateClasses(['absolute left-[0px] top-1/2 -translate-y-1/2 h-4/6 w-[190px] overflow-hidden 1000:hidden'])}>
        <YoutubeSliderVertical />
      </div>




      <div className={incorporateClasses(['absolute right-[0px] top-1/2 -translate-y-1/2 h-4/6 w-[35rem] overflow-hidden rounded-3xl 1000:hidden'])}>
        <TestimonialsSliderVertical />
      </div>

      <div className={incorporateClasses([layoutStyles.xy__center, 'h-full w-full m-auto'])}>
        <div className={incorporateClasses([layoutStyles.y__center, (isInView ? animation.animate__in__top : animation.animate__out__top), '1000:hidden relative w-full  transition-all duration-2000 flex-col top-[-80px] '])}>
          <h3 className={incorporateClasses([textStyles.text__100, 'text-center  text-white hidden 1000:block '])}>
            {data["top_title"] || "Welcome to the"}   {data["icon_left_text"] || "BK"}    {data["icon_right_text"] || "Law Group."}
          </h3>

          <h3 className={incorporateClasses([textStyles.text__100, 'text-center  text-white 1000:hidden'])}>
            {data["top_title"] || "Welcome to the"}
          </h3>
          <div className="flex 1000:hidden">
            <h3 className={incorporateClasses([textStyles.text__100, 'text-center  text-white 1000:hidden'])}>
              {data["icon_left_text"] || "BK"}
            </h3>
            <div className={incorporateClasses([layoutStyles.y__center, 'w-[100px] h-[100px] mx-[20px] flex-col 1000:hidden'])}>
              {selectIcon("law")}
            </div>
            <h3 className={incorporateClasses([textStyles.text__100, 'text-center  text-white 1000:hidden'])}>
              {data["icon_right_text"] || "Law Group."}
            </h3>
          </div>
          <div className={incorporateClasses([styles.x__center, "flex  flex-col justify-center my-[4rem]  "])}>
            <div className={incorporateClasses([layoutStyles.y__center, 'w-[60px] h-[60px] border-[3px] m-auto p-[10px] border-double border-gray rounded-full flex-row justify-center'])}>
              {selectIcon("law")}
            </div>
            <span className={incorporateClasses(["flex-row", textStyles.text__26, layoutStyles.y__center, 'flex text-center mt-[2rem]  text-blueRibbon ml-[20px]'])}>
              {data["lawyer_name"] || "Attny.Melinda Basaran"}
            </span>
          </div>
          <div className='mt-[1rem] max-w-[50rem] w-full'>
            <ContactInteraction buttonText={data["contact_send_text"]} data={data["items"]} />
          </div>
          <span className={incorporateClasses([textStyles.text__20, 'text-blueRibbon mt-[2rem]'])}>
            {data["appointment_slogan"] || "Free Consultation Saturday"}
          </span>
          <Link href={'#contact'}>
            <button className={incorporateClasses([buttonStyles.button__primary__solid, textStyles.text__26]) + 'text-white h-[62px] w-[40rem] rounded-[40px] mt-[20px]'}>
              {data["appointment_slogan"] || " Get Appointment"}
            </button>
          </Link>
        </div>
      </div>
      {/* <button className={incorporateClasses([buttonStyles.button__orange, textStyles.text__26, layoutStyles.xy__center]) + 'absolute bottom-[40px] right-[5rem] translate-y-0.5 bg-sunsetOrange border-l-[1px] border-t-[1px] border-r-[5px] border-b-[5px]   h-[88px] w-[88px]  rounded-[50%] '}>
        {selectIcon('message')}
      </button> */}
      <div className='absolute bottom-0 w-full overflow-hidden items-center hidden 1000:flex'>
        <YoutubeSlider />
      </div>

    </div >
  )
}

export default Welcome
