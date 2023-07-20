export default function Contact() {

    function handleClick() {
        const contact = document.getElementById('contactPage');
        contact?.classList.remove('translate-y-0')
        contact?.classList.add('translate-y-[120dvh]')
    }

    return (
        <div className="relative grid sm:content-center place-content-center dotted-grid text-[#583928] w-screen h-[31rem] lg:text-[60px] text-[25px]">
            <p className="absolute bottom-16 -left-8 text-xl font-DMSans -rotate-90 leading-none">「 Contact 」</p>
            <button type="button" onClick={handleClick} className='absolute top-7 left-7 w-14 h-14 hover:scale-125 transition-all duration-75'><svg className='fill-[#583928]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></button>
            <div className="grid content-center">
                <div className="grid font-Aeonik font-extrabold place-content-end leading-none">
                    <div className="flex justify-between text-white">
                        <p>CONNECT</p>
                        <p>WITH</p>
                        <p>ME</p>

                    </div>
                    <div className="flex justify-between">
                        <p>RYAN</p>
                        <p>&nbsp;</p>
                        <p>AUSTIN</p>
                        <p>&nbsp;</p>
                        <p>CASTRO</p>
                    </div>
                    <div className="flex justify-between">
                        <p>FRONT-END</p>
                        <p>DEV</p>
                    </div>
                    <div className="flex justify-between">
                        <p>&</p>
                        <p>UX</p>
                        <p>DESIGNER</p>
                    </div>
                    <div className="flex justify-between">
                        <p>PH</p>
                        <p>+63</p>
                        <p>(965)2284032</p>
                    </div>
                    <div className="flex justify-between">

                        <p className="hover:text-white hover:scale-150 transition-all"><a href="mailto:castroryanaustin@gmail.com">EMAIL</a></p>
                        <p>//</p>
                        <p className="hover:text-white hover:scale-150 transition-all"><a href="https://www.linkedin.com/in/castroryanaustin/">LINKEDIN</a></p>
                    </div>
                </div>
            </div>
        </div>

    )
}