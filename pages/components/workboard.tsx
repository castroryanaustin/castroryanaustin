export default function Workboard() {

    return (
        <div id="workboard" className="lg:p-10 p-5 text-[#583928] h-fit">
            <div className="">
                <h1 className="lg:text-[4rem] text-[2rem] leading-none font-Aeonik">I can assist you with ...</h1>
                <div className="text-xl font-DMSans">
                    <div className="h-14 w-fit"></div>
                    <div className="grid md:grid-cols-3 grid-cols-1 gap-10 justify-between">
                        <div className="justify-between pl-5 h-fit border-l-[0.5px] border-[#583928] border-opacity-30 xl:text-2xl lg:text-xl text-sm">
                            <div className="text-3xl">01</div>
                            <div className="h-10 w-full"></div>
                            <div className="grid grid-cols-1 h-full">
                                <div className="grid self-end gap-3">
                                    <p>Web Design</p>
                                    <p>Designing visually appealing and user-friendly websites, creating seamless online experiences for businesses and individuals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="justify-between pl-5 h-fit border-l-[0.5px] border-[#583928] border-opacity-30 xl:text-2xl lg:text-xl text-sm">
                            <div className="text-3xl">02</div>
                            <div className="h-10 w-full"></div>
                            <div className="grid grid-cols-1 h-full">
                                <div className="grid self-end gap-3">
                                    <p>Software Development</p>
                                    <p>Crafting efficient and innovative software solutions, solving complex problems, and building robust applications for various industries.</p>
                                </div>
                            </div>
                        </div>
                        <div className="justify-between pl-5 h-fit border-l-[0.5px] border-[#583928] border-opacity-30 xl:text-2xl lg:text-xl text-sm">
                            <div className="text-3xl">03</div>
                            <div className="h-10 w-full"></div>
                            <div className="grid grid-cols-1 h-full">
                                <div className="grid self-end gap-3">
                                    <p>The Kit</p>
                                    <p>Experienced in web design and software development, I can do both and create a website that is ready for deployment.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}