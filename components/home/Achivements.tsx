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
// Dynamic imports.
import dynamic from 'next/dynamic'
const AchievementItem = dynamic(() => import('@/components/achievement/AchievementItem'))


interface IProps{
  data:any

}

const Achivements :React.FC<IProps> = ({data}) => {
  if (!data) {
    return <div>...</div>
  }
  return (
    <div className={styles.container}>

      <h3 className={incorporateClasses([textStyles.text__74]) + 'text-center text-white pb-[40px]'} >
        {data["title"]||"Our Achievements"}
      </h3>

      <div className={styles.wrapper}>
        <div className='flex relative w-full h-full justify-center  mx-auto 1000:flex-col'>
          {data["items"].map((achivement:any,index:number)=>{
            return (
              <div className={incorporateClasses(["flex mx-[1rem] 1000:my-[3rem] " , index % 2 === 0 ?   "items-start mt-[50px] ":"items-end mb-[50px] "])  }>
                <AchievementItem achivement={achivement} reverse={(index % 2 === 0)} key={index} />
              </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Achivements
