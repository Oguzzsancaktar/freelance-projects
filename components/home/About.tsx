import React from 'react'
import Image from 'next/image'
// Constants.
import { AboutIllustrationPath } from '@/constant/imagePaths'
// Components.
import FeatureCard from '../feature/FeatureCard'
// Styles.
import buttonStyles from '@/styles/button.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './About.module.css'
// Utils
import { incorporateClasses } from '@/utils/cssUtils'

const About = () => {

  return (
    <div className={styles.container}>

      <div className='flex-1 bg-white rounded-3xl' >
        <Image
          src={AboutIllustrationPath}
          alt="Picture of the author"
          width={575}
          height={416}
        />
      </div>

      <div className='flex-1 flex-col' >
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

    </div>
  )
}

export default About
