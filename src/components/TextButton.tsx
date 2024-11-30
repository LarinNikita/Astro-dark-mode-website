import type { ComponentPropsWithRef } from 'react';

import { twMerge } from 'tailwind-merge';

export const TextButton = (
    props: ComponentPropsWithRef<'button'> & { color?: string },
) => {
    const { color, className, children } = props;

    return (
        <button
            className={twMerge(
                'font-heading text-sm font-extrabold uppercase tracking-wide text-fuchsia-500',
                color === 'lime' && 'text-lime-500',
                color === 'cyan' && 'text-cyan-500',
                color === 'violet' && 'text-violet-500',
                className,
            )}
        >
            {children}
        </button>
    );
};
