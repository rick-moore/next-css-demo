import React from 'react'
import styles from '../styles/Home.module.css'
import { motion } from 'framer-motion'

export default function page2() {
    return (
        <motion.div 
            className={styles.container}
            initial={{ opacity: 0}}
            animate={{ 
                opacity: 1,
                transition: { duration: 2 } 
              }}
            exit={{ opacity: 0 }}
    >
      <main className={styles.main}>
        <h1>I AM THE SECOND PAGE</h1>
      </main>
    </motion.div>
    )
}
