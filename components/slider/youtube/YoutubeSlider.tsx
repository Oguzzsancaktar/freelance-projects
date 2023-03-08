import { AboutIllustrationPath } from '@/constant/imagePaths'
import Image from 'next/image'
import React from 'react'
import YoutubeSliderItem from './YoutubeSliderItem'

const YoutubeSlider = () => {
  return (
    <ul className='flex absolute' >
      {Array(5).fill(0).map((_, index) => (
        <YoutubeSliderItem />
      ))
      }
    </ul>
  )
}

export default YoutubeSlider
