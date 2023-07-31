import React, { useLayoutEffect, useMemo, useRef, useState } from 'react'

import AliceCarousel from 'react-alice-carousel'


import dynamic from 'next/dynamic'

const YoutubeSliderItem = dynamic(() => import('./YoutubeSliderItem'), { ssr: false })




const YoutubeSlider = () => {
  const sliderRef = useRef<HTMLUListElement>(null)

  const items = Array(15).fill(0).map((_, i) => (
    <div className='mx-[2rem] flex justify-center'>
      <YoutubeSliderItem key={i} />
    </div>
  ))

  return (
    <AliceCarousel innerWidth={400} swipeExtraPadding={200} disableSlideInfo disableDotsControls infinite animationDuration={8000} autoPlay={true} items={items} />
  )
}

export default YoutubeSlider

