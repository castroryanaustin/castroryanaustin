import Link from 'next/link' 
import React from 'react';

export default function Navbar() { 

  function handleClick() {
    const drop = document.getElementById('dropDown');
    const droptab = document.getElementById('dropDownTab');
    const contact = document.getElementById('contactPage');
    drop?.classList.remove('translate-y-[-120dvh]')
    drop?.classList.add('translate-y-0')
    droptab?.classList.remove('translate-y-[-120dvh]')
    droptab?.classList.add('translate-y-0')
    contact?.classList.remove('translate-y-0')
    contact?.classList.add('translate-y-[120dvh]')  
  }

  return (
    <nav className='top-0 z-10 bg-[#d4cca0] text-[#583928] py-4'>
      <div className='flex justify-between px-5 h-full'>
        <div className='flex gap-5 justify-start'>
          <p className='font-Aeonik text-lg'>Ryan Austin Castro</p>
        </div>
        <div className="grid place-content-center">
          <div className='border-[#583928] border-2 font-Poppins pt-1 pb-1 pl-3 pr-3 rounded-3xl cursor-pointer' onClick={handleClick}>
          <svg className="w-3 fill-[#583928]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" /></svg>
          </div>
        </div>
      </div>
    </nav>
  )
}