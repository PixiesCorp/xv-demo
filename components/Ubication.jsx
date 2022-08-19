import Mapp, { Map2 } from "./Mapp";
import styles from "../styles/Location.module.css";
import { motion } from "framer-motion";

export default function Ubication() {
  return (
    <div className={styles.location}>
      <h1 className={styles.locationTitle}>Iglesia San Lorenzo</h1>
      <Mapp />
      <div className={styles.locationDate}>
        <h2>Hora</h2>
        <h3>5:30pm</h3>
      </div>
      <motion.a
        href="https://www.google.com.mx/maps/place/Santuario+de+San+Lorenzo/@31.7396798,-106.4272914,17z/data=!3m1!4b1!4m5!3m4!1s0x85d1e3d2eeb9533d:0xaad5a0375c25dfa1!8m2!3d31.7396764!4d-106.4250177"
        className={styles.locationBtn}
        whileTap={{ scale: 1.1 }}
      >
        Ubicacion
      </motion.a>
      <h1 className={styles.locationTitle}>Salon de Eventos Nuvo</h1>
      <Map2 />
      <div className={styles.locationDate}>
        <h2>Hora</h2>
        <h3>9:00pm - 1:00am</h3>
      </div>
      <motion.a
        href="https://www.google.com.mx/maps/place/Nuv%C3%B3+Centro+de+Eventos/@31.680983,-106.3919158,17z/data=!4m5!3m4!1s0x86e75d063c0fffff:0x7d1fb8d8f6619e9a!8m2!3d31.6810926!4d-106.3893838"
        className={styles.locationBtn}
        whileTap={{ scale: 1.1 }}
      >
        Ubicacion
      </motion.a>
      <div className={styles.locationFill}></div>
    </div>
  );
}
