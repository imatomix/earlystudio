import Slideshow from "../molecules/Slideshow";
import gallery from "@/util/gallery.json";
import styles from "./WorksSection.module.scss";

export default function WorksSection() {
  return (
    <section className={styles.works}>
      <Slideshow srcs={gallery.mix} />
      <Slideshow srcs={gallery.mix} direction="right" />
      <Slideshow srcs={gallery.mix} />
    </section>
  );
}
