import { twMerge } from 'tailwind-merge';
import { TextButton } from '../components/TextButton';

const cardData = [
    {
        image: '/assets/images/pill.png',
        title: 'Revolutionary Blockchain API',
        description:
            'Effortlessly integrate and manage blockchain data with our cutting-edge API, designed for seamless connectivity.',
        color: 'fuchsia',
    },
    {
        image: '/assets/images/cuboid.png',
        title: 'Decentralized Data Solutions',
        description:
            'Empower your applications with decentralized data solutions, ensuring security and transparency at every step.',
        color: 'lime',
    },
    {
        image: '/assets/images/cone.png',
        title: 'Next—Gen Smart Contracts',
        description:
            'Unlock the potential of next—gen smart contracts with our robust and scalable API, tailored for modern blockchain needs.',
        color: 'cyan',
    },
    {
        image: '/assets/images/icosahedron.png',
        title: 'Seamless Blockchain Integration',
        description:
            'Integrate blockchain technology seamlessly into your projects, with minimal effort and maximum efficiency.',
        color: 'violet',
    },
];

export const FeaturesCardsSection = () => {
    return (
        <section className="overflow-x-clip py-24 md:-mt-28">
            <div className="container">
                <h2 className="font-heading text-center text-4xl font-black md:text-5xl lg:text-6xl">
                    Discover the future of blockchain with Blockforge.
                </h2>
                <div className="mt-36 flex lg:mt-48">
                    <div className="flex flex-none gap-8">
                        {cardData.map(
                            ({ image, title, description, color }) => (
                                <div
                                    key={title}
                                    className="group relative z-0 max-w-xs p-8 md:max-w-md md:p-10"
                                >
                                    <div
                                        className={twMerge(
                                            'absolute right-1.5 top-1.5 -z-10 size-16 rounded-xl bg-fuchsia-500 opacity-0 blur-lg transition duration-300 group-hover:opacity-100',
                                            color === 'lime' && 'bg-lime-500',
                                            color === 'cyan' && 'bg-cyan-500',
                                            color === 'violet' &&
                                                'bg-violet-500',
                                        )}
                                    />
                                    <div
                                        className={twMerge(
                                            'absolute right-1.5 top-1.5 -z-10 size-16 rounded-xl bg-fuchsia-500 transition duration-300 group-hover:bg-fuchsia-400',
                                            color === 'lime' &&
                                                'bg-lime-500 group-hover:bg-lime-400',
                                            color === 'cyan' &&
                                                'bg-cyan-500 group-hover:bg-cyan-400',
                                            color === 'violet' &&
                                                'bg-violet-500 group-hover:bg-violet-400',
                                        )}
                                    />
                                    <div className="absolute inset-0 -z-10 rounded-2xl bg-zinc-800 [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]" />
                                    <div className="-mt-28 flex justify-center">
                                        <div className="relative inline-flex">
                                            <div className="absolute top-[calc(100%+16px)] h-4 w-full rounded-[100%] bg-zinc-950/70 transition duration-300 [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-zinc-950/30" />
                                            <img
                                                src={image}
                                                alt="3D Image"
                                                className="size-40 transition duration-300 group-hover:-translate-y-6"
                                            />
                                        </div>
                                    </div>
                                    <h3 className="font-heading mt-12 text-3xl font-bold">
                                        {title}
                                    </h3>
                                    <p className="mt-4 text-lg text-zinc-400">
                                        {description}
                                    </p>
                                    <div className="mt-12 flex justify-between">
                                        <TextButton color={color}>
                                            Learn More
                                        </TextButton>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="size-8 -translate-x-2 text-zinc-500 transition duration-300 group-hover:translate-x-0 group-hover:text-zinc-300"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            ),
                        )}
                    </div>
                </div>
                <div className="mt-10 flex justify-center">
                    <div className="inline-flex gap-4 rounded-full bg-zinc-950 p-2.5">
                        {cardData.map(({ title }) => (
                            <div
                                key={title}
                                className="size-2.5 cursor-pointer rounded-full bg-zinc-500"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
