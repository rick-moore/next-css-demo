import Image from 'next/image'
import styledJsx from '../styles/ChildComponent2.styles'

export default function ChildComponent() {
    return (
        <div>
            <main className={`${styledJsx.className} main`}>
                <h1 className={styledJsx.className}>I AM THE FIRST PAGE</h1>
                <Image
                    src='/image2.jpg'
                    alt='Image 2'
                    layout='fixed'
                    width={4797/10}
                    height={3026/10}
                />
            </main>
            {styledJsx.styles}
        </div>
    )
}

