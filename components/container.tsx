import { useState, useEffect } from 'react';
import Navbar from './header/navbar';

export default function Container(props: { children: any; }) {
    const [mounted, setMounted] = useState(false);

    // After mounting, we have access to the theme
    useEffect(() => setMounted(true), []);

    const { children } = props;

    return (
        <div>
            <main id="skip" className="flex flex-col justify-center">
                <div className='relative'>
                    <header>
                        <Navbar />
                    </header>
                </div>
                <div>
                    {children}
                </div>
            </main>
        </div>
    );
}