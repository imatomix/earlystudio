import Link from "next/link";
import styles from "./PageFooter.module.scss";

export default function PageFooter() {
  return (
    <footer className={styles.footer}>
      &copy;2007 <a href="https://earlyref.com">Early Reflections Co.,</a>
    </footer>
  );
}
