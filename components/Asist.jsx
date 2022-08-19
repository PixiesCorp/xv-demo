import Image from 'next/image'
import Hat from '../public/images/cowboy.png'
import Dress from '../public/images/dress.png'
import styles from "../styles/Asist.module.css"
import Animate from "./Animate"

export default function Asist() {
  return (
    <div className={styles.asistContain}>
      <h1 className={styles.asistTitle}>Codigo de Vestimenta</h1>
      <div className={styles.asistContainImg}>
        <span className={styles.suit}>
          <Image src={Hat} alt="" />
        </span>
        <span className={styles.dress}>
          <Image src={Dress} alt="" />
        </span>
      </div>
      <h3 className={styles.typeEvent}>Semi Formal</h3>
      <div className={styles.info}>
        <p>$ Buzon de Dinero $</p>
      </div>
      <h1 className={styles.confirm}>! Confirma tu asistencia !</h1>
      <Animate />
      <div className={styles.fill}></div>
    </div>
  );
}
