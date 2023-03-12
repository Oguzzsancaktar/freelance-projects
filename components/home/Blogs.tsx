import React from 'react'
import Image from 'next/image'
// Constants.
import { AboutIllustrationPath } from '@/constant/imagePaths'
// Styles.
import buttonStyles from '@/styles/button.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './Blogs.module.css'
// Utils
import { incorporateClasses } from '@/utils/cssUtils'

const Blogs = () => {

  return (
    <div className={styles.container}>
      <h3 className={incorporateClasses([textStyles.text__74]) + 'text-center text-white pb-[72px]'} >
        Our Latest Blogs
      </h3>

      <div className="overflow-hidden  ">
        <div className="mx-auto">
          <div className="flex flex-wrap md:-m-2">
            <div className="flex w-full flex-wrap">
              <div className="w-2/3 p-[15px] h-[450px] relative">
                <h2 className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10 w-full h-full flex items-center justify-center text-white'>Title X</h2>
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center grayscale"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
              </div>
              <div className="w-1/3 p-[15px] h-[450px] relative">
                <h2 className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10 w-full h-full flex items-center justify-center text-white'>Title X</h2>
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center grayscale"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" />
              </div>
              <div className="w-1/3 p-[15px] h-[450px] relative">
                <h2 className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10 w-full h-full flex items-center justify-center text-white'>Title X</h2>
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center grayscale"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" />
              </div>

              <div className="w-2/3 p-[15px] h-[450px] relative">
                <h2 className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10 w-full h-full flex items-center justify-center text-white'>Title X</h2>
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center grayscale"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp" />
              </div>
              <div className="w-2/3 p-[15px] h-[450px] relative">
                <h2 className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10 w-full h-full flex items-center justify-center text-white'>Title X</h2>
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center grayscale"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp" />
              </div>
              <div className="w-1/3 p-[15px] h-[450px] relative">
                <h2 className='absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10 w-full h-full flex items-center justify-center text-white'>Title X</h2>
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center grayscale"
                  src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp" />
              </div>

            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Blogs
