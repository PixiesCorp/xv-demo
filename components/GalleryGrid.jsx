import Image from "next/image";
import styles from "../styles/GalleryGrid.module.css";
import boda1 from "../public/images/bg.jpg";
import boda2 from "../public/images/xv1.jpg";
import boda3 from "../public/images/xv2.jpg";
import boda4 from "../public/images/xv3.jpg";
import boda5 from "../public/images/xv4.jpg";
import boda7 from "../public/images/xv6.jpg";
import boda8 from "../public/images/xv7.jpg";
import boda9 from "../public/images/xv8.jpg";
import boda10 from "../public/images/xv9.jpg";
import boda11 from "../public/images/xv10.jpg";
import boda12 from "../public/images/xv11.jpg";
import boda13 from "../public/images/xv12.jpg";
import boda14 from "../public/images/xv13.jpg";
import boda15 from "../public/images/xv14.jpg";
import boda16 from "../public/images/xv15.jpg";
import boda17 from "../public/images/xv16.jpg";

export default function Gallery() {
  return (
    <div className={styles.gallery}>
      <h1 className={styles.galleryTitle}>Galeria</h1>
      <div className={styles.galleryContain}>
          <Image src={boda8} alt="" className={styles.photo} priority={true} layout="responsive"/>
          <Image src={boda4} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda3} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda5} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda2} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda7} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda9} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda10} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda11} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda12} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda13} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda14} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda15} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda16} alt="" className={styles.photo} layout="responsive"/>
          <Image src={boda17} alt="" className={styles.photo} layout="responsive"/>
      </div>
      <div className={styles.fill}></div>
    </div>
  );
}
