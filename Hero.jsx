import React, { useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { ArrowDownIcon } from '@heroicons/react/24/outline';

const stats = [
    { value: '24/7', label: 'Always Open' },
    { value: '500+', label: 'Members' },
    { value: '200 QAR', label: 'From / Month' },
    { value: '5+', label: 'Years Running' },
];

const Hero = () => {
    const headlineRef = useRef(null);

    useEffect(() => {
        const el = headlineRef.current;
        if (!el) return;
        const words = el.querySelectorAll('.word');
        words.forEach((w, i) => {
            w.style.animationDelay = `${i * 0.12}s`;
            w.classList.add('animate-fade-up');
        });
    }, []);

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        >
            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Al Aman Gym interior"
                    className="w-full h-full object-cover"
                    fetchpriority="high"
                    loading="eager"
                />
                {/* Multi-layer overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-gym-black/80 via-gym-black/65 to-gym-black" />
                <div className="absolute inset-0 bg-gradient-to-r from-gym-black/60 via-transparent to-gym-black/60" />
            </div>

            {/* Red accent glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gym-red/10 rounded-full blur-3xl pointer-events-none" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pt-20">
                {/* Badge */}
                <div
                    className="inline-flex items-center gap-2 bg-gym-red/15 border border-gym-red/30 rounded-full px-4 py-1.5 mb-6 reveal visible"
                >
                    <span className="w-2 h-2 rounded-full bg-gym-red animate-pulse" />
                    <span className="text-gym-red text-sm font-medium tracking-wide uppercase">
                        Doha's Premier 24/7 Fitness Center
                    </span>
                </div>

                {/* Main headline */}
                <h1
                    ref={headlineRef}
                    className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-wide mb-6"
                    aria-label="Train Hard. Stay Strong."
                >
                    <span className="word inline-block text-white opacity-0">Train</span>{' '}
                    <span className="word inline-block text-white opacity-0">Hard.</span>
                    <br />
                    <span className="word inline-block text-gradient opacity-0">Stay</span>{' '}
                    <span className="word inline-block text-gradient opacity-0">Strong.</span>
                </h1>

                <p
                    className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto reveal"
                    style={{ transitionDelay: '0.5s' }}
                >
                    Affordable memberships · Modern equipment · Friendly certified trainers
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 reveal" style={{ transitionDelay: '0.65s' }}>
                    <a
                        href="#membership"
                        id="hero-join-now"
                        className="px-8 py-4 btn-primary text-lg shadow-red-md"
                    >
                        Join Now
                    </a>
                    <a
                        href="https://wa.me/+97430864663?text=Hello!%20I%20am%20interested%20in%20your%20gym%20membership."
                        target="_blank"
                        rel="noopener noreferrer"
                        id="hero-whatsapp"
                        className="flex items-center justify-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-md transition-all duration-300 hover:-translate-y-0.5"
                    >
                        <FaWhatsapp className="w-5 h-5" />
                        Chat on WhatsApp
                    </a>
                </div>

                {/* Stats bar */}
                <div
                    className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10 reveal"
                    style={{ transitionDelay: '0.8s' }}
                >
                    {stats.map((s, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center py-5 px-4 bg-gym-black/60 backdrop-blur-sm hover:bg-gym-red/10 transition-colors duration-300"
                        >
                            <span className="font-bebas text-3xl md:text-4xl text-gym-red tracking-wide">
                                {s.value}
                            </span>
                            <span className="text-xs text-gray-400 uppercase tracking-widest mt-1">
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <a
                href="#about"
                aria-label="Scroll to About section"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-gym-red transition-colors duration-200 animate-float"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <ArrowDownIcon className="w-5 h-5" />
            </a>
        </section>
    );
};

export default Hero;
