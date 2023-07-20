import { motion as m, useScroll } from 'framer-motion'

export default function Projects() {

    function handleOne() {
        const one = document.getElementById('projectOne');
        const back = document.getElementById('backlast');
        const backin = document.getElementById('backinit');
        backin?.classList.remove('bg-[#d4cca0]')
        backin?.classList.add('bg-white')
        backin?.classList.remove('translate-x-[100%]')
        backin?.classList.add('translate-x-0')
        back?.classList.remove('translate-x-[100%]')
        back?.classList.add('translate-x-0')
        one?.classList.add('translate-x-0')
        one?.classList.remove('translate-x-[100%]')
    }

    function handleTwo() {
        const two = document.getElementById('projectTwo');
        const back = document.getElementById('backlast');
        const backin = document.getElementById('backinit');
        backin?.classList.remove('bg-white')
        backin?.classList.add('bg-[#d4cca0]')
        backin?.classList.remove('translate-x-[100%]')
        backin?.classList.add('translate-x-0')
        back?.classList.remove('translate-x-[100%]')
        back?.classList.add('translate-x-0')
        two?.classList.remove('translate-x-[100%]')
        two?.classList.add('translate-x-0')
    }

    function handleThree() {
        const three = document.getElementById('projectThree');
        const back = document.getElementById('backlast');
        const backin = document.getElementById('backinit');
        backin?.classList.remove('bg-white')
        backin?.classList.add('bg-[#d4cca0]')
        backin?.classList.remove('translate-x-[100%]')
        backin?.classList.add('translate-x-0')
        back?.classList.remove('translate-x-[100%]')
        back?.classList.add('translate-x-0')
        three?.classList.remove('translate-x-[100%]')
        three?.classList.add('translate-x-0')
    }

    function handleFour() {
        const four = document.getElementById('projectFour');
        const back = document.getElementById('backlast');
        const backin = document.getElementById('backinit');
        backin?.classList.remove('bg-white')
        backin?.classList.add('bg-[#d4cca0]')
        backin?.classList.remove('translate-x-[100%]')
        backin?.classList.add('translate-x-0')
        back?.classList.remove('translate-x-[100%]')
        back?.classList.add('translate-x-0')
        four?.classList.remove('translate-x-[100%]')
        four?.classList.add('translate-x-0')
    }

    return (
        <div className='px-5'>
            <h1 className='sm:text-[50px] text-[30px] font-Aeonik font-extrabold text-end text-[#583928] pr-5'>Featured Work <sup className="font-features sups text-3xl">(4)</sup></h1>
            <div className='grid content-center w-full h-36 border-t-2 border-opacity-20 border-[#583928] font-DMSans px-5 leading-none'>
                <div className='lg:hover:translate-x-10 transition-all cursor-pointer' onClick={handleOne}>
                    <h1 className='lg:text-[70px] md:text-[50px] text-[30px]  text-[#583928]'>AK-EYE (1)</h1>
                    <p className='sm:text-base text-sm'>Machine Learning, Tensorflow Custom Dataset Training, Custom-Trained Model Evaluation</p>
                </div>
            </div>
            <div className='grid content-center w-full h-36 border-t-2 border-opacity-20 border-[#583928] font-DMSans px-5 leading-none'>
                <div className='lg:hover:translate-x-10 transition-all cursor-pointer' onClick={handleTwo}>
                    <h1 className='lg:text-[70px] md:text-[50px] text-[30px] text-[#583928]'>SIK-LIGTAS (2)</h1>
                    <p className='sm:text-base text-sm'>Android App Development, Java, Firebase Authentication</p>
                </div>
            </div>
            <div className='grid content-center w-full h-36 border-t-2 border-opacity-20 border-[#583928] font-DMSans px-5 leading-none'>
                <div className='lg:hover:translate-x-10 transition-all cursor-pointer' onClick={handleThree}>
                    <h1 className='lg:text-[70px] md:text-[50px] text-[30px] text-[#583928]'>THE WEDDING PLATTER (3)</h1>
                    <p className='sm:text-base text-sm'>UX Research, UX Design, Wireframing, Prototyping, Usability Testing</p>
                </div>
            </div>
            <div className='grid content-center w-full h-36 border-t-2 border-opacity-20 border-[#583928] font-DMSans px-5 leading-none'>
                <div className='lg:hover:translate-x-10 transition-all cursor-pointer' onClick={handleFour}>
                    <h1 className='lg:text-[70px] md:text-[50px] text-[30px] text-[#583928]'>KG DESIGN STUDIO (4)</h1>
                    <p className='sm:text-base text-sm'>HTML5/CSS3, Typescript, Vue.js, Tailwind CSS, Framer Motion</p>
                </div>
            </div>
        </div>
    )
}