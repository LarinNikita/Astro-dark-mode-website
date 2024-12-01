import { useRef } from 'react';

import { motion, useScroll, useTransform } from 'framer-motion';

import { Circle } from '../components/Circle';
import { Hexagon } from '../components/Hexagon';
import { CutCornerButton } from '../components/CutCornerButton';

export const CallToActionSection = () => {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [45, -45]);

    return (
        <section className="overflow-hidden py-60" ref={sectionRef}>
            <div className="container">
                <div className="relative">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Hexagon size={700} />
                    </div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Hexagon size={1100} duration={60} reverse />
                    </div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Circle
                            className="absolute -top-[400px] left-0"
                            animate
                        >
                            <motion.img
                                src="/assets/images/cuboid.png"
                                alt="Cuboid 3D Image"
                                className="size-[140px]"
                                style={{
                                    rotate,
                                }}
                            />
                        </Circle>
                    </div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <Circle
                            className="absolute -left-[600px] -top-[70px]"
                            animate
                        >
                            <motion.img
                                src="/assets/images/cylinder.png"
                                alt="Cylinder 3D Image"
                                className="size-[140px]"
                                style={{
                                    rotate,
                                }}
                            />
                        </Circle>
                    </div>
                    <h2 className="font-heading text-center text-4xl font-black md:text-5xl lg:text-6xl">
                        Ready to<span className="block">get started?</span>
                    </h2>
                    <p className="mx-auto mt-8 max-w-sm text-center text-xl text-zinc-400 lg:text-2xl">
                        Start building using blockchain technology, with
                        Blockforge.
                    </p>
                    <div className="mt-12 flex justify-center">
                        <CutCornerButton>Get Started</CutCornerButton>
                    </div>
                </div>
            </div>
        </section>
    );
};
