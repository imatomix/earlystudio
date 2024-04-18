import Logo from "@/assets/logos/logo.svg";
import styles from "./PageHeader.module.scss";

export default function PageHeader() {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo} />
    </header>
  );
}
