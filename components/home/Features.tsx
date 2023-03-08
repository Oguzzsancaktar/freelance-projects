import React from 'react'
// Styles.
import textStyles from '@/styles/text.module.css'
import styles from './Features.module.css'
// Utils
import { incorporateClasses } from '@/utils/cssUtils'
import { FeatureSlider, FeatureSliderItem } from '../slider/feature'

const Features = () => {

  return (
    <div className={styles.container}>
      <h3 className={incorporateClasses([textStyles.text__74]) + 'text-center text-white pb-[72px]'} >
        Why Choose Us
      </h3>

      <div>
        <FeatureSlider />
      </div>

    </div>
  )
}

export default Features
