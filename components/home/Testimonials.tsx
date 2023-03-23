import React, { useRef } from 'react'
// Components.
import { ReviewItem } from '../customer-review'
// Styles.
import animation from '@/styles/animation.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './Features.module.css'
// Utils
import { incorporateClasses } from '@/utils/cssUtils'
import { useInView } from 'framer-motion'

interface IProps{
  data:any
}

const Features:React.FC<IProps>  = () => {
  const imageRef = useRef(null)
  const textRef = useRef(null)

  const isImageInView = useInView(imageRef)
  const isTextInView = useInView(textRef)

  return (
    <div className={styles.container}>
      <h3 ref={textRef} className={incorporateClasses([(isTextInView ? animation.animate__in__bottom : animation.animate__out__bottom), textStyles.text__74]) + 'text-center text-white pb-[4rem]'} >
        What says our Happy Clients
      </h3>

      <ul ref={imageRef} className={incorporateClasses([(isImageInView ? animation.animate__in__bottom : animation.animate__out__bottom), 'flex flex-wrap gap-[20px]'])}>
        {Array(3).fill(0).map((_, index) => (
          <ReviewItem />
        ))}
      </ul>

    </div>
  )
}

export default Features
