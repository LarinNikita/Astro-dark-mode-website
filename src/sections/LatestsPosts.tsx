import { useRef } from 'react';

import { useScroll, motion, useTransform } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

import type { CollectionEntry } from 'astro:content';

import { Tag } from '../components/Tag';
import { Card } from '../components/Card';
import { CutCornerButton } from '../components/CutCornerButton';

import { getPostColorFromCategory } from '../utils/postUtils';

export const LatestsPostsSection = (props: {
    data: CollectionEntry<'blog'>[];
}) => {
    const { data } = props;
    const targetRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'start center'],
    });

    const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64]);

    return (
        <section className="py-60">
            <div className="container">
                <div className="mx-auto max-w-3xl">
                    <h2 className="font-heading text-center text-4xl font-black md:text-5xl lg:text-6xl">
                        Your portal to everything blockchain.
                    </h2>
                    <p className="mt-8 text-center text-xl text-zinc-400 lg:text-2xl">
                        Keep up with the newest trends, updates, and insights in
                        the blockchain world, updated weekly.
                    </p>
                </div>
                <div className="mt-16 grid grid-cols-1 gap-8 md:mt-28 md:grid-cols-2">
                    <div className="flex flex-col gap-8">
                        {data.map(
                            (
                                { data: { title, description, category } },
                                postIndex,
                            ) => (
                                <Card
                                    key={postIndex}
                                    buttonText="Read More"
                                    color={getPostColorFromCategory(category)}
                                    className={twMerge(
                                        (postIndex === 1 || postIndex === 3) &&
                                            'md:hidden',
                                    )}
                                >
                                    <Tag
                                        color={getPostColorFromCategory(
                                            category,
                                        )}
                                    >
                                        {category}
                                    </Tag>
                                    <h3 className="font-heading mt-3 text-3xl font-black">
                                        {title}
                                    </h3>
                                    <p className="mt-6 text-lg text-zinc-400">
                                        {description}
                                    </p>
                                </Card>
                            ),
                        )}
                    </div>
                    <motion.div
                        className="mt-16 hidden flex-col gap-8 md:flex"
                        style={{
                            marginTop,
                        }}
                        ref={targetRef}
                    >
                        {data.map(
                            (
                                { data: { title, description, category } },
                                postIndex,
                            ) => (
                                <Card
                                    key={postIndex}
                                    buttonText="Read More"
                                    color={getPostColorFromCategory(category)}
                                    className={twMerge(
                                        (postIndex === 0 || postIndex === 2) &&
                                            'md:hidden',
                                    )}
                                >
                                    <Tag
                                        color={getPostColorFromCategory(
                                            category,
                                        )}
                                    >
                                        {category}
                                    </Tag>
                                    <h3 className="font-heading mt-3 text-3xl font-black">
                                        {title}
                                    </h3>
                                    <p className="mt-6 text-lg text-zinc-400">
                                        {description}
                                    </p>
                                </Card>
                            ),
                        )}
                    </motion.div>
                </div>
                <div className="mt-48 flex justify-center md:mt-32">
                    <CutCornerButton>Read the Blog</CutCornerButton>
                </div>
            </div>
        </section>
    );
};
