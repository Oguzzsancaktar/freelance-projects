import React, { useRef } from 'react'
import Image from 'next/image'
// Contact.
import { AboutIllustrationPath, WomanImagePath } from '@/constant/imagePaths'
// Utils.
import { selectIcon } from '@/utils/selectIconUtil'
import { incorporateClasses } from '@/utils/cssUtils'
// Styles. 
import animation from '@/styles/animation.module.css'
import styles from './Contact.module.css'
import buttonStyles from '@/styles/button.module.css'
import textStyles from '@/styles/text.module.css'
import { useInView } from 'framer-motion'


interface IProps{
  data:any
}

const Contact:React.FC<IProps>  = ({data}) => {
  const textsRef = useRef<any>();
  const formRef = useRef<any>();
  const imageRef = useRef<any>();

  const isTextInView = useInView(textsRef)
  const isFormInView = useInView(formRef)
  const isImageInView = useInView(imageRef)

  return (
    <div className={incorporateClasses([styles.container, 'relative  border-[1px]   px-[32px] pt-[22px] '])}>
      <h3 ref={textsRef} className={incorporateClasses([(isTextInView ? animation.animate__in__top : animation.animate__out__top), textStyles.text__74, 'text-center text-white pb-[40px]'])} >
        {data["title"]||"Free Consultation"}
      </h3>

      <h6 className={incorporateClasses([(isTextInView ? animation.animate__in__top : animation.animate__out__top), textStyles.text__22, 'text-center text-gray pb-[72px] max-w-[600px] mx-auto'])} >
      {data["description"]||"Free Consultation"}
      </h6 >


      <div className="flex h-[500px]">
        <div ref={imageRef} className={incorporateClasses([(isImageInView ? animation.animate__in__left : animation.animate__out__left), ' w-[500px] bg-white rounded-[40%] overflow-hidden'])}>
          <Image  
            src={data.image.url ||WomanImagePath}
            alt="Picture of the author"
            width={275}
            height={216}
            className='w-full h-full'
          />
        </div>

        <div ref={formRef} className={incorporateClasses([(isFormInView ? animation.animate__in__right : animation.animate__out__right), 'flex flex-col h-full justify-between  w-[calc(100%-500px)] pl-[50px] relative'])} >
          <div className="flex flex-wrap">
            <div className="w-[calc((100%-2rem)/2)] mr-[20px]">
              <label htmlFor="your_name" className="block mb-[15px] text-sm font-medium text-gray-900 text-white">Your Name</label>
              <input type="text" id="your_name" className="bg-blueRibbon bg-opacity-0 rounded-[20px] outline-none focus:ring-blueRibbon focus:border-blueRibbon block w-full p-2.5 bg-gray-700 border border-gray placeholder-gray-400 text-white focus:ring-blue-500  h-[70px] px-[20px] focus:border-blue-500" placeholder="John" required />
            </div>

            <div className="w-[calc((100%-2rem)/2)]">
              <label htmlFor="email" className="block mb-[15px] text-sm font-medium text-gray-900 text-white">Email</label>
              <input type="email" id="email" className="bg-blueRibbon bg-opacity-0 rounded-[20px] outline-none focus:ring-blueRibbon focus:border-blueRibbon block w-full p-2.5 bg-gray-700 border border-gray placeholder-gray-400 text-white focus:ring-blue-500  h-[70px] px-[20px] focus:border-blue-500" placeholder="John" required />
            </div>

            <div className="w-[calc((100%-2rem)/2)] mr-[20px]">
              <label htmlFor="phone_number" className="block mb-[15px] text-sm font-medium text-gray-900 text-white">Phone Number</label>
              <input type="text" id="phone_number" className="bg-blueRibbon bg-opacity-0 rounded-[20px] outline-none focus:ring-blueRibbon focus:border-blueRibbon block w-full p-2.5 bg-gray-700 border border-gray placeholder-gray-400 text-white focus:ring-blue-500  h-[70px] px-[20px] focus:border-blue-500" placeholder="John" required />
            </div>

            <div className="w-[calc((100%-2rem)/2)]">
              <label htmlFor="subject" className="block mb-[15px] text-sm font-medium text-gray-900 text-white">Subject</label>
              <input type="text" id="subject" className="bg-blueRibbon bg-opacity-0 rounded-[20px] outline-none focus:ring-blueRibbon focus:border-blueRibbon block w-full p-2.5 bg-gray-700 border border-gray placeholder-gray-400 text-white focus:ring-blue-500  h-[70px] px-[20px] focus:border-blue-500" placeholder="John" required />
            </div>

            <div className="w-[100%]">
              <label htmlFor="message" className="block mb-[15px] text-sm font-medium text-gray-900 text-white">Message</label>
              <textarea rows={5} id="message" className="bg-blueRibbon bg-opacity-0 rounded-[20px] outline-none focus:ring-blueRibbon focus:border-blueRibbon block w-full  bg-gray-700 border border-gray placeholder-gray-400 text-white focus:ring-blue-500  p-[20px]   focus:border-blue-500" placeholder="Enter Your Message Here..." required />
            </div>
          </div>

          <div className='absolute left-1/2 -translate-x-1/2 bottom-[-100px]'>
            <button className={incorporateClasses([buttonStyles.button__primary__solid, textStyles.text__24]) + ' h-[62px] w-[150px] rounded-[40px]'}>
            {data["button_text"]||"Submit"}
            </button>
          </div>

        </div>
      </div>

    </div >

  )
}

export default Contact
