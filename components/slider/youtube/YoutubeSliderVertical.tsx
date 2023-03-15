import React, { useLayoutEffect, useMemo, useRef, useState } from 'react'
// Components.
import YoutubeSliderItem from './YoutubeSliderItem'
// Styles.
import styles from './YoutubeSlider.module.css'
import animation from '@/styles/animation.module.css'

import { incorporateClasses } from '@/utils/cssUtils'
import { useAnimationFrame, useInView } from 'framer-motion'


enum Direction {
  LEFT = 0,
  RIGHT = 1
}

const YoutubeSliderVertical = () => {
  const sliderRef = useRef<HTMLUListElement>(null)
  const [sliderHeight, setSliderHeight] = React.useState(0)
  const [windowHeight, setWindowHeight] = React.useState(0)


  const diff = useMemo(() => {
    return sliderHeight - windowHeight
  }, [sliderHeight, windowHeight])




  useAnimationFrame((time, delta) => {
    const timeInSec = time / 10

    const step = Math.floor(timeInSec / diff)
    const direction = step % 2 === 0 ? Direction.LEFT : Direction.RIGHT

    if (sliderRef.current) {
      if (direction) {
        const x = Math.floor(timeInSec % diff)
        sliderRef.current.style.bottom = -x + "px"
      } else {
        const x = (diff - Math.floor(timeInSec) % diff)
        sliderRef.current.style.bottom = -x + "px"
      }
    }

  })



  useLayoutEffect(() => {
    setWindowHeight(window.innerHeight)
    setSliderHeight(sliderRef.current?.getBoundingClientRect().height || 0)
  }, [sliderRef])



  return (
    <ul ref={sliderRef} className={incorporateClasses(['transition-opacity duration-2000  overflow-hidden', styles.animate, `flex flex-col absolute  `])}  >
      {Array(15).fill(0).map((_, index) => (
        <YoutubeSliderItem key={index} text={index.toString()} />
      ))
      }
    </ul>
  )
}

export default YoutubeSliderVertical
