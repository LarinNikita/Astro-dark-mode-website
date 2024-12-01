import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const feedbacks = [
    {
        text: 'The user experience is phenomenal, and the support team is always there to help. Highly recommended!',
        name: 'Erica Wyatt',
        description: 'Product Manager — BlockLink',
        avatarImage: '/assets/images/avatar-erica-wyatt.jpg',
    },
    {
        text: "Our productivity has Skyrocketed since we started using Blockforge. It's a game-changer for our team.",
        name: 'Noel Baldwin',
        description: 'Lead Developer — BitBridge',
        avatarImage: '/assets/images/avatar-noel-baldwin.jpg',
    },
    {
        text: 'The integration process was seamless, and the performance improvements are beyond our expectations.',
        name: 'Harry Bender',
        description: 'CTO — CryptoSolutions',
        avatarImage: '/assets/images/avatar-harry-bender.jpg',
    },
];

export const FeedbackSection = () => {
    return (
        <section className="bg-zinc-800 py-32">
            <div className="container">
                <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-12">
                    {feedbacks.map((feedback, index) => (
                        <motion.blockquote
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 24,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}
                            transition={{
                                delay: index * 0.5,
                                ease: 'easeInOut',
                                duration: 1,
                            }}
                            className={twMerge(
                                index === 2 && 'md:hidden lg:block',
                            )}
                        >
                            <p className="font-heading text-3xl font-black lg:text-4xl">
                                &ldquo;{feedback.text}&rdquo;
                            </p>
                            <cite className="mt-8 block">
                                <div className="flex items-center gap-3">
                                    <div>
                                        <div
                                            className="size-16 rounded-full bg-zinc-700 bg-cover"
                                            style={{
                                                backgroundImage: `url(${feedback.avatarImage})`,
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <div className="text-lg font-black not-italic">
                                            {feedback.name}
                                        </div>
                                        <div className="not-italic text-zinc-400">
                                            {feedback.description}
                                        </div>
                                    </div>
                                </div>
                            </cite>
                        </motion.blockquote>
                    ))}
                </div>
            </div>
        </section>
    );
};
