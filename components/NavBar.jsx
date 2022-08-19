import Link from "next/link";
import styles from "../styles/NavBar.module.css";
import {
  HiHome,
  HiLocationMarker,
  HiCheck,
  HiPhotograph,
} from "react-icons/hi";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.containNav}>
        <motion.li
          whileTap={{
            scale: 1.3,
          }}
        >
          <Link href="/" className={styles.link}>
            <a className={styles.a}>
              <HiHome size="1.8em" />
              <p>Inicio</p>
            </a>
          </Link>
        </motion.li>
        <motion.li
          whileTap={{
            scale: 1.3,
          }}
        >
          <Link href="/ubicacion">
            <a className={styles.a}>
              <HiLocationMarker size="1.8em" />
              <p>Ubicacion</p>
            </a>
          </Link>
        </motion.li>
        <motion.li
          whileTap={{
            scale: 1.3,
          }}
        >
          <Link href="/asistencia">
            <a className={styles.a}>
              <HiCheck size="1.8em" />
              <p>Asistencia</p>
            </a>
          </Link>
        </motion.li>
        <motion.li
          whileTap={{
            scale: 1.3,
          }}
        >
          <Link href="/galeria">
            <a className={styles.a}>
              <HiPhotograph size="1.8em" />
              <p>Galeria</p>
            </a>
          </Link>
        </motion.li>
      </ul>
    </nav>
  );
}
