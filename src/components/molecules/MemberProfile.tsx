import styles from './MemberProfile.module.scss'

type Props = {
  member: {
    name: string
    job: string
    description: string
    links: { label: string; href: string }[]
  }
}

export default function MemberProfile({ member }: Props) {
  const links = member.links?.map((link, index) => {
    return (
      <a href={link.href} key={index}>
        {link.label}
      </a>
    )
  })

  return (
    <div className={styles.profile}>
      <h3>{member.name}</h3>
      <small>{member.job}</small>
      <p>{member.description}</p>
      {member.links.length > 0 && <div>{links}</div>}
    </div>
  )
}
