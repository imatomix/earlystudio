import Image from 'next/image'
import styles from './Slideshow.module.scss'

type Props = {
  srcs: string[]
  mode?: 'default' | 'slice'
  direction?: 'right' | 'left'
}

export default function Slideshow({
  srcs,
  mode = 'default',
  direction = 'left',
}: Props) {
  const generateShow = () => {
    return srcs.map((src, index) => {
      return (
        <div className={styles.wrapper} key={index}>
          <Image
            className={styles.image}
            src={src}
            fill
            alt="image"
            priority
            sizes="100vw 100vh"
          />
        </div>
      )
    })
  }

  return (
    <div className={[styles.showcase, mode, direction].join(' ')}>
      <div className={styles.container}>{generateShow()}</div>
    </div>
  )
}
