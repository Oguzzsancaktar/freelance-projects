import React from 'react'
// Components
import FeatureCard from '../feature/FeatureCard'
// Styles.
import buttonStyles from '@/styles/button.module.css'
import layoutStyles from '@/styles/layout.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './Youtube.module.css'
// Utils
import { incorporateClasses } from '@/utils/cssUtils'
import Image from 'next/image'
import { YoutubeTempPath } from '@/constant/imagePaths'
import { YoutubeSlider } from '../slider'

const Youtube = () => {

  return (
    <div className={incorporateClasses([styles.container, " h-[800px]"])}>
      <h4 className={incorporateClasses([textStyles.text__44, 'text-white pb-[32px]'])} >
        Latest Youtube Videos
      </h4>


      <YoutubeSlider />

    </div>
  )
}

export default Youtube
