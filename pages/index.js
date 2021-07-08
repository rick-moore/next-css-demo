import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'
import ChildComponent from '../components/ChildComponent'

export default function Home() {
  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { duration: 2 } 
      }}
      exit={{ opacity: 0 }}
    >
      <main className={styles.main}>
        <ChildComponent/>
      </main>
    </motion.div>
  )
}
