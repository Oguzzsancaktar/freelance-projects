import { incorporateClasses } from '@/utils/cssUtils'
// Styles.
import layoutStyles from '@/styles/layout.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './Footer.module.css'
import dynamic from 'next/dynamic'
import { selectIcon } from '@/utils/selectIconUtil'

// Dynamic import.
const FooterMap = dynamic(
  () => import('@/components/map/FooterMap'),
  { ssr: false }
)

const Footer = () => {
  return <footer className={styles.footer}>
    <div className="flex-col justify-center">
      <h3 className={incorporateClasses([textStyles.text__74]) + 'text-center text-white pb-[30px]'} >
        Contact Our Team
      </h3>

      <h6 className={incorporateClasses([textStyles.text__22, 'text-center text-gray max-w-[600px] m-auto'])} >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consectetur repellat incidunt.
      </h6>

      <div className="grayscale invert rounded-[40px] overflow-hidden  py-[60px] ">
        <FooterMap />
      </div>

      <div className='w-[70px] mx-auto'>
        {selectIcon("company-icon")}
      </div>

      <div className="flex justify-center  py-[40px] ">
        <a className={incorporateClasses([textStyles.text__24, "text-gray border-r-blueRibbon border-r-[1px] pr-[10px] mr-[10px]"])} href="">FAQ</a>
        <a className={incorporateClasses([textStyles.text__24, "text-gray border-r-blueRibbon border-r-[1px] pr-[10px] mr-[10px]"])} href="">About Us</a>
        <a className={incorporateClasses([textStyles.text__24, "text-gray border-r-blueRibbon border-r-[1px] pr-[10px] mr-[10px]"])} href="">Blog</a>
        <a className={incorporateClasses([textStyles.text__24, "text-gray "])} href="">Contact</a>
      </div>

      <div className="flex justify-center">
        <div className="flex justify-center items-center bg-silver h-[35px] w-[35px] rounded-[5px]">
          {selectIcon('twitter')}
        </div>
        <div className="flex justify-center items-center bg-silver h-[35px] w-[35px] rounded-[5px] mx-[10px]">
          {selectIcon('facebook')}
        </div>
        <div className="flex justify-center items-center bg-silver h-[35px] w-[35px] rounded-[5px]">
          {selectIcon('linkedin')}
        </div>
      </div>

    </div>
  </footer >
}

export { Footer }
