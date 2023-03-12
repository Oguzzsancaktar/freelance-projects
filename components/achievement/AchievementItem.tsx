import React, { useEffect, useRef, useState } from 'react'

import { incorporateClasses } from '@/utils/cssUtils'
import textStyles from '@/styles/text.module.css'
import layoutStyles from '@/styles/layout.module.css'
import { selectIcon } from '@/utils/selectIconUtil'
import { useAnimationFrame } from '@/hooks/useAnimationFrame'

const AchievementItem = () => {
  const x = Math.random() * 2000
  const [count, setCount] = useState(0)


  useAnimationFrame(deltaTime => {
    setCount(prevCount => (prevCount + deltaTime))
  }, x)



  return (
    <div className="flex flex-col items-center w-[400px]">
      <div className={incorporateClasses([layoutStyles.xy__center, "w-[60px] h-[60px] border rounded-full border-white bg-black"])}>
        {selectIcon("case")}
      </div>

      <span className='h-[80px] border-dotted border-[2px] border-l-blueRibbon' ></span>

      <div className={incorporateClasses([layoutStyles.xy__center, 'flex-col w-full h-[250px] border-[1px] border-silver rounded-[20px] backdrop-blur-xl bg-white/20'])}>
        <h5 className={incorporateClasses([textStyles.text__44, "text-white text-center pb-[20px]"])}>{Math.round(count)}+</h5>
        <p className={incorporateClasses([textStyles.text__26, "text-silver text-center"])}>Happy Clients</p>
      </div>

    </div>
  )
}

export default AchievementItem
