import React from 'react'
import Image from 'next/image'
// Constants.
import { AboutIllustrationPath } from '@/constant/imagePaths'
// Styles.
import animation from '@/styles/animation.module.css'
import buttonStyles from '@/styles/button.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './Blogs.module.css'
// Utils
import { incorporateClasses } from '@/utils/cssUtils'
import { useInView } from 'framer-motion'

const Blogs = () => {
  const blogRef1 = React.useRef<any>();
  const blogRef2 = React.useRef<any>();
  const blogRef3 = React.useRef<any>();
  const blogRef4 = React.useRef<any>();
  const blogRef5 = React.useRef<any>();
  const blogRef6 = React.useRef<any>();

  const isViewIn1 = useInView(blogRef1)
  const isViewIn2 = useInView(blogRef2)
  const isViewIn3 = useInView(blogRef3)
  const isViewIn4 = useInView(blogRef4)
  const isViewIn5 = useInView(blogRef5)
  const isViewIn6 = useInView(blogRef6)



  const blogRefs = [blogRef1, blogRef2, blogRef3, blogRef4, blogRef5, blogRef6];
  const isViewIns = [isViewIn1, isViewIn2, isViewIn3, isViewIn4, isViewIn5, isViewIn6];

  return (
    <div className={styles.container}>
      <h3 className={incorporateClasses([textStyles.text__74]) + 'text-center text-white pb-[72px]'} >
        Our Latest Blogs
      </h3>

      <div className="overflow-hidden  ">
        <div className="mx-auto">
          <div className="flex flex-wrap md:-m-2">
            <div className="flex w-full flex-wrap">

              {Array(6).fill(0).map((_, index) => (
                <div ref={blogRefs[index]} className={incorporateClasses([(index % 2 === 0 ? isViewIns[index] ? animation.animate__in__right : animation.animate__out__right : isViewIns[index] ? animation.animate__in__left : animation.animate__out__left), styles.blog__small])} key={index}>
                  <h2 className={styles.blog__text}>Title {index}</h2>
                  <img
                    alt="gallery"
                    className={styles.blog__img}
                    src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp" />
                </div>
              ))}


            </div>

          </div>
        </div>
      </div>

    </div >
  )
}

export default Blogs
