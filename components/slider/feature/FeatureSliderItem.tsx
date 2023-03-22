
import React from 'react'
// Utils.
import { incorporateClasses } from '@/utils/cssUtils'
import { selectIcon } from '@/utils/selectIconUtil'
// Styles.
import textStyles from '@/styles/text.module.css'
import buttonStyles from '@/styles/button.module.css'


interface IProps{
  feature:any
}

  const FeatureSliderItem:React.FC<IProps> = ({feature}) => {
  return (
    <li className='flex-1 bg-codGray border-[1px] border-mineShaft rounded-[32px] hover:bg-mineShaft'>
      <div className=' px-[32px] pt-[22px] '>
        <div className='w-[75px] h-[75px] mb-[53px]'>
          {selectIcon('world')}
        </div>

        <h2 className='text-[26px] leading-[32px] text-white mb-[21px]'>
        {feature["title"]||"100% Success Rate."}
        </h2>

        <p className='text-[24px] leading-[32px] text-gray mb-[12px]'>
          {feature["paragraph"]||"Read More"}
        </p>

        <button className={incorporateClasses([textStyles.text__24, buttonStyles.button__primary__outlined, 'text-white h-[54px] w-full  rounded-[40px] my-[40px]'])}>
          {feature["button_text"]||"Read More"}
        </button>
      </div>
    </li>
  )
}

export default FeatureSliderItem
