import React from 'react'
// Utils.
import { selectIcon } from '@/utils/selectIconUtil'

const FeatureCard = () => {
  return (
    <div className='border-[1px] border-desertStorm rounded-[32px] px-[32px] pt-[22px] '>
      <div className='w-[75px] h-[75px] mb-[53px]'>
        {selectIcon('world')}
      </div>

      <h2 className='text-[26px] leading-[32px] text-desertStorm mb-[21px]'>
        Immigrant Law
      </h2>

      <p className='text-[24px] leading-[32px] text-desertStorm mb-[12px]'>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      </p>

      <button className='text-desertStorm border-l-[1px] border-t-[1px] border-r-[5px] border-b-[5px]  h-[54px] w-full border-desertStorm border-solid text-[26px] leading-[30px] rounded-[40px] my-[40px]'>
        Details
      </button>
    </div>
  )
}

export default FeatureCard
