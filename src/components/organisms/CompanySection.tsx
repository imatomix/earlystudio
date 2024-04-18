import CompanyInfo from "../molecules/CompanyInfo";
import Map from "@/components/atoms/Map";
import Logo from "@/assets/logos/logo.svg";
import styles from "./CompanySection.module.scss";

export default function CompanySection() {
  return (
    <section className={styles.company}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <CompanyInfo />
      <Map />
    </section>
  );
}
