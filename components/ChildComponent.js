import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function ChildComponent() {
    return (
        <div>
            <main className={styles.main, styles.page2}>
                <h1>I AM THE FIRST PAGE</h1>
                <Image
                    src='/image1.jpg'
                    alt='Image 1'
                    layout='fixed'
                    width={4797/10}
                    height={3026/10}
                />
            </main>
        </div>
    )
}
