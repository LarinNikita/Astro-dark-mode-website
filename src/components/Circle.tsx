import type { ComponentPropsWithRef } from 'react';

import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const Circle = (
    props: ComponentPropsWithRef<'div'> & { animate?: boolean },
) => {
    const { className, children, animate = false } = props;

    return (
        <div
            className={twMerge(
                'relative inline-flex size-[240px] items-center justify-center rounded-full bg-zinc-900',
                className,
            )}
        >
            <motion.div
                className={twMerge(
                    'absolute inset-0 rounded-full outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10',
                    animate &&
                        'border-[6px] border-transparent border-t-fuchsia-500/30',
                )}
                animate={
                    animate && {
                        rotate: 360,
                    }
                }
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />
            {children}
        </div>
    );
};
