import React, { useEffect, useRef, useState } from 'react';
import { ClockIcon, HeartIcon, UsersIcon, CurrencyDollarIcon, TrophyIcon } from '@heroicons/react/24/outline';

const counters = [
    { end: 500, label: 'Active Members', suffix: '+', icon: UsersIcon },
    { end: 5, label: 'Years of Excellence', suffix: '+', icon: TrophyIcon },
    { end: 24, label: 'Hours a Day', suffix: '/7', icon: ClockIcon },
    { end: 200, label: 'QAR / Month', suffix: '', icon: CurrencyDollarIcon },
];

const features = [
    {
        icon: ClockIcon,
        title: '24/7 Access',
        desc: 'Work out on your schedule – day or night, we are always open.',
    },
    {
        icon: HeartIcon,
        title: 'Cardio Machines',
        desc: 'Treadmills, ellipticals, rowing machines, stationary bikes and more.',
    },
    {
        icon: UsersIcon,
        title: 'Weight Training',
        desc: 'Full range of free weights, barbells, and resistance machines.',
    },
    {
        icon: CurrencyDollarIcon,
        title: 'Affordable Plans',
        desc: 'Flexible monthly or long-term memberships for every budget.',
    },
];

const images = [
    {
        src: 'https://images.unsplash.com/photo-1570829460005-c84038752a99?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        alt: 'Gym equipment rows',
    },
    {
        src: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        alt: 'Weight training area',
    },
    {
        src: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        alt: 'Cardio machines',
    },
    {
        src: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
        alt: 'Personal trainer coaching',
    },
];

function useCountUp(end, duration = 1800, trigger) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!trigger) return;
        let start = 0;
        const step = Math.ceil(end / (duration / 16));
        const timer = setInterval(() => {
            start += step;
            if (start >= end) { setCount(end); clearInterval(timer); }
            else setCount(start);
        }, 16);
        return () => clearInterval(timer);
    }, [end, duration, trigger]);
    return count;
}

const Counter = ({ item, trigger }) => {
    const count = useCountUp(item.end, 1500, trigger);
    const Icon = item.icon;
    return (
        <div className="text-center p-6 bg-gym-gray rounded-xl border border-white/5 hover:border-gym-red/30 transition-all duration-300 hover:-translate-y-1">
            <Icon className="w-6 h-6 text-gym-red mx-auto mb-2" />
            <div className="font-bebas text-4xl text-white tracking-wide">
                {count}
                <span className="text-gym-red">{item.suffix}</span>
            </div>
            <div className="text-gray-400 text-sm mt-1">{item.label}</div>
        </div>
    );
};

const About = () => {
    const sectionRef = useRef(null);
    const [triggered, setTriggered] = useState(false);

    useEffect(() => {
        const el = sectionRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); } },
            { threshold: 0.2 }
        );
        if (el) observer.observe(el);
        return () => observer.disconnect();
    }, []);

    /* Reveal elements */
    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.1 }
        );
        reveals.forEach((r) => io.observe(r));
        return () => reveals.forEach((r) => io.unobserve(r));
    }, []);

    return (
        <section id="about" ref={sectionRef} className="py-24 bg-gym-gray relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-gym-red/5 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center mb-16 reveal">
                    <h2 className="section-title">About Al Aman Gym</h2>
                    <div className="section-divider mx-auto mb-6" />
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Your premier fitness destination in the heart of Doha, Qatar — open around the clock so you can train on your terms.
                    </p>
                </div>

                {/* Counter row */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                    {counters.map((item, i) => (
                        <div key={i} className={`reveal delay-${(i + 1) * 100}`}>
                            <Counter item={item} trigger={triggered} />
                        </div>
                    ))}
                </div>

                {/* Two-column layout */}
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left – text */}
                    <div className="reveal-left">
                        <h3 className="text-2xl font-semibold text-white mb-4">
                            A Community Built Around <span className="text-gradient">Fitness</span>
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-8">
                            Al Aman Gym has been Doha's go-to fitness destination for over 5 years. Whether you're a seasoned athlete or just starting your journey, our world-class facilities and dedicated trainers are here to help you succeed.
                        </p>

                        <ul className="space-y-5">
                            {features.map((f, i) => {
                                const Icon = f.icon;
                                return (
                                    <li key={i} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gym-red/10 border border-gym-red/20 flex items-center justify-center">
                                            <Icon className="w-5 h-5 text-gym-red" />
                                        </div>
                                        <div>
                                            <p className="text-white font-semibold">{f.title}</p>
                                            <p className="text-gray-400 text-sm mt-0.5">{f.desc}</p>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                        <a href="#membership" className="inline-block mt-10 px-8 py-3 btn-primary">
                            View Membership Plans
                        </a>
                    </div>

                    {/* Right – image mosaic */}
                    <div className="reveal-right grid grid-cols-2 gap-4">
                        {images.map((img, i) => (
                            <div
                                key={i}
                                className={`overflow-hidden rounded-xl border border-white/5 hover:border-gym-red/40 transition-all duration-300 ${i % 2 !== 0 ? 'mt-6' : ''
                                    }`}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    loading="lazy"
                                    className="w-full h-44 object-cover hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
