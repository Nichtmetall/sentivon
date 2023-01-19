import { useState, useEffect } from 'react';
import Footer from '../footer/footer';
import Navbar from '../header/navbar';
import { Inter } from '@next/font/google'

export default function MainLayout(props: { children: any; }) {
    const [mounted, setMounted] = useState(false);

    const inter = Inter({ subsets: ['latin'] })

    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    const { children } = props;

    return (
        <div className={inter.className}>
            <main id="skip" className="flex flex-col justify-center">
                <div className='relative'>
                    <header>
                        <Navbar />
                    </header>
                </div>
                <div>
                    {children}
                </div>
                <div>
                    <Footer />
                </div>
            </main>
        </div>
    );
}