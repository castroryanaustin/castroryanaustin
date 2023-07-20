import Link from 'next/link'
import { Dispatch, SetStateAction } from 'react';

export default function Dropdown({...props}) { 
    function handleClick() {
        const drop = document.getElementById('dropDown');
        const droptab = document.getElementById('dropDownTab');
        drop?.classList.remove('translate-y-0')
        drop?.classList.add('translate-y-[-120dvh]')
        droptab?.classList.remove('translate-y-0')
        droptab?.classList.add('translate-y-[-120dvh]') 
    }

    function handleAbout() {
        handleClick();
        const about = document.getElementById('aboutPage');
        about?.classList.remove('translate-y-[120dvh]')
        about?.classList.add('translate-y-0')
    }

    function handleContact() {
        handleClick();
        const contact = document.getElementById('contactPage');
        contact?.classList.remove('translate-y-[120dvh]')
        contact?.classList.add('translate-y-0')
    }

    return (
        <div className="relative grid grid-cols-1 bg-[#583928] text-[#d4cca0] font-Aeonik font-extrabold w-screen lg:h-[24rem] h-[21rem] shadow-2xl">
            <p className='absolute -rotate-90 font-DMSans font-normal text-xl top-[3rem] -left-5 leading-none select-none'>「 Menu 」</p>
            <button type="button" onClick={handleClick} className='absolute ml-6 bottom-6 w-14 h-14 hover:scale-125 transition-all duration-75'><svg className='fill-[#d4cca0]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></button>
            <div className="flex justify-end w-full lg:pt-20 pt-5 lg:pr-16 pr-5 text-[3rem] leading-none ">
                    <ul>
                        <li className="text-end hover:text-white hover:-translate-x-5 transition-all duration-150 ease-in-out cursor-pointer" onClick={handleClick}><Link href="#" scroll={false}>home</Link></li>
                        <li className="text-end hover:text-white hover:-translate-x-5 transition-all duration-150 ease-in-out cursor-pointer" onClick={handleClick}><Link href="/#workPage" scroll={false}>work</Link></li>
                        <li className="text-end hover:text-white hover:-translate-x-5 transition-all duration-150 ease-in-out cursor-pointer" onClick={handleAbout}>about</li>
                        <li className="text-end hover:text-white hover:-translate-x-5 transition-all duration-150 ease-in-out cursor-pointer" onClick={handleContact}>contact</li>
                    </ul>
            </div>
        </div>
    )
}