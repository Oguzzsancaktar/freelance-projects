import React from 'react'
import Image from 'next/image'
import { AboutIllustrationPath } from '@/constant/imagePaths'
// Utils.
import { incorporateClasses } from '@/utils/cssUtils'
// Styles.
import buttonStyles from '@/styles/button.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './YoutubeSliderItem.module.css'

const YoutubeSliderItem = () => {
  return (
    <li className={incorporateClasses([styles.item, "relative"])} >
      <Image
        src={"https://source.unsplash.com/user/c_v_r"}
        alt='youtube'
        width={`${550}`}
        height={`${550}`}
        className='h-full grayscale'

      />

      <div className='absolute left-1/2 bottom-[50px] -translate-x-1/2'>
        <p className='text-white text-center mb-[20px]'>
          Video name
        </p>

        <button className={incorporateClasses([buttonStyles.button__primary__solid, textStyles.text__24]) + ' h-[40px] w-[120px] rounded-[40px]'}>
          Let's Talk
        </button>

      </div>
    </li>
  )
}

export default YoutubeSliderItem
