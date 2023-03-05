import React from 'react'
// Components
import FeatureCard from '../FeatureCard'
// Styles.
import buttonStyles from '@/styles/button.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './FAQ.module.css'
// Utils
import { incorporateClasses } from '@/utils/cssUtils'

const FAQ = () => {

  return (
    <div className={styles.container}>
      <h4 className={incorporateClasses([textStyles.text__44, 'text-heavyMetal pb-[32px]'])} >
        Why you should trust us
      </h4>

      <div className={styles.text__container}>
        <h5 className={incorporateClasses([textStyles.text__32])}>
          New clients often come to us in a state of crisis, responding to circumstances that they believe are beyond their control.
          <br />
          <b className='underline'>  We pay close attention.</b>
        </h5>
        <h5 className={incorporateClasses([textStyles.text__32, "my-[48px]"])}>
          We collaborate with you to create a constructive case plan that aligns with your objectives in an ethical and efficient manner.
        </h5>
      </div>

      <button className={incorporateClasses([textStyles.text__32, buttonStyles.button__white, " w-[268px] h-[62px] rounded-[40px] "])}>
        FAQ us
      </button>
    </div>
  )
}

export default FAQ
