export default function Two() {

    function handleClick() {
        const two = document.getElementById('projectTwo');
        const back = document.getElementById('backlast');
        const backin = document.getElementById('backinit');
        backin?.classList.remove('translate-x-0')
        backin?.classList.add('translate-x-[100%]')
        back?.classList.remove('translate-x-0')
        back?.classList.add('translate-x-[100%]')
        two?.classList.remove('translate-x-0')
        two?.classList.add('translate-x-[100%]')
    }

    function handleOne() {
        handleClick();
        const one = document.getElementById('projectOne');
        one?.classList.remove('translate-x-[100%]')
        one?.classList.add('translate-x-0')
    }

    function handleThree() {
        handleClick();
        const three = document.getElementById('projectThree');
        three?.classList.remove('translate-x-[100%]')
        three?.classList.add('translate-x-0')
    }

    return (
        <div className="relative w-screen h-screen bg-[#d4cca0] overflow-y-scroll scroll-smooth no-scrollbar">
            <button type="button" onClick={handleClick} className='absolute lg:top-10 lg:left-10 top-7 left-8 lg:w-14 lg:h-14 w-7 hover:scale-125 transition-all duration-75'><svg className='fill-[#583928]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></button>
            <div className="p-5">
                <div className="w-full lg:h-96 h-full rounded-3xl overflow-hidden">
                    <img className="object-cover" src="./assets/images/image2.webp" alt="" />
                </div>
            </div>
            <div className="dotted-grid">
                <div className="flex md:justify-start justify-center  font-Aeonik font-extrabold text-[#583928] md:text-[120px] text-[50px] lg:text-start text-center md:pl-5 leading-none">
                    <h1>SIK-LIGTAS</h1>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 pt-5">
                    <div className="grid md:pr-5 pr-0">
                        <p className="font-Aeonik text-[#583928] md:text-xl text-base pl-5 md:pr-0 pr-5 lg:pb-10 md:text-start text-center leading-none h-full align-top">A collision-based device with automated emergency distress call application for cyclists. A personal project during my sophomore year at Bulacan State University.</p>
                        <div className='flex font-DMSans text-base gap-2 pl-5 animate-bounce h-fit self-end md:visible invisible'>
                            <span><svg className="w-3 fill-[#583928]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg></span>
                            <p>SCROLL DOWN</p>
                        </div>
                    </div>
                    <p className="font-Aeonik text-[#583928] md:text-xl text-base pr-5 md:pl-0 pl-5 lg:pb-0 pb-5 md:border-l-2 border-[#583928] border-opacity-40 leading-none md:text-end text-center">Developed using Android Studio with Java for the Mobile app and C++ for the device programming.</p>
                </div>
                <div className="grid w-full h-full pl-5 lg:pt-10 pr-5">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 h-fit">
                        <div className="h-fit">
                            <div className="rounded-3xl overflow-hidden w-full">
                                <img className="object-cover" src="/assets/images/draft.webp" alt="" />
                            </div>
                        </div>
                        <div className="rounded-2xl border-2 border-[#583928] w-full h-full font-DMSans lg:text-3xl text-base p-5 lg:text-end text-center text-[#583928] font-bold">
                            <p>An attachable collision-detection device that is designed to identify potential collisions and link with the user&apos;s mobile device. Upon detection, the device promptly transmits the precise GPS coordinates of the incident through GSM Messaging and automatically initiates a distress call to the user&apos;s pre-registered emergency contacts, as well as to nearby emergency services.</p>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-4 grid-cols-1 w-screen h-full pt-5 pl-5 pr-5 gap-5 pb-5">
                    <div className="w-full h-full rounded-3xl overflow-hidden">
                        <img className="object-cover w-full h-80" src="/assets/images/concept1.webp" alt="" />
                    </div>
                    <div className="w-full h-full rounded-3xl overflow-hidden">
                        <img className="object-cover w-full h-80" src="/assets/images/concept2.webp" alt="" />
                    </div>
                    <div className="w-full h-full rounded-3xl overflow-hidden">
                        <img className="object-cover w-full h-80" src="/assets/images/concept3.webp" alt="" />
                    </div>
                    <div className="w-full h-full rounded-3xl overflow-hidden">
                        <img className="object-cover w-full h-80" src="/assets/images/concept4.webp" alt="" />
                    </div>
                </div>
                <div className="flex justify-between h-14 pl-5 pr-5 font-Aeonik md:text-base text-xs">
                    <div className="pl-2 pr-2 pt-1 pb-1 rounded-full border-2 border-[#141414] bg-[#d4cca0] w-fit h-fit hover:scale-110 transition-all duration-300" onClick={handleOne}><p>Previous: AK-EYE</p></div>
                    <div className="pl-2 pr-2 pt-1 pb-1 rounded-full border-2 border-[#141414] bg-[#d4cca0] w-fit h-fit hover:scale-110 transition-all duration-300" onClick={handleThree}><p>Next: THE WEDDING PLATTER</p></div>
                </div>
            </div>

        </div>
    )
}