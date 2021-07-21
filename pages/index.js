import { motion } from 'framer-motion'
import ChildComponent from '../components/ChildComponent'

export default function Home() {
  return (
    <motion.div 
      className='container'
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        transition: { duration: 2 } 
      }}
      exit={{ opacity: 0 }}
    >
      <main className='main'>
        <ChildComponent />
      </main>

      <style jsx>{`
        .container {
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </motion.div>
  )
}
