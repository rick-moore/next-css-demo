import Image from 'next/image'
import styledJsx from '../styles/page2.styles.js'
import { motion } from 'framer-motion'
import ChildComponent2 from '../components/ChildComponent2'

export default function page2() {
    return (
      <motion.div 
        className={`${styledJsx.className} container`}
        initial={{ opacity: 0}}
        animate={{ 
            opacity: 1,
            transition: { duration: 2 } 
          }}
        exit={{ opacity: 0 }}
      >
        <main className={`${styledJsx.className} main`}>
          <ChildComponent2 />
        </main>
      </motion.div>
    )
}
