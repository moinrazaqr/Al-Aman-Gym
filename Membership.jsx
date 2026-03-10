import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
import { FaWhatsapp } from 'react-icons/fa';
import { StarIcon } from '@heroicons/react/24/solid';

const plans = [
    {
        name: 'Monthly',
        price: '200',
        duration: 'per month',
        popular: false,
        features: ['Full gym access', 'Cardio machines', 'Weight training', 'Locker access', 'Trainer guidance'],
    },
    {
        name: '2 Months',
        price: '350',
        duration: 'per 2 months',
        popular: false,
        save: 'Save 50 QAR',
        features: ['Full gym access', 'Cardio machines', 'Weight training', 'Locker access', 'Trainer guidance'],
    },
    {
        name: '3 Months',
        price: '500',
        duration: 'per 3 months',
        popular: true,
        save: 'Save 100 QAR',
        features: ['Full gym access', 'Cardio machines', 'Weight training', 'Locker access', 'Trainer guidance'],
    },
    {
        name: '6 Months',
        price: '800',
        duration: 'per 6 months',
        popular: false,
        save: 'Save 400 QAR',
        features: ['Full gym access', 'Cardio machines', 'Weight training', 'Locker access', 'Trainer guidance'],
    },
    {
        name: '1 Year',
        price: '1500',
        duration: 'per year',
        popular: false,
        save: 'Save 900 QAR',
        features: ['Full gym access', 'Cardio machines', 'Weight training', 'Locker access', 'Trainer guidance'],
    },
];

const waMessage = (plan) =>
    encodeURIComponent(`Hello! I'm interested in the ${plan.name} membership (${plan.price} QAR). Please tell me more.`);

const Membership = () => (
    <section id="membership" className="py-24 bg-gym-black relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-gym-red/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            {/* Heading */}
            <div className="text-center mb-14 reveal">
                <h2 className="section-title">Membership Plans</h2>
                <div className="section-divider mx-auto mb-4" />
                <p className="text-gray-400">Choose the plan that fits your fitness journey</p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                {plans.map((plan, i) => (
                    <div
                        key={i}
                        className={`relative rounded-2xl p-6 flex flex-col transition-all duration-300 reveal delay-${(i + 1) * 100} ${plan.popular
                                ? 'bg-gradient-to-b from-gym-red/20 to-gym-gray border-2 border-gym-red shadow-red-md scale-105 z-10'
                                : 'bg-gym-gray border border-white/5 hover:border-gym-red/40 hover:-translate-y-1 hover:shadow-red-sm'
                            }`}
                    >
                        {/* Popular badge */}
                        {plan.popular && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-gym-red text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-red-sm whitespace-nowrap">
                                <StarIcon className="w-3 h-3" />
                                MOST POPULAR
                            </div>
                        )}

                        {/* Save badge */}
                        {plan.save && (
                            <div className={`absolute top-4 right-4 text-xs font-semibold px-2 py-1 rounded-full ${plan.popular ? 'bg-white text-gym-red' : 'bg-gym-red/20 text-gym-red'}`}>
                                {plan.save}
                            </div>
                        )}

                        <h3 className="text-xl font-bold text-white mb-1 mt-2">{plan.name}</h3>
                        <div className="mb-5">
                            <span className={`text-3xl font-bebas tracking-wide ${plan.popular ? 'text-gym-red' : 'text-white'}`}>
                                {plan.price}
                            </span>
                            <span className="text-gym-red font-semibold"> QAR</span>
                            <div className="text-gray-500 text-xs mt-0.5">{plan.duration}</div>
                        </div>

                        <ul className="space-y-2.5 mb-6 flex-grow">
                            {plan.features.map((f, fi) => (
                                <li key={fi} className="flex items-center gap-2 text-sm text-gray-300">
                                    <CheckIcon className="w-4 h-4 text-gym-red flex-shrink-0" />
                                    {f}
                                </li>
                            ))}
                        </ul>

                        <a
                            href={`https://wa.me/+97430864663?text=${waMessage(plan)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center justify-center gap-2 w-full py-2.5 rounded-lg font-semibold text-sm transition-all duration-300 ${plan.popular
                                    ? 'bg-gym-red text-white hover:bg-gym-red-dark shadow-red-sm'
                                    : 'bg-white/5 border border-white/10 text-white hover:bg-gym-red hover:border-gym-red'
                                }`}
                        >
                            <FaWhatsapp className="w-4 h-4" />
                            Get This Plan
                        </a>
                    </div>
                ))}
            </div>

            {/* Bottom note */}
            <p className="text-center text-gray-500 text-sm mt-10 reveal">
                All memberships include full gym access, locker facilities, and support from our trainers.
            </p>
        </div>
    </section>
);

export default Membership;
