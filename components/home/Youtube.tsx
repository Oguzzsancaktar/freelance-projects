import React from 'react'
import dynamic from 'next/dynamic'
// Components
// Styles.
import textStyles from '@/styles/text.module.css'
import styles from './Youtube.module.css'
// Utils
import { incorporateClasses } from '@/utils/cssUtils'

// Dynamic imports.
const YoutubeSlider = dynamic(() => import('../slider/youtube/YoutubeSlider'), { ssr: false })

const Youtube = () => {

  return (
    <div className={incorporateClasses([styles.container, " h-[400px]"])}>
      <h4 className={incorporateClasses([textStyles.text__44, 'text-white pb-[32px]'])} >
        Latest Youtube Videos
      </h4>


      <YoutubeSlider />

    </div>
  )
}

export default Youtube
