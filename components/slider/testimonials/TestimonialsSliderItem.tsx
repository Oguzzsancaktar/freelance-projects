import React, { useEffect } from 'react'
import Image from 'next/image'
// Utils.
import { incorporateClasses } from '@/utils/cssUtils'
// Styles.
import textStyles from '@/styles/text.module.css'

const TestimonialsSliderItem: React.FC<{ index: number }> = ({ index }) => {

  useEffect(() => {
    console.log("TestimonialsSliderItem mounted")
    return () => {
      console.log("TestimonialsSliderItem unmounted")
    }
  }, [])


  return (
    <div className='flex flex-col h-full border-b-gray border-solid border-b-[1px] py-[20px]'>
      <div className="flex items-center">
        <span className='rounded-full overflow-hidden w-[40px] h-[40px] mr-[10px]' >
          <Image
            src={"https://source.unsplash.com/user/c_v_r"}
            alt='youtube'
            width={`${550}`}
            height={`${550}`}
            className='h-full grayscale'
          />
        </span>
        <h6 className='text-silver'>
          Lorem, ipsum. {index}
        </h6>
      </div>

      <div className='text-gray py-[10px]' >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam expedita iusto fugiat quis natus, laboriosam tempora quos velit fuga similique.
      </div>


    </div>
  )
}

export default TestimonialsSliderItem
