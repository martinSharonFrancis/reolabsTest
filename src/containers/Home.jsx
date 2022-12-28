import React from 'react'
import Navbar from '../components/Navbar'
import Pins from './Pins'

function Home() {
    return (
        <section>
            <div className='container mx-auto'>
                <header>
                    <Navbar />
                    <Pins />
                </header>
            </div>
        </section>
    )
}

export default Home