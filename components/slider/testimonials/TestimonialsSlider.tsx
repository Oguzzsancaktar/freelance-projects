import React, { useEffect, useLayoutEffect, useMemo, useRef } from 'react'
// Utils.
import { incorporateClasses } from '@/utils/cssUtils'
// Styles.
import styles from './TestimonialsSlider.module.css'
import textStyles from '@/styles/text.module.css'
import TestimonialsSliderItem from './TestimonialsSliderItem'
import { useAnimationFrame } from 'framer-motion'
import AliceCarousel from 'react-alice-carousel'


const TestimonialsSlider = () => {
  const tempArr = Array(15).fill(0)
  const sliderRef = useRef<HTMLUListElement>(null)


  const items = tempArr.map((_, i) => (
    <div style={{ minWidth: "200px" }}>
      <TestimonialsSliderItem isHorizontal={true} index={i} key={i} />
    </div>
  ))

  return (
    <AliceCarousel disableDotsControls infinite animationDuration={2000} autoWidth={true} autoPlay={true} items={items} />

    // <div ref={sliderRef} className={incorporateClasses([styles.hover, styles.flip__container, 'absolute  '])}>
    //   <div className={incorporateClasses([styles.fade, "flex flex-col h-full p-[30px]"])}>

    //     }
    //   </div>
    // </div>
  )
}

export default TestimonialsSlider

