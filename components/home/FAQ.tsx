import React from 'react'
// Components
import FeatureCard from '../feature/FeatureCard'
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
      <h4 className={incorporateClasses([textStyles.text__44, 'underline text-center text-heavyMetal pb-[32px]'])} >
        Frequently Asked Questions
      </h4>

      <div>
        <Accordeon head={"What questions immigration lawyer will ask me?"} body={"An immigration attorney will ask you questions about your entries into the United States, your criminal background, information about family members and their immigration status, if you have ever been granted immigration benefits in the past, and other similar questions."} />
      </div>
    </div>
  )
}

export default FAQ
