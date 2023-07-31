import React, { useRef } from 'react'
// Styles.
import animation from '@/styles/animation.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './Features.module.css'
// Utils
import { incorporateClasses } from '@/utils/cssUtils'
import { FeatureSlider, FeatureSliderItem } from '../slider/feature'
import { useInView } from 'framer-motion'

interface IProps {
  data: any
}

const Features: React.FC<IProps> = ({ data }) => {
  const imageRef = useRef(null)
  const textRef = useRef(null)

  const isImageInView = useInView(imageRef)
  const isTextInView = useInView(textRef)
  if (!data) {
    return <div>...</div>
  }

  return (
    <div className={styles.container} ref={imageRef}>
      <h3 ref={textRef} className={incorporateClasses([(isTextInView ? animation.animate__in__top : animation.animate__out__top), textStyles.text__74, 'text-center text-white pb-[4rem] '])} >
        {data["title"] || "Why Choose Us"}
      </h3>

      <div className={incorporateClasses([(isImageInView ? animation.animate__in__bottom : animation.animate__out__bottom), textStyles.text__7, ""])} >
        <FeatureSlider features={data["items"]} />
      </div>

    </div>
  )
}

export default Features
