export default function One() {

    function handleClick() {
        const one = document.getElementById('projectOne');
        const back = document.getElementById('backlast');
        const backin = document.getElementById('backinit');
        backin?.classList.remove('translate-x-0')
        backin?.classList.add('translate-x-[100%]')
        back?.classList.remove('translate-x-0')
        back?.classList.add('translate-x-[100%]')
        one?.classList.remove('translate-x-0')
        one?.classList.add('translate-x-[100%]')
    }

    function handleTwo() {
        handleClick();
        const two = document.getElementById('projectTwo');
        two?.classList.remove('translate-x-[100%]')
        two?.classList.add('translate-x-0')
    }

    return (
        <div className="relative w-screen h-screen bg-white overflow-y-scroll scroll-smooth no-scrollbar">
            <button type="button" onClick={handleClick} className='absolute top-10 left-10 lg:w-14 lg:h-14 w-7 hover:scale-125 transition-all duration-75'><svg className='fill-[#ffffff]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></button>
            <div className="p-5">
                <div className="w-full lg:h-96 h-full  rounded-3xl overflow-hidden">
                    <img className="object-cover" src="./assets/images/image1.webp" alt="" />
                </div>
            </div>
            <div className="dotted-grid-w">
                <div className="flex md:justify-start justify-center  font-Aeonik font-extrabold text-[#141414] md:text-[120px] text-[60px] lg:text-start text-center md:pl-5 leading-none">
                    <h1>AK-EYE</h1>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 pt-5">
                    <div className="grid md:pr-5 pr-0">
                        <p className="font-Aeonik text-[#141414] md:text-xl text-base pl-5 md:pr-0 pr-5 md:text-start text-center leading-none h-full align-top">A wearable collision warning device utilizing an omnidirectional haptic response for the visually impaired.</p>
                        <div className='flex font-DMSans text-base gap-2 pl-5 animate-bounce h-fit self-end md:visible invisible'>
                            <span><svg className="w-3 fill-[#141414]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg></span>
                            <p>SCROLL DOWN</p>
                        </div>
                    </div>
                    <p className="font-Aeonik text-[#141414] md:text-xl text-base pr-5 md:pl-0 pl-5 md:border-l-2 leading-none md:text-end text-center">An undergraduate thesis from Bulacan State University utilized custom-trained datasets through TensorFlow Lite. The device utilizes customized Region of Interests for object detection, enabling the identification of the hazard&apos;s direction. Subsequent to that, it transmits corresponding signals to the vibration motors, effectively alerting users about the incoming hazards in their path.</p>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 w-screen h-fit pt-10 pl-5 pr-5 gap-5 pb-5">
                    <div className="w-full h-full overflow-hidden rounded-3xl">
                        <img src="/assets/images/render.webp" alt="" />
                    </div>
                    <div className="w-full h-full  overflow-hidden rounded-3xl">
                        <img src="/assets/images/render2.webp" alt="" />
                    </div>
                </div>
                <div className="flex justify-between h-14 pl-5 pr-5 font-Aeonik md:text-base text-xs">
                    <div className="pl-2 pr-2 pt-1 pb-1 rounded-full border-2 border-[#141414] bg-white w-fit h-fit hover:scale-110 transition-all duration-300"><a href="/files/journal.pdf">Download Research Journal</a></div>
                    <div className="pl-2 pr-2 pt-1 pb-1 rounded-full border-2 border-[#141414] bg-white w-fit h-fit hover:scale-110 transition-all duration-300" onClick={handleTwo}><p>Next: SIK-LIGTAS</p></div>
                </div>
            </div>

        </div>
    )
}