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

const YoutubeSlider = () => {
  const sliderRef = useRef<HTMLUListElement>(null)
  const [sliderWidth, setSliderWidth] = React.useState(0)
  const [windowWidth, setWindowWidth] = React.useState(0)

  const isInView = useInView(sliderRef)

  const diff = useMemo(() => {
    return sliderWidth - windowWidth
  }, [sliderWidth, windowWidth])




  useAnimationFrame((time, delta) => {
    const duration = 10
    const timeInSec = time / 10

    const step = Math.floor(timeInSec / diff)
    const direction = step % 2 === 0 ? Direction.LEFT : Direction.RIGHT

    if (direction) {
      const x = Math.floor(timeInSec % diff)
      sliderRef.current.style.right = -x + "px"
    } else {
      const x = (diff - Math.floor(timeInSec) % diff)
      sliderRef.current.style.right = -x + "px"
    }

    // go diff in 10 seconds
    // We have distance -> diff
    // go 0 -> diff in 10 seconds
    // when its done -> go diff -> 0 in 10 seconds




    // console.log(Math.floor(timeInSec / diff), diff);
    // console.log(Math.floor(Math.floor(time / 30) / diff % 2));
    // if (!Math.floor(Math.floor(time / 30) / diff % 2)) {
    //   sliderRef.current.style.left = -time / 30 + "px"
    // } else {
    //   sliderRef.current.style.left = diff - time / 30 + "px"
    // }

  })



  useLayoutEffect(() => {
    setWindowWidth(window.innerWidth)
    setSliderWidth(sliderRef.current?.getBoundingClientRect().width || 0)
  }, [sliderRef])



  return (
    <ul ref={sliderRef} className={incorporateClasses(['transition-opacity duration-2000', styles.animate, `flex absolute  `])}  >
      {Array(15).fill(0).map((_, index) => (
        <YoutubeSliderItem key={index} text={index.toString()} />
      ))
      }
    </ul>
  )
}

export default YoutubeSlider
