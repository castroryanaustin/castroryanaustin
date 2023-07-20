export default function Three() {

    function handleClick() {
        const three = document.getElementById('projectThree');
        const back = document.getElementById('backlast');
        const backin = document.getElementById('backinit');
        backin?.classList.remove('translate-x-0')
        backin?.classList.add('translate-x-[100%]')
        back?.classList.remove('translate-x-0')
        back?.classList.add('translate-x-[100%]')
        three?.classList.remove('translate-x-0')
        three?.classList.add('translate-x-[100%]')

    }

    return (
        <div className="relative w-screen h-screen dotted-grid">
            <button type="button" onClick={handleClick} className='absolute top-10 left-10 lg:w-14 lg:h-14 w-7 hover:scale-125 transition-all duration-75'><svg className='fill-[#583928]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg></button>
            <div className="grid place-content-center font-Aeonik font-extrabold text-[100px] text-[#583928] w-full h-full">
                <h1 className="text-[150px] leading-none">404:</h1>
                <h1 className="leading-none">Oops, sorry !!</h1>
                <p className="text-4xl text-[#141414] text-end pt-5">// We are working on it. //</p>
            </div>
        </div>
    )
}