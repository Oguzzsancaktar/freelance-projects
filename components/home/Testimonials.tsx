import React from 'react'
import Image from 'next/image'
// Constants.
import { TestimonialsIllustrationPath } from '@/constant/imagePaths'
// Components
import Slider from '@/components/slider/Slider'
// Styles.
import buttonStyles from '@/styles/button.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './Testimonials.module.css'
// Utils
import { incorporateClasses } from '@/utils/cssUtils'

const Testimonials = () => {

  return (
    <div className={incorporateClasses([styles.container, "bg-gradient-to-b from-[#E2E2DB33] to-[#0F0D4833] "])} >
      <h4 className={incorporateClasses([textStyles.text__44, 'text-center text-heavyMetal pb-[32px]'])} >
        Our clients love us
      </h4>
      <Slider />
      <div className="absolute left-0 bottom-0">
        <Image
          src={TestimonialsIllustrationPath}
          alt="Picture of the author"
          width={575}
          height={416}
        />
      </div>
    </div>
  )
}

export default Testimonials
