import React from 'react'
import FeatureSliderItem from './FeatureSliderItem'

const FeatureSlider = () => {
  return (

    <ul className='flex flex-wrap gap-[20px]'>
      {Array(3).fill(0).map((_, index) => (
        <FeatureSliderItem />
      ))}
    </ul>
  )
}

export default FeatureSlider
