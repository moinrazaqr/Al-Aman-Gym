import React from 'react';
import {
    HeartIcon,
    WrenchScrewdriverIcon,
    SparklesIcon,
    LockClosedIcon,
    UserGroupIcon,
    CubeIcon,
    ClockIcon,
    ShieldCheckIcon,
} from '@heroicons/react/24/outline';

const facilities = [
    {
        icon: HeartIcon,
        name: 'Cardio Zone',
        desc: 'Treadmills, ellipticals, stationary bikes, and rowing machines.',
    },
    {
        icon: WrenchScrewdriverIcon,
        name: 'Weight Machines',
        desc: 'Full range of cable, lever, and plate-loaded resistance machines.',
    },
    {
        icon: CubeIcon,
        name: 'Free Weights Area',
        desc: 'Extensive dumbbell rack from 2.5 kg to 60 kg, barbells, and benches.',
    },
    {
        icon: SparklesIcon,
        name: 'Bodybuilding Floor',
        desc: 'Dedicated platform for powerlifting, squats, and Olympic lifts.',
    },
    {
        icon: UserGroupIcon,
        name: 'Ladies Section',
        desc: 'Fully private and air-conditioned section with dedicated equipment.',
    },
    {
        icon: LockClosedIcon,
        name: 'Locker Rooms',
        desc: 'Clean, secure lockers with changing areas and shower facilities.',
    },
    {
        icon: ClockIcon,
        name: '24/7 Access',
        desc: 'No time restrictions — train whenever you want, day or night.',
    },
    {
        icon: ShieldCheckIcon,
        name: 'Safety & Hygiene',
        desc: 'Equipment sanitized regularly. Safe and welcoming environment.',
    },
];

const Facilities = () => (
    <section id="facilities" className="py-24 bg-gym-gray relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gym-red/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-14 reveal">
                <h2 className="section-title">Gym Facilities</h2>
                <div className="section-divider mx-auto mb-4" />
                <p className="text-gray-400">Everything you need under one roof</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {facilities.map((facility, i) => {
                    const Icon = facility.icon;
                    return (
                        <div
                            key={i}
                            className={`card-dark p-6 group cursor-default reveal delay-${((i % 4) + 1) * 100}`}
                        >
                            <div className="w-12 h-12 rounded-xl bg-gym-red/10 border border-gym-red/20 flex items-center justify-center mb-4 group-hover:bg-gym-red/20 group-hover:border-gym-red/40 transition-all duration-300">
                                <Icon className="w-6 h-6 text-gym-red" />
                            </div>
                            <h3 className="text-white font-semibold text-lg mb-2">{facility.name}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{facility.desc}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
);

export default Facilities;
