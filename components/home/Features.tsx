import React from 'react'
// Components
import FeatureCard from '../FeatureCard'
// Styles.
import textStyles from '@/styles/text.module.css'
import styles from './Features.module.css'
// Utils
import { incorporateClasses } from '@/utils/cssUtils'

const Features = () => {

  return (
    <div className={styles.container}>
      <h3 className={incorporateClasses([textStyles.text__44]) + 'text-center text-white pb-[72px]'} >
        What can we help you about?
      </h3>

      <ul className='flex flex-wrap gap-[48px]'>
        <li className='flex-1'>
          <FeatureCard />
        </li>
        <li className='flex-1 min-w-[250px]'>
          <FeatureCard />
        </li>
        <li className='flex-1 min-w-[250px]'>
          <FeatureCard />
        </li>
        <li className='flex-1 min-w-[250px]'>
          <FeatureCard />
        </li>
        <li className='flex-1 min-w-[250px]'>
          <FeatureCard />
        </li>
        <li className='flex-1 min-w-[250px]'>
          <FeatureCard />
        </li>

      </ul>

    </div>
  )
}

export default Features
