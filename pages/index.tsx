import Navbar from './components/navbar'
import Banner from './components/banner'
import Workboard from './components/workboard'
import About from './components/about'
import Dropdown from './components/dropdown'
import Contact from './components/contact'
import Projects from './components/projects'
import Marquee from './components/marquee'
import One from './components/projects/one'
import Two from './components/projects/two'
import Three from './components/projects/three'
import Four from './components/projects/four'
import Backdrop from './components/backdrop'
import { useEffect } from 'react'
import Toolkit from './components/toolkit'
import Backlast from './components/backlast'
import Backinit from './components/backinit'
import Head from 'next/head'

export default function Home() {

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const handleScroll = () => {
    const drop = document.getElementById('dropDown');
    const droptab = document.getElementById('dropDownTab');
    if (window.scrollY > 1) {
      drop?.classList.remove('translate-y-0')
      drop?.classList.add('translate-y-[-120dvh]')
      droptab?.classList.remove('translate-y-0')
      droptab?.classList.add('translate-y-[-120dvh]')
    }
  }

  return (
    <>
      <Head>
        <title>Ryan Austin Castro | Front-end Web Developer | UX/UI Designer</title>
        <meta name="title" content="Ryan Austin Castro | Front-end Web Developer | UX/UI Designer" />
        <meta name="description" content="A computer engineering
graduate from Bulacan State
University, equipped with a
strong foundation in computer
systems, software development,
web development, & UX Design." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://castroryanaustin.vercel.app/" />
        <meta property="og:title" content="Ryan Austin Castro | Front-end Web Developer | UX/UI Designer" />
        <meta property="og:description" content="A computer engineering
graduate from Bulacan State
University, equipped with a
strong foundation in computer
systems, software development,
web development, & UX Design." />
        <meta property="og:image" content="/assets/images/meta.webp" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://castroryanaustin.vercel.app/" />
        <meta property="twitter:title" content="Ryan Austin Castro | Front-end Web Developer | UX/UI Designer" />
        <meta property="twitter:description" content="A computer engineering
graduate from Bulacan State
University, equipped with a
strong foundation in computer
systems, software development,
web development, & UX Design." />
        <meta property="twitter:image" content="/assets/images/meta.webp" />
      </Head>
      <div className='w-full'>
        <div id="dropDownTab" className='box-grid bg-white top-0 fixed z-40 transition-all duration-1000 translate-y-[-120dvh] lg:h-[33rem] h-[24rem] w-screen' onScroll={handleScroll}>
          <Backdrop />
        </div>
        <div id="dropDown" className='top-0 fixed z-50 transition-all duration-700 translate-y-[-120dvh] opacity-100' onScroll={handleScroll}>
          <Dropdown />
        </div>
        <Navbar />
        <div id="homePage">
          <Banner />
        </div>
        <Workboard />
        <Toolkit />
        <Marquee />
        <div id='workPage'>
          <Projects />
        </div>
        <div id="aboutPage" className='top-0 fixed z-20 transition-all duration-700 translate-y-[120dvh] opacity-100'>
          <About />
        </div>
        <div id="contactPage" className='bottom-0 fixed z-20 transition-all duration-700 translate-y-[120dvh] opacity-100'>
          <Contact />
        </div>
        <div id="backinit" className='top-0 fixed z-30 transition-all duration-300 delay-75 translate-x-[100%] opacity-100 bg-[#d4cca0]'>
          <Backinit />
        </div>
        <div id="backlast" className='top-0 fixed z-20 transition-all duration-300 translate-x-[100%] opacity-100'>
          <Backlast />
        </div>
        <div id="projectOne" className='top-0 fixed z-40 transition-all duration-700 delay-150 translate-x-[100%] opacity-100'>
          <One />
        </div>
        <div id="projectTwo" className='top-0 fixed z-40 transition-all duration-700 delay-150 translate-x-[100%] opacity-100'>
          <Two />
        </div>
        <div id="projectThree" className='top-0 fixed z-40 transition-all duration-700 delay-150 translate-x-[100%] opacity-100'>
          <Three />
        </div>
        <div id="projectFour" className='top-0 fixed z-40 transition-all duration-700 delay-150 translate-x-[100%] opacity-100'>
          <Four />
        </div>
      </div>
    </>
  )
}
