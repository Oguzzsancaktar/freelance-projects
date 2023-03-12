import React from 'react'
// Components.
import { ReviewItem } from '../customer-review'
// Styles.
import textStyles from '@/styles/text.module.css'
import styles from './Features.module.css'
// Utils
import { incorporateClasses } from '@/utils/cssUtils'

const Features = () => {

  return (
    <div className={styles.container}>
      <h3 className={incorporateClasses([textStyles.text__74]) + 'text-center text-white pb-[72px]'} >
        What says our Happy Clients
      </h3>

      <ul className='flex flex-wrap gap-[20px]'>
        {Array(3).fill(0).map((_, index) => (
          <ReviewItem />
        ))}
      </ul>

    </div>
  )
}

export default Features
