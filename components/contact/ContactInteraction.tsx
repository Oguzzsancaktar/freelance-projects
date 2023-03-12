import React from 'react'
// Styles.
import buttonStyles from '@/styles/button.module.css'
import layoutStyles from '@/styles/layout.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './Welcome.module.css'
// Utils.
import { selectIcon } from '@/utils/selectIconUtil'
import { incorporateClasses } from '@/utils/cssUtils'


const ContactInteraction = () => {
  return (
    <div className={incorporateClasses([textStyles.text__26, layoutStyles.x__between, 'flex p-[10px] rounded-[40px] w-full bg-mineShaft pl-[30px]'])}>
      <input type='email' placeholder='Your email address for law support' className={incorporateClasses([textStyles.text__14, layoutStyles.y__center, 'flex text-gray  bg-mineShaft outline-none w-full'])} />
      <button className={incorporateClasses([buttonStyles.button__primary__solid, textStyles.text__24]) + ' h-[62px] w-[150px] rounded-[40px]'}>
        Let's Talk
      </button>
    </div>
  )
}

export default ContactInteraction
