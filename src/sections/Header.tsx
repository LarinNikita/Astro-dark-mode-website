import { useEffect, useState } from 'react';

import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion } from 'framer-motion';

import { Hexagon } from '../components/Hexagon';
import { CutCornerButton } from '../components/CutCornerButton';

const navLinks = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Careers', href: '/careers' },
    { title: 'Contact', href: '/contact' },
];

export const HeaderSection = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <>
            <header className="sticky top-0 z-40 bg-zinc-900/50 backdrop-blur-lg">
                <div className="container">
                    <div className="flex h-24 items-center justify-between md:h-28">
                        <div>
                            <img
                                src="/assets/images/logo.svg"
                                alt="Blockforge Logo"
                            />
                        </div>
                        <div className="flex items-center gap-4">
                            <CutCornerButton className="hidden md:inline-flex">
                                Get Started
                            </CutCornerButton>
                            <div
                                className="relative size-10 cursor-pointer"
                                onClick={() => setIsOpen(curr => !curr)}
                            >
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div
                                        className={twMerge(
                                            'h-0.5 w-5 -translate-y-1 bg-zinc-300 transition-all duration-500',
                                            isOpen && 'translate-y-0 rotate-45',
                                        )}
                                    />
                                </div>
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                    <div
                                        className={twMerge(
                                            'h-0.5 w-5 translate-y-1 bg-zinc-300 transition-all duration-500',
                                            isOpen &&
                                                'translate-y-0 -rotate-45',
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed left-0 top-0 z-30 size-full bg-zinc-900"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="absolute inset-2 z-0 mt-24 rounded-md bg-zinc-800 md:mt-28">
                            <div className="absolute left-full top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
                                <Hexagon size={700} />
                            </div>
                            <div className="absolute left-full top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2">
                                <Hexagon size={1100} />
                            </div>
                            <div className="flex h-full items-center justify-center">
                                <nav className="flex flex-col items-center gap-12 md:gap-16">
                                    {navLinks.map(({ title, href }, index) => (
                                        <motion.a
                                            key={index}
                                            href={href}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{
                                                duration: 0.5,
                                                ease: 'linear',
                                                delay: 0.25 * index,
                                            }}
                                        >
                                            <span className="font-heading text-4xl font-black text-zinc-500 transition duration-300 hover:text-zinc-300 md:text-5xl lg:text-6xl">
                                                {title}
                                            </span>
                                        </motion.a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
