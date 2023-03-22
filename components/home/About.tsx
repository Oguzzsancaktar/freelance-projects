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

interface IProps{
  data:any
}

const About:React.FC<IProps>  = ({data}) => {
  const imageRef = useRef(null)
  const textRef = useRef(null)

  const isImageInView = useInView(imageRef)
  const isTextInView = useInView(textRef)


  return (
    <div className={styles.container}>

      <div ref={imageRef} className={incorporateClasses([(isImageInView ? animation.animate__in__left : animation.animate__out__left), 'h-[400px] w-[300px]   bg-white mr-[50px]  rounded-3xl overflow-hidden transition-all duration-2000'])} >
        <Image
          src={data["image"].url||WomanImagePath}
          alt="Picture of the author"
          width={275}
          height={216}
          className='w-full h-full'
        />
      </div>

      <div ref={textRef} className={incorporateClasses([(isTextInView ? animation.animate__in__right : animation.animate__out__right), 'w-[calc(100%-300px)] flex-col transition-all duration-2000'])} >
        <h4 className={incorporateClasses([textStyles.text__74, 'text-white pb-[32px]'])} >
          {data["header"]||"Let's Introduce Ourself"} 
        </h4>

        <h5 className={incorporateClasses([textStyles.text__44, 'text-white pb-[32px]'])} >
        {data["title"]||" We are a team of"} 
        </h5>

        <h6 className={incorporateClasses([textStyles.text__26, 'text-gray pb-[32px]'])}>
        {data["paragraph"]||" We are a team of"} 
        </h6>

      </div>

    </div >
  )
}

export default About
