import React, { useEffect, useLayoutEffect, useMemo, useRef } from 'react'
// Utils.
import { incorporateClasses } from '@/utils/cssUtils'
// Styles.
import styles from './TestimonialsSlider.module.css'
import textStyles from '@/styles/text.module.css'
import TestimonialsSliderItem from './TestimonialsSliderItem'
import { useAnimationFrame } from 'framer-motion'


enum Direction {
  LEFT = 0,
  RIGHT = 1
}

const TestimonialsSliderVertical = () => {
  const tempArr = Array(15).fill(0)

  const sliderRef = useRef<HTMLDivElement>(null)
  const [sliderHeight, setSliderHeight] = React.useState(0)
  const [windowHeight, setWindowHeight] = React.useState(0)


  const diff = useMemo(() => {
    return sliderHeight - windowHeight
  }, [sliderHeight, windowHeight])




  useAnimationFrame((time, delta) => {
    const timeInSec = time / 30

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
    <div ref={sliderRef} className={incorporateClasses([styles.hover, styles.flip__container, 'absolute  '])}>
      <div className={incorporateClasses([styles.fade, "flex flex-col h-full p-[30px]"])}>
        {tempArr.map((_, i) => (
          <TestimonialsSliderItem index={i} key={i} />
        ))
        }
      </div>
    </div>
  )
}

export default TestimonialsSliderVertical
