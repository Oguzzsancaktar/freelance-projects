import React from 'react'
// Components
import ContactCard from '@/components/contact/ContactCard'
// Styles.
import buttonStyles from '@/styles/button.module.css'
import layoutStyles from '@/styles/layout.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './Contact.module.css'
// Utils
import { incorporateClasses } from '@/utils/cssUtils'

const Contact = () => {

  return (
    <div className={styles.container}>
      <h4 className={incorporateClasses([textStyles.text__44, 'text-center text-heavyMetal mb-[115px]'])} >
        We would like to hear from you
      </h4>

      <div className={layoutStyles.y__between}>
        <ul className='flex flex-wrap gap-[48px]'>
          <li className='flex-1'>
            <ContactCard />
          </li>
          <li className='flex-1 min-w-[250px]'>
            <ContactCard />
          </li>
          <li className='flex-1 min-w-[250px]'>
            <ContactCard />
          </li>
        </ul>

        <span className='my-[48px]'>
          or
        </span>

        <button className={incorporateClasses([textStyles.text__32, buttonStyles.button__white, " w-[268px] h-[62px] rounded-[40px] "])}>
          Get Appointment
        </button>
      </div>

    </div>
  )
}

export default Contact
