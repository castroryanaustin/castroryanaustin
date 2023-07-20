import { useEffect } from "react";

export default function About() {

    function handleClick() {
        const about = document.getElementById('aboutPage');
        about?.classList.remove('translate-y-0')
        about?.classList.add('translate-y-[120dvh]')
    }

    return (
        <div className="relative grid place-content-center bg-[#583928] text-[#d4cca0] font-Aeonik w-screen h-screen">
            <button type="button" onClick={handleClick} className='absolute top-7 left-7 lg:w-14 lg:h-14 w-7 h-7 hover:scale-125 transition-all duration-75'><svg className='fill-[#d4cca0]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></button>
            <div className="md:text-[35px] text-[0.8rem] lg:p-16 lg:pt-72 pt-32 md:p-10 p-5 w-screen overflow-y-scroll scroll-smooth no-scrollbar">
                <div className="grid place-content-center">
                    <div className="grid pb-10 lg:text-start text-justify">
                        <span>I am a computer engineering</span>
                        <span>graduate from Bulacan State</span>
                        <span>University, equipped with a</span>
                        <span>strong foundation in computer</span>
                        <span>systems, software development,</span>
                        <span>web development, & UX Design.</span>
                    </div>
                    <div className="grid pb-10 lg:text-start text-justify">
                        <span>I specialize in web development</span>
                        <span>with a strong focus on visual design.</span>
                        <span>I also have a strong foundation</span>
                        <span>in UX Design and the process of</span>
                        <span>its development and life cycle.</span>
                    </div>
                    <div className="grid lg:pb-32 lg:pt-32 pb-10">
                        <span className="font-bold">Working Experience</span>
                        <div className="grid lg:pt-16 lg:pl-28 pt-5 pl-5 leading-none">
                            <span>Software Engineer Intern</span>
                            <span className="pt-1">Hooli Software</span>
                            <span className="pt-1 lg:text-lg text-[0.5rem]">June 2021 - Aug 2021</span>
                        </div>
                    </div>
                    <div className="grid lg:pb-32 pb-10">
                        <span className="font-bold">Awards & Certifications</span>
                        <div className="grid lg:pt-16 lg:pl-28 pt-5 pl-5 leading-none">
                            <span>Foundations of UX Design</span>
                            <span className="pt-1">Coursera</span>
                            <span className="pt-1 lg:text-lg text-[0.5rem] leading-none">2023</span>
                        </div>
                        <div className="grid lg:pt-16 lg:pl-28 pt-5 pl-5 leading-none">
                            <span>Best Thesis Presenter</span>
                            <span className="pt-1">Bulacan State University</span>
                            <span className="pt-1 lg:text-lg text-[0.5rem] leading-none">2023</span>
                        </div>
                        <div className="grid lg:pt-16 lg:pl-28 pt-5 pl-5 leading-none">
                            <span>Dean&apos;s Lister</span>
                            <span className="pt-1">Bulacan State University</span>
                            <span className="pt-1 lg:text-lg text-[0.5rem] leading-none">2020 - 2023</span>
                        </div>
                        <div className="grid lg:pt-16 lg:pl-28 pt-5 pl-5 leading-none">
                            <span>C1 - Rating</span>
                            <span className="pt-1">Test of English Proficiency</span>
                            <span className="pt-1 lg:text-lg text-[0.5rem] leading-none">2021</span>
                        </div>
                        <div className="grid lg:pt-16 lg:pl-28 pt-5 pl-5 leading-none">
                            <span>3rd Place - Web Design</span>
                            <span className="pt-1">Division Integrated Competition</span>
                            <span className="pt-1 lg:text-lg text-[0.5rem] leading-none">2017</span>
                        </div>
                    </div>
                    <div className="font-bold">Connect with me</div>
                    <div className="grid lg:pt-16 lg:pl-28 pt-5 pl-5 leading-none pb-10">
                        <span className="hover:scale-125 hover:text-white transition-all duration-200 cursor-pointer w-fit"><a href="mailto:castroryanaustin@gmail.com">Email</a></span>
                        <span className="hover:scale-125 hover:text-white transition-all duration-200 cursor-pointer w-fit"><a href="/files/resume.pdf" download>Resume</a></span>
                        <span className="hover:scale-125 hover:text-white transition-all duration-200 cursor-pointer w-fit"><a href="https://www.linkedin.com/in/castroryanaustin/">LinkedIn</a></span>
                        <span className="hover:scale-125 hover:text-white transition-all duration-200 cursor-pointer w-fit"><a href="https://github.com/castroryanaustin">Github</a></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </div>
    )
}