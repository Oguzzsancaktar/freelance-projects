import React from 'react'
// Styles.
import animation from '@/styles/animation.module.css'
import buttonStyles from '@/styles/button.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './FAQ.module.css'
// Utils
import { incorporateClasses } from '@/utils/cssUtils'
// Libs.
import { Disclosure, Transition } from '@headlessui/react'
import { Accordeon } from '../accordeon'
import { useInView } from 'framer-motion'

const FAQ = () => {
  const faqRef1 = React.useRef<any>();
  const faqRef2 = React.useRef<any>();
  const faqRef3 = React.useRef<any>();
  const faqRef4 = React.useRef<any>();
  const faqRef5 = React.useRef<any>();

  const isViewIn1 = useInView(faqRef1)
  const isViewIn2 = useInView(faqRef2)
  const isViewIn3 = useInView(faqRef3)
  const isViewIn4 = useInView(faqRef4)
  const isViewIn5 = useInView(faqRef5)



  const faqRefs = [faqRef1, faqRef2, faqRef3, faqRef4, faqRef5];
  const isViewIns = [isViewIn1, isViewIn2, isViewIn3, isViewIn4, isViewIn5];

  return (
    <div className={styles.container}>
      <h4 className={incorporateClasses([textStyles.text__44, ' text-center text-white pb-[50px]'])} >
        FAQs
      </h4>

      <ul>
        {Array(5).fill(0).map((_, index) => (
          <li ref={faqRefs[index]} className={incorporateClasses([(index % 2 === 0 ? isViewIns[index] ? animation.animate__in__right : animation.animate__out__right : isViewIns[index] ? animation.animate__in__left : animation.animate__out__left), 'mb-[30px]'])} key={index}>
            <Accordeon head={"What questions immigration lawyer will ask me?"} body={"An immigration attorney will ask you questions about your entries into the United States, your criminal background, information about family members and their immigration status, if you have ever been granted immigration benefits in the past, and other similar questions."} />
          </li>
        ))}

      </ul>
    </div>
  )
}

export default FAQ
