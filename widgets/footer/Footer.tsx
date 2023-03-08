import { incorporateClasses } from '@/utils/cssUtils'
// Styles.
import layoutStyles from '@/styles/layout.module.css'
import textStyles from '@/styles/text.module.css'
import styles from './Footer.module.css'
import { FooterMap } from '@/components/map'

const Footer = () => {
  return <footer className={styles.footer}>
    <FooterMap />
  </footer >
}

export { Footer }
