import Image from "next/image";
import styles from "../styles/GalleryGrid.module.css";
import boda1 from "../public/images/bg.jpg";
import boda2 from "../public/images/xv1.jpg";
import boda3 from "../public/images/xv2.jpg";
import boda4 from "../public/images/xv3.jpg";
import boda5 from "../public/images/xv4.jpg";
import boda6 from "../public/images/xv5.jpg";
import boda7 from "../public/images/xv6.jpg";

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <h1 className={styles.galleryTitle}>Galeria</h1>
      <div className={styles.galleryContain}>
          <Image src={boda1} alt="" className={styles.photo} priority={true} layout="responsive"/>
          <Image src={boda4} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda3} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda5} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda6} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda2} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda7} alt="" className={styles.photo} layout="responsive"/>
      </div>
      <div className={styles.fill}></div>
    </div>
  );
}
