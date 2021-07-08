import Image from 'next/image'
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
        <Image
          src='/image2.jpg'
          alt='Image 2'
          layout='fixed'
          width={5128/10}
          height={3419/10}
        />
      </main>
    </motion.div>
    )
}
