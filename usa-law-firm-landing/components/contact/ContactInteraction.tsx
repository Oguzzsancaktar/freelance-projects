import React from 'react'
// Styles.
import buttonStyles from '@/styles/button.module.css'
import layoutStyles from '@/styles/layout.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './Welcome.module.css'
// Utils.
import { selectIcon } from '@/utils/selectIconUtil'
import { incorporateClasses } from '@/utils/cssUtils'

interface IProps {
  buttonText?: string
  data: any
}

const ContactInteraction: React.FC<IProps> = ({ buttonText = "Let's Talk", data }) => {
  return (
    <div className={incorporateClasses([textStyles.text__26, layoutStyles.x__center, 'flex p-[10px] rounded-[40px] w-full  '])}>
      {/* <input type='email' placeholder='Your email address for law support' className={incorporateClasses([textStyles.text__14, layoutStyles.y__center, 'flex flex-col text-gray  bg-mineShaft outline-none w-full'])} />
      <button className={incorporateClasses([buttonStyles.button__primary__solid, textStyles.text__24]) + ' h-[62px] w-[15rem] rounded-[40px]'}>
        {buttonText } 
      </button> */}

      <ul className="flex justify-center">
        {data.map((item: any, index: number) => (
          <li className={"flex justify-center items-center bg-silver h-[7rem] w-[7rem] rounded-[5px] " + (data.length - 1 > index ? "mr-[10px]" : "")}>
            <a href={item.icon === "phone" ? "tel:" + item.address : item.address} target='_blank'>
              {selectIcon(item.icon)}
            </a>
          </li>
        ))}
      </ul>
    </div >
  )
}

export default ContactInteraction
