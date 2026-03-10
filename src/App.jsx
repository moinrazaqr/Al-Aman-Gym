import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Membership from './components/Membership';
import Facilities from './components/Facilities';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
    return (
        <div className="min-h-screen bg-gym-black text-white font-inter">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Membership />
                <Facilities />
                <WhyChooseUs />
                <Gallery />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default App;
