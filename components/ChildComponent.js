import Image from 'next/image'

export default function ChildComponent() {
    return (
        <div>
            <main className='main'>
                <h1>I AM THE FIRST PAGE</h1>
                <Image
                    src='/image1.jpg'
                    alt='Image 1'
                    layout='fixed'
                    width={4797/10}
                    height={3026/10}
                    priority
                />
            </main>

            <style jsx>{`
                .main {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .main h1 {
                    background-color: red;
                    font-size: 38px
                }
            `}</style>
        </div>
    )
}
