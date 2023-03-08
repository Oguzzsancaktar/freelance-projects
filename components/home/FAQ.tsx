import React from 'react'
// Styles.
import buttonStyles from '@/styles/button.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './FAQ.module.css'
// Utils
import { incorporateClasses } from '@/utils/cssUtils'
// Libs.
import { Disclosure, Transition } from '@headlessui/react'
import { Accordeon } from '../accordeon'

const FAQ = () => {

  return (
    <div className={styles.container}>
      <h4 className={incorporateClasses([textStyles.text__44, 'underline text-center text-white pb-[32px]'])} >
        Frequently Asked Questions
      </h4>

      <ul>
        {Array(5).fill(0).map((_, index) => (
          <li className='mb-[30px]'>
            <Accordeon head={"What questions immigration lawyer will ask me?"} body={"An immigration attorney will ask you questions about your entries into the United States, your criminal background, information about family members and their immigration status, if you have ever been granted immigration benefits in the past, and other similar questions."} />
          </li>
        ))}

      </ul>
    </div>
  )
}

export default FAQ
