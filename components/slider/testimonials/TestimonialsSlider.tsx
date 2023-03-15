import React from 'react'
// Utils.
import { incorporateClasses } from '@/utils/cssUtils'
// Styles.
import textStyles from '@/styles/text.module.css'
import TestimonialsSliderItem from './TestimonialsSliderItem'

const TestimonialsSlider = () => {
  return (
    <div className='py-[30px] h-full'>
      <h3 className={incorporateClasses([textStyles.text__20, 'text-center  text-white'])}>
        Happy Clients
      </h3>

      <div className="flex flex-col h-full p-[30px]">
        <TestimonialsSliderItem />
        <TestimonialsSliderItem />
        <TestimonialsSliderItem />
      </div>

    </div>
  )
}

export default TestimonialsSlider
