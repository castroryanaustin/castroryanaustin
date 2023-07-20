import { motion as m } from 'framer-motion'

export default function Banner() {
    return (
        <div className="dotted-grid grid place-content-center h-full pt-32 pb-32 w-screen">
            <div className="text-left text-[#583928] font-Aeonik xl:text-[150px] text-[60px] uppercase leading-none w-fit px-5">
                <div>
                    <div className='font-extrabold md:block hidden select-none'>
                        <m.div
                            initial="hidden" whileInView="visible" variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 100
                                },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: .2
                                    }
                                }
                            }}
                        >
                            <h1>Digital Designer</h1>
                        </m.div>
                        <m.div
                            initial="hidden" whileInView="visible" variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 100
                                },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: .3
                                    }
                                }
                            }}
                            className="grid grid-cols-1 md:gap-2">
                            <h1>Residing in Baliuag,</h1>
                        </m.div>
                        <m.div
                            initial="hidden" whileInView="visible" variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 100
                                },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: .4
                                    }
                                }
                            }}>
                            <h1>Bul, PH</h1>
                        </m.div>
                    </div>
                    <div className='font-extrabold md:hidden block select-none'>
                        <m.div
                            initial="hidden" whileInView="visible" variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 100
                                },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: .2
                                    }
                                }
                            }}
                        >
                            <h1>Digital</h1>
                        </m.div>
                        <m.div
                            initial="hidden" whileInView="visible" variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 100
                                },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: .3
                                    }
                                }
                            }}
                        >
                            <h1>Designer</h1>
                        </m.div>
                        <m.div
                            initial="hidden" whileInView="visible" variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 100
                                },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: .4
                                    }
                                }
                            }}
                        >
                            <h1>Residing</h1>
                        </m.div>
                        <m.div
                            initial="hidden" whileInView="visible" variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 100
                                },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: .5
                                    }
                                }
                            }}
                            className="grid grid-cols-1 md:gap-2">
                            <h1>in,</h1>
                        </m.div>
                        <m.div
                            initial="hidden" whileInView="visible" variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 100
                                },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: .6
                                    }
                                }
                            }}
                            className="grid grid-cols-1 md:gap-2">
                            <h1>Baliuag,</h1>
                        </m.div>
                        <m.div
                            initial="hidden" whileInView="visible" variants={{
                                hidden: {
                                    opacity: 0,
                                    y: 100
                                },
                                visible: {
                                    y: 0,
                                    opacity: 1,
                                    transition: {
                                        delay: .7
                                    }
                                }
                            }}>
                            <h1>Bul, PH</h1>
                        </m.div>
                    </div>
                    <div className="grid place-content-end align-bottom font-DMSans text-sm text-end pt-5 sm:pt-0">
                        <div>Web Developer</div>
                        <div>Web Portfolio</div>
                        <div>est. 2023</div>
                    </div>
                    <div className='flex font-DMSans text-xs animate-bounce gap-2 pl-1'>
                        <span><svg className="w-[0.5rem] fill-[#583928]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg></span>
                        <p>SCROLL DOWN</p>
                    </div>
                </div>
            </div>
        </div>
    )
}