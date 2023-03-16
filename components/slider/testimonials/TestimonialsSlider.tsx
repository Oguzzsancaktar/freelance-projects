import React, { useEffect } from 'react'
// Utils.
import { incorporateClasses } from '@/utils/cssUtils'
// Styles.
import styles from './TestimonialsSlider.module.css'
import textStyles from '@/styles/text.module.css'
import TestimonialsSliderItem from './TestimonialsSliderItem'
import { useAnimationFrame } from 'framer-motion'

const TestimonialsSlider = () => {
  const tempArr = Array(9).fill(0)
  const maxCount = Math.floor(tempArr.length / 3)
  const [counter, setCounter] = React.useState(0)


  useEffect(() => {

    let interval = setInterval(() => {
      if (counter + 1 < maxCount) {
        setCounter(counter => counter + 1)
      } else {
        setCounter(0)
      }
    }, 10000);
    return () => clearInterval(interval);
  });



  return (
    <div className={incorporateClasses([styles.hover, styles.flip__container, 'h-full'])}>


      {/* <div className={incorporateClasses([styles.fade, "flex flex-col h-full p-[30px]"])}>
        {tempArr.splice(counter * 3, 3).map((_, i) => (
          <TestimonialsSliderItem index={i * counter} key={i} />
        ))
        }
      </div> */}

      <div className={incorporateClasses([styles.flipper])}>
        <div className={incorporateClasses([styles.front, "bg-mineShaft"])}>
          <h3 className={incorporateClasses([textStyles.text__20, 'text-center  text-white'])}>
            Happy Clients
          </h3>
          <div className={incorporateClasses([styles.fade, "flex flex-col h-full p-[30px]"])}>
            {tempArr.splice(counter * 3, 3).map((_, i) => (
              <TestimonialsSliderItem index={i * counter} key={i} />
            ))
            }
          </div>
        </div>
        <div className={incorporateClasses([styles.back, "bg-mineShaft"])}>
          <h3 className={incorporateClasses([textStyles.text__20, 'text-center  text-white'])}>
            Happy Clients

          </h3>
          <div className={incorporateClasses([styles.fade, "flex flex-col h-full p-[30px]"])}>
            {tempArr.splice(counter * 3, 3).map((_, i) => (
              <TestimonialsSliderItem index={i * counter} key={i} />
            ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsSlider
