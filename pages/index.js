import Head from 'next/head'
import Image from 'next/image'
import styledJsx from '../styles/Home.styles.js'
import { motion } from 'framer-motion'
import ChildComponent from '../components/ChildComponent'

export default function Home() {
  return (
    <motion.div 
      className={`${styledJsx.className} container`}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { duration: 2 } 
      }}
      exit={{ opacity: 0 }}
    >
      <main className={`${styledJsx.className} main`}>
        <ChildComponent/>
      </main>
    </motion.div>
  )
}
