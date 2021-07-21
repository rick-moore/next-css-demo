import Image from 'next/image'

export default function ChildComponent2() {
    return (
        <div>
            <main className='main'>
                <h1>I AM THE SECOND PAGE</h1>
                <Image
                    src='/image2.jpg'
                    alt='Image 2'
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
                .main > h1 {
                    background-color: green;
                    font-size: 38px;
                }
            `}</style>
        </div>
    )
}

