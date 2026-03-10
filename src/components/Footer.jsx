import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';
import { MapPinIcon, PhoneIcon, EnvelopeIcon, ClockIcon } from '@heroicons/react/24/outline';

const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Membership', href: '#membership' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
];

const socials = [
    { icon: FaFacebookF, href: '#', label: 'Facebook', color: 'hover:bg-blue-600' },
    { icon: FaInstagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: FaTiktok, href: '#', label: 'TikTok', color: 'hover:bg-gray-700' },
    { icon: FaWhatsapp, href: 'https://wa.me/+97430864663?text=Hello%20Al%20Aman%20Gym!', label: 'WhatsApp', color: 'hover:bg-green-600' },
];

const Footer = () => (
    <footer className="bg-gym-black border-t border-white/5">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Brand */}
                <div className="lg:col-span-1">
                    <a href="#home" className="inline-block mb-4">
                        <span className="font-bebas text-3xl tracking-wider text-gym-red">AL AMAN </span>
                        <span className="font-bebas text-3xl tracking-wider text-white">GYM</span>
                    </a>
                    <p className="text-gray-400 text-sm leading-relaxed mb-5">
                        Doha's premier 24/7 fitness center. Train hard, stay strong, and achieve your goals with us.
                    </p>
                    <div className="flex gap-3">
                        {socials.map((s, i) => {
                            const Icon = s.icon;
                            return (
                                <a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={s.label}
                                    className={`w-9 h-9 rounded-full bg-gym-gray border border-white/5 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 ${s.color}`}
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            );
                        })}
                    </div>
                </div>

                {/* Quick links */}
                <div>
                    <h4 className="text-white font-semibold mb-4 uppercase text-xs tracking-widest">Quick Links</h4>
                    <ul className="space-y-2.5">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-gray-400 hover:text-gym-red text-sm transition-colors duration-200 flex items-center gap-1 group"
                                >
                                    <span className="w-1 h-1 rounded-full bg-gym-red opacity-0 group-hover:opacity-100 transition-opacity" />
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Hours */}
                <div>
                    <h4 className="text-white font-semibold mb-4 uppercase text-xs tracking-widest">Hours</h4>
                    <div className="flex items-start gap-3 mb-3">
                        <ClockIcon className="w-5 h-5 text-gym-red flex-shrink-0 mt-0.5" />
                        <div>
                            <p className="text-white font-medium text-sm">Open 24/7</p>
                            <p className="text-gray-400 text-sm">Every day of the year</p>
                            <p className="text-gray-500 text-xs mt-1">No holidays, no closures</p>
                        </div>
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold mb-4 uppercase text-xs tracking-widest">Contact</h4>
                    <div className="space-y-3">
                        <a href="https://maps.google.com/?q=Doha+Qatar" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                            <MapPinIcon className="w-4 h-4 text-gym-red flex-shrink-0 mt-0.5" />
                            <span className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">7H22+7QR, Doha, Qatar</span>
                        </a>
                        <a href="tel:+97430864663" className="flex items-start gap-3 group">
                            <PhoneIcon className="w-4 h-4 text-gym-red flex-shrink-0 mt-0.5" />
                            <span className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">+974 3086 4663</span>
                        </a>
                        <a href="mailto:info@alamangym.qa" className="flex items-start gap-3 group">
                            <EnvelopeIcon className="w-4 h-4 text-gym-red flex-shrink-0 mt-0.5" />
                            <span className="text-gray-400 text-sm group-hover:text-gray-200 transition-colors">info@alamangym.qa</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Al Aman Gym. All rights reserved.
                </p>
                <p className="text-gray-600 text-xs">
                    Doha, Qatar &middot; 24/7 Fitness
                </p>
            </div>
        </div>
    </footer>
);

export default Footer;
