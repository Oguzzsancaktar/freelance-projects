import React from 'react'
import dynamic from 'next/dynamic'
// Components
// Styles.
import animation from '@/styles/animation.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './Youtube.module.css'
// Utils
import { incorporateClasses } from '@/utils/cssUtils'
import { useInView } from 'framer-motion'

// Dynamic imports.
const YoutubeSlider = dynamic(() => import('../slider/youtube/YoutubeSlider'), { ssr: false })

const Youtube = () => {
  const ref = React.useRef(null)
  const isInView = useInView(ref)
  return (
    <div ref={ref} className={incorporateClasses([(isInView ? animation.animate__in__bottom : animation.animate__out__bottom), styles.container, " h-[400px]"])}>
      <h4 className={incorporateClasses([textStyles.text__44, 'text-white pb-[32px]'])} >
        Latest Youtube Videos
      </h4>


      <YoutubeSlider />

    </div>
  )
}

export default Youtube
