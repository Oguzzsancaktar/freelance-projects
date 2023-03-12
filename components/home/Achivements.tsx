import React from 'react'
import Image from 'next/image'
// Constants.
import { BGLineImagePath, WomanImagePath } from '@/constant/imagePaths'
// Styles.
import buttonStyles from '@/styles/button.module.css'
import textStyles from '@/styles/text.module.css'
import positionStyles from '@/styles/position.module.css'
import styles from './Achivements.module.css'
// Utils
import { incorporateClasses } from '@/utils/cssUtils'
import { AchievementItem } from '../achievement'

const Achivements = () => {

  return (
    <div className={styles.container}>

      <h3 className={incorporateClasses([textStyles.text__74]) + 'text-center text-white pb-[40px]'} >
        Our Achievements
      </h3>

      <div className={styles.wrapper}>
        <div className='relative w-full h-full max-w-[1000px] mx-auto'>
          <div className='absolute left-0 top-0'>
            <AchievementItem />
          </div>
          <div className='absolute right-0 top-[100px]'>
            <AchievementItem />
          </div>
          <div className='absolute left-0 bottom-[100px]'>
            <AchievementItem />
          </div>
          <div className='absolute right-0 bottom-0'>
            <AchievementItem />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Achivements
