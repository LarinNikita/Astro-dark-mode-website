import type { ComponentPropsWithRef } from 'react';

import { twMerge } from 'tailwind-merge';

export const Tag = (
    props: ComponentPropsWithRef<'div'> & { color?: string },
) => {
    const { children, className, color } = props;

    return (
        <div
            className={twMerge(
                'font-heading inline-flex rounded-full bg-fuchsia-500/15 p-1.5 px-3 text-xs font-extrabold uppercase tracking-wide text-fuchsia-500',
                color === 'lime' && 'bg-lime-500/15 text-lime-500',
                color === 'cyan' && 'bg-cyan-500/15 text-cyan-500',
                color === 'violet' && 'bg-violet-500/15 text-violet-500',
                className,
            )}
        >
            {children}
        </div>
    );
};
