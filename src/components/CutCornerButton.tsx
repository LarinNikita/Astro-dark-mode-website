import type { ComponentPropsWithRef } from 'react';

import { twMerge } from 'tailwind-merge';

export const CutCornerButton = (props: ComponentPropsWithRef<'button'>) => {
    const { className, children } = props;

    return (
        <button
            className={twMerge(
                'font-heading relative bg-fuchsia-500/20 px-4 py-2 text-sm font-extrabold uppercase tracking-wide',
                className,
            )}
        >
            <div className="absolute inset-0 outline outline-2 -outline-offset-2 outline-fuchsia-500 [mask-image:linear-gradient(225deg,transparent,transparent_10px,black_10px)]" />
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute right-0 top-0 text-fuchsia-500"
            >
                <path
                    d="M0 1H12.2667L23 11.7333V24"
                    stroke="currentColor"
                    stroke-width="2"
                />
            </svg>
            <span className="leading-6">{children}</span>
        </button>
    );
};