export const HeaderSection = () => {
    return (
        <header className="sticky top-0 bg-zinc-900/50 backdrop-blur-lg">
            <div className="container">
                <div className="flex h-24 items-center justify-between md:h-28">
                    <div>
                        <img
                            src="/assets/images/logo.svg"
                            alt="Blockforge Logo"
                        />
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="font-heading relative hidden bg-fuchsia-500/20 px-4 py-2 text-sm font-extrabold uppercase tracking-wide md:block">
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
                            <span className="leading-6">Get Started</span>
                        </button>
                        <div className="relative size-10">
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="h-0.5 w-5 -translate-y-1 bg-zinc-300" />
                            </div>
                            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="h-0.5 w-5 translate-y-1 bg-zinc-300" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
