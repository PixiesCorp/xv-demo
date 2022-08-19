import { useState, useRef } from "react";
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs'
import styles from '../styles/Music.module.css'
import { motion } from 'framer-motion'

function Music (){
  const [isPlaying, setIsPlaying] = useState(false)

  const audioPlayer = useRef()

  const togglePlayPause = () => {
    const prevValue = isPlaying
    setIsPlaying(!prevValue)
    if (!prevValue) {
      audioPlayer.current.play()
    } else {
      audioPlayer.current.pause()
    }
  }
  return (
    <div className={styles.homeContainMusic}>
      <h2>Escucha Mi Cancion</h2>
      <audio ref={audioPlayer} src="/audio/Cancion.mp3"></audio>
      <motion.button onClick={togglePlayPause} className={styles.homeMusicIcon} whileTap={{ scale: 1.1}}>
        { isPlaying ? <BsPauseFill /> : <BsFillPlayFill />}
      </motion.button>
    </div>
  )
}

export default Music