import CompanySection from "@/components/organisms/CompanySection";
import WorksSection from "@/components/organisms/WorksSection";
import styles from "./page.module.scss";
import PageHeader from "@/components/organisms/PageHeader";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <PageHeader />
        <WorksSection />
      </div>
      <CompanySection />
    </main>
  );
}
