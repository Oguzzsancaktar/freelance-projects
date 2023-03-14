import React, { useRef } from 'react'
import Image from 'next/image'
// Constants.
import { AboutIllustrationPath, WomanImagePath } from '@/constant/imagePaths'
// Styles.
import animation from '@/styles/animation.module.css'
import buttonStyles from '@/styles/button.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './About.module.css'
// Utils
import { incorporateClasses } from '@/utils/cssUtils'
import { useInView } from 'framer-motion'

const About = () => {
  const imageRef = useRef(null)
  const textRef = useRef(null)

  const isImageInView = useInView(imageRef)
  const isTextInView = useInView(textRef)

  return (
    <div className={styles.container}>

      <div ref={imageRef} className={incorporateClasses([(isImageInView ? animation.animate__in__left : animation.animate__out__left), 'h-[700px] flex-1  bg-white mr-[50px]  rounded-[40%] overflow-hidden transition-all duration-2000'])} >
        <Image
          src={WomanImagePath}
          alt="Picture of the author"
          width={275}
          height={216}
          className='w-full h-full'
        />
      </div>

      <div ref={textRef} className={incorporateClasses([(isTextInView ? animation.animate__in__right : animation.animate__out__right), 'flex-1 flex-col transition-all duration-2000'])} >
        <h4 className={incorporateClasses([textStyles.text__74, 'text-white pb-[32px]'])} >
          Let's Introduce Ourself
        </h4>

        <h5 className={incorporateClasses([textStyles.text__44, 'text-white pb-[32px]'])} >
          We are a team of
        </h5>

        <h6 className={incorporateClasses([textStyles.text__26, 'text-gray pb-[32px]'])}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis autem sint rerum. Ullam, assumenda. Veritatis nam dolorem eius minus recusandae, distinctio error ipsa, impedit deserunt, odit omnis doloremque quia id amet consequatur cupiditate suscipit ea tempore commodi iusto dolores sit.
        </h6>

      </div>

    </div >
  )
}

export default About
