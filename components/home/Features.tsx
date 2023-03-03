import React from 'react'
// Styles.
import styles from './features.module.css'
import { selectIcon } from '@/utils/selectIconUtil'
import FeatureCard from '../FeatureCard'

const Features = () => {

  return (
    <div className={styles.container}>
      <h3 className='text-[44px] leading-[60px] text-center text-white pb-[72px]' >
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
