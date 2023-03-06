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
import { selectIcon } from '@/utils/selectIconUtil'

const Youtube = () => {

  return (
    <div className={incorporateClasses([styles.container])}>
      <h4 className={incorporateClasses([textStyles.text__44, layoutStyles.xy__center, 'text-center text-heavyMetal flex pb-[32px]'])} >
        <span className='mr-[22px]'>  {selectIcon("youtube")}</span>  Learn more from our Youtube channel!
      </h4>

      <div className={incorporateClasses([layoutStyles.x__center, "mb-[60px]"])} >
        <Image
          src={YoutubeTempPath}
          alt="Youtube"
          width={960}
          height={640}
        />
      </div>

      <button className={incorporateClasses([textStyles.text__32, buttonStyles.button__white, "m-auto w-[268px] h-[62px] rounded-[40px] "])}>
        Youtube us
      </button>
    </div>
  )
}

export default Youtube
