import React from 'react'
import Image from 'next/image'
import { AboutIllustrationPath } from '@/constant/imagePaths'
// Utils.
import { incorporateClasses } from '@/utils/cssUtils'
// Styles.
import buttonStyles from '@/styles/button.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './YoutubeSliderItem.module.css'

interface IProps {
  text?: string
}
const YoutubeSliderItem: React.FC<IProps> = (props) => {
  const { text } = props
  return (
    <li className={incorporateClasses([styles.item, "relative transition-all duration-300 cursor-pointer"])} >
      <Image
        src={"https://source.unsplash.com/user/c_v_r"}
        alt='youtube'
        width={`${550}`}
        height={`${550}`}
        className='h-full grayscale'

      />

      <div className='absolute left-1/2 bottom-[50px] -translate-x-1/2'>

        <button className={incorporateClasses(["text-black", buttonStyles.button__primary__solid, textStyles.text__24]) + ' h-[40px] w-[120px] rounded-[40px] text-black'}>
          Let's Talk
        </button>

      </div>
    </li>
  )
}

export default YoutubeSliderItem
