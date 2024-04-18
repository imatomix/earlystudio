import CompanySection from "@/components/organisms/CompanySection";
import WorksSection from "@/components/organisms/WorksSection";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <WorksSection />
      <CompanySection />
    </main>
  );
}
