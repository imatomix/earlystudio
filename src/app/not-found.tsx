import PageHeader from '@/components/organisms/PageHeader'
import PageFooter from '@/components/organisms/PageFooter'
import Slideshow from '@/components/molecules/Slideshow'
import { Oswald } from 'next/font/google'
import gallery from '@/util/gallery.json'
import styles from './not-found.module.scss'

const oswald = Oswald({
  weight: '700',
  subsets: ['latin'],
  display: 'swap',
})

export default function NotFound() {
  return (
    <main className={styles.main}>
      <PageHeader />
      <section className={styles.container}>
        <Slideshow srcs={gallery.motion} direction="right" />
        <div className={[styles.message, oswald.className].join(' ')}>
          <h1 className={styles.code}>404</h1>
          <h4>Page Not Found</h4>
        </div>
      </section>
      <PageFooter />
    </main>
  )
}
