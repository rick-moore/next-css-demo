import React from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <Link href='/'>
                <a>PAGE 1</a>
            </Link>
            <Link href='page2'>
                <a>PAGE 2</a>
            </Link>
        </nav>
    )
}
