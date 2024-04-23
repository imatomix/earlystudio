import MemberProfile from '../molecules/MemberProfile'
import CompanyInfo from '../molecules/CompanyInfo'
import Map from '@/components/atoms/Map'
import Logo from '@/assets/logos/logo.svg'
import members from '@/util/member.json'
import styles from './CompanySection.module.scss'

export default function CompanySection() {
  const profiles = members.map((member, index) => {
    return <MemberProfile member={member} key={index} />
  })

  return (
    <section className={styles.company}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <div className={styles.member}>{profiles}</div>
      <div className={styles.info}>
        <CompanyInfo />
        <Map />
      </div>
    </section>
  )
}
