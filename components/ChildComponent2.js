import Image from 'next/image'
import styles from '../styles/ChildComponent2.module.css'

export default function ChildComponent() {
    return (
        <div>
            <main className={styles.main}>
                <h1>I AM THE SECOND PAGE</h1>
                <Image
                    src='/image2.jpg'
                    alt='Image 2'
                    layout='fixed'
                    width={4797/10}
                    height={3026/10}
                />
            </main>
        </div>
    )
}
