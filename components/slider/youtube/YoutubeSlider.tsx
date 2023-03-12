import React from 'react'
// Components.
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
