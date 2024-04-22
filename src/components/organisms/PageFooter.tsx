import Link from 'next/link'
import styles from './PageFooter.module.scss'

export default function PageFooter() {
  return (
    <footer className={styles.footer}>
      &copy;2024 <a href="https://earlyref.com">Early Reflections Co., Ltd.</a>
    </footer>
  )
}
