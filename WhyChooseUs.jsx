import React from 'react';
import {
    CurrencyDollarIcon,
    ClockIcon,
    MapPinIcon,
    UsersIcon,
    WrenchIcon,
    ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const benefits = [
    {
        icon: CurrencyDollarIcon,
        title: 'Affordable Prices',
        desc: 'Membership plans starting from just 200 QAR/month — premium quality without the premium price tag.',
        stat: '200 QAR',
        statLabel: 'Starting from',
    },
    {
        icon: ClockIcon,
        title: 'Open 24 Hours',
        desc: 'We never close. Train at 6 AM, 6 PM, or midnight — we\'re always here for you.',
        stat: '24/7',
        statLabel: 'Always open',
    },
    {
        icon: MapPinIcon,
        title: 'Central Doha Location',
        desc: 'Conveniently located in the heart of Doha, easy to reach from any district.',
        stat: 'Doha',
        statLabel: 'Qatar',
    },
    {
        icon: UsersIcon,
        title: 'Expert Trainers',
        desc: 'Our certified trainers are always on the floor to guide, motivate, and push you to grow.',
        stat: '5+',
        statLabel: 'Trainers',
    },
    {
        icon: WrenchIcon,
        title: 'Modern Equipment',
        desc: 'From Olympic platforms to cable machines — the full toolkit for any fitness goal.',
        stat: '100+',
        statLabel: 'Machines',
    },
    {
        icon: ShieldCheckIcon,
        title: 'Clean & Safe',
        desc: 'A sanitized, safe environment inspected daily to keep you comfortable and healthy.',
        stat: '100%',
        statLabel: 'Commitment',
    },
];

const WhyChooseUs = () => (
    <section id="why-choose-us" className="py-24 bg-gym-black relative overflow-hidden">
        {/* Decorative diagonal stripe */}
        <div
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #e31b23 0px, #e31b23 1px, transparent 0px, transparent 50%)',
                backgroundSize: '24px 24px',
            }}
        />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gym-red/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-14 reveal">
                <h2 className="section-title">Why Choose Us</h2>
                <div className="section-divider mx-auto mb-4" />
                <p className="text-gray-400 max-w-xl mx-auto">
                    Al Aman Gym is built around one mission — to give you the best fitness experience in Doha at a price that works for you.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, i) => {
                    const Icon = benefit.icon;
                    return (
                        <div
                            key={i}
                            className={`card-dark p-7 group reveal delay-${((i % 3) + 1) * 100}`}
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gym-red/10 border border-gym-red/20 flex items-center justify-center group-hover:bg-gym-red group-hover:border-gym-red transition-all duration-300">
                                    <Icon className="w-6 h-6 text-gym-red group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <div className="font-bebas text-3xl text-gym-red tracking-wide leading-none">
                                        {benefit.stat}
                                    </div>
                                    <div className="text-gray-500 text-xs uppercase tracking-wider">
                                        {benefit.statLabel}
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-white font-semibold text-lg mb-2">{benefit.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{benefit.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);

export default WhyChooseUs;
