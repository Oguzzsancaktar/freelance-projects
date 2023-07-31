import { incorporateClasses } from '@/utils/cssUtils'
// Styles.
import layoutStyles from '@/styles/layout.module.css'
import animation from '@/styles/animation.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './Footer.module.css'
import dynamic from 'next/dynamic'
import { selectIcon } from '@/utils/selectIconUtil'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { map } from 'lodash'

// Dynamic import.
const FooterMap = dynamic(
  () => import('@/components/map/FooterMap'),
  { ssr: false }
)

interface IProps {
  data: any
}
const Footer:React.FC<IProps> = ({data}) => {
  const footerRef = useRef(null)
  const isFooterInView = useInView(footerRef)
  if (!data) {
    return <div>...</div>
  }
  return <footer ref={footerRef} className={styles.footer}>
    <div className={incorporateClasses([(isFooterInView ? animation.scale__in : animation.scale__out), "flex-col justify-center"])}>
      <h3 className={incorporateClasses([textStyles.text__74]) + 'text-center text-white pb-[30px]'} >
        {data["title"]||"Contact Our Team"}
      </h3>

      <h6 className={incorporateClasses([textStyles.text__22, 'text-center text-gray max-w-[600px] m-auto'])} >
      {data["description"]||"Contact Our Team"}
      </h6>

      <div className="grayscale invert rounded-[40px] overflow-hidden  py-[3rem] ">
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


      <ul className="flex justify-center">
                {data.items.map((item: any) => (
                <li className="flex justify-center items-center bg-silver h-[35px] w-[35px] rounded-[5px] mr-[10px]">
                  <a href={item.adress} target='_blank'>
                  {selectIcon(item.icon)}
                  </a>
                </li>
                ))}
              </ul>

    </div>
  </footer >
}

export { Footer }
