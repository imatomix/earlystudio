import styles from './Map.module.scss'

export default function Map() {
  return (
    <div className={styles.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d476.6769836201619!2d139.75946074006828!3d35.69665897261793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188d55d188016b%3A0x46cab11d4cab30f7!2zQ0lSQ0xFU-elnuS_neeUuuKFoA!5e0!3m2!1sja!2sjp!4v1713455020710!5m2!1sja!2sjp"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}
