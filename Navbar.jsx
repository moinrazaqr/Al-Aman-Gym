import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Membership', href: '#membership' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    /* Detect scroll for background change */
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    /* Active section via IntersectionObserver */
    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActiveSection(e.target.id);
                });
            },
            { rootMargin: '-40% 0px -50% 0px' }
        );
        sections.forEach((s) => observer.observe(s));
        return () => sections.forEach((s) => observer.unobserve(s));
    }, []);

    const close = () => setIsOpen(false);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-gym-black/95 backdrop-blur-md shadow-lg border-b border-gym-red/20'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 lg:h-20">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2 group" onClick={close}>
                        <span className="text-2xl lg:text-3xl font-bebas tracking-wider text-gym-red group-hover:text-white transition-colors duration-300">
                            AL AMAN
                        </span>
                        <span className="text-2xl lg:text-3xl font-bebas tracking-wider text-white group-hover:text-gym-red transition-colors duration-300">
                            GYM
                        </span>
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 relative group ${activeSection === link.href.slice(1)
                                        ? 'text-gym-red'
                                        : 'text-gray-300 hover:text-white'
                                    }`}
                            >
                                {link.name}
                                <span
                                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gym-red rounded-full transition-all duration-300 ${activeSection === link.href.slice(1) ? 'w-4' : 'w-0 group-hover:w-4'
                                        }`}
                                />
                            </a>
                        ))}
                        <a
                            href="#membership"
                            className="ml-3 px-5 py-2 btn-primary text-sm shadow-red-sm"
                        >
                            Join Now
                        </a>
                    </div>

                    {/* Mobile burger */}
                    <button
                        id="navbar-toggle"
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gym-gray focus:outline-none transition"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                    >
                        {isOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="bg-gym-black/98 backdrop-blur-md border-t border-gym-red/10 px-4 py-4 space-y-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={close}
                            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${activeSection === link.href.slice(1)
                                    ? 'bg-gym-red/10 text-gym-red'
                                    : 'text-gray-300 hover:bg-gym-gray hover:text-white'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#membership"
                        onClick={close}
                        className="block w-full text-center px-4 py-3 btn-primary mt-2"
                    >
                        Join Now
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
