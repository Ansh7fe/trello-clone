import React from 'react'
import Features from '../Features/Features'
import Footer from '../Footer/Footer'
import Hero from '../Hero/Hero'
import Introduction from '../Introduction/Introduction'
import Navbar from '../Navbar/Navbar'
import Signup from '../Signup/Signup'
import Testimonals from '../Testimonals/Testimonals'
import Tour from '../Tour/Tour'

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Hero />
            <Introduction />
            <Tour />
            <Features />
            <Testimonals />
            <Signup />
            <Footer />
        </div>
    )
}

export default Home
