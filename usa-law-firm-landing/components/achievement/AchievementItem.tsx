import React, { useEffect, useRef, useState } from 'react'

import { incorporateClasses } from '@/utils/cssUtils'
import textStyles from '@/styles/text.module.css'
import layoutStyles from '@/styles/layout.module.css'
import { selectIcon } from '@/utils/selectIconUtil'

import { useAnimationFrame, useInView } from 'framer-motion'

interface IProps {
  achivement: any
  reverse?: boolean
}

const AchievementItem:React.FC<IProps> = ({achivement,reverse}) => {
  const [count, setCount] = useState(0)

  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref)

  useAnimationFrame(() => {
    if (isInView) {
      if (count < achivement["count"]) {
        setCount((prev) => prev + 1)
      }
    } else {
      setCount(0)
    }
  })

  return (
    <div ref={ref} className={"flex  items-center w-[240px] 1000:w-full 1000:flex-col " + (reverse ? "flex-col-reverse":"flex-col")}>
      <div className={incorporateClasses([layoutStyles.xy__center, "w-[60px] h-[60px] border rounded-full border-white bg-black"])}>
        {selectIcon("case")}
      </div>

      <span className='h-[40px] border-dotted border-[2px] border-l-blueRibbon' ></span>

      <div className={incorporateClasses([layoutStyles.xy__center, 'flex-col w-full h-[200px] border-[1px] border-silver rounded-[20px] backdrop-blur-xl bg-white/20'])}>
        <h5 className={incorporateClasses([textStyles.text__44, "text-white text-center pb-[20px]"])}>{Math.round(count)}+</h5>
        <p className={incorporateClasses([textStyles.text__26, "text-silver text-center"])}>Happy Clients</p>
      </div>

    </div>
  )
}

export default AchievementItem
