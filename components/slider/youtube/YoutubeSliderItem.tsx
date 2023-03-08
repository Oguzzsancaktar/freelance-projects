import React from 'react'
import Image from 'next/image'
import { AboutIllustrationPath } from '@/constant/imagePaths'

import styles from './YoutubeSliderItem.module.css'

const YoutubeSliderItem = () => {
  return (
    <li className={styles.item} >
      <Image
        src={AboutIllustrationPath}
        alt='youtube'
        width={100}
        height={100}
      />
    </li>
  )
}

export default YoutubeSliderItem
