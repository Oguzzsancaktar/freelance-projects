import React from 'react'
import FeatureSliderItem from './FeatureSliderItem'
import { map } from 'lodash';

interface IProps{
  features:any
}
const FeatureSlider:React.FC<IProps> = ({features}) => {
  return (
    <ul className='flex flex-wrap gap-[20px] 1000:flex-col'>
      {map(features,(feature, index) => (
        <FeatureSliderItem feature={feature}  key={index} />
      ))}
    </ul>
  )
}

export default FeatureSlider
