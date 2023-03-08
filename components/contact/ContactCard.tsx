import React from 'react'
// Utils.
import { selectIcon } from '@/utils/selectIconUtil'

const ContactCard = () => {
  return (
    <div className='relative border-[1px] border-sunsetOrange rounded-[32px] px-[32px] pt-[22px] '>
      <div className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-0 w-[100px] h-[100px] '>
        {selectIcon('telephone')}
      </div>

      <h2 className='text-[26px] leading-[32px] text-white mb-[21px]'>
        Immigrant Law
      </h2>

      <p className='text-[24px] leading-[32px] text-white mb-[12px]'>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      </p>
    </div>
  )
}

export default ContactCard
