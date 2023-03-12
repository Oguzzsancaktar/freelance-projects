import React from 'react'
// Components
// Styles.
import textStyles from '@/styles/text.module.css'
import styles from './Youtube.module.css'
// Utils
import { incorporateClasses } from '@/utils/cssUtils'
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
