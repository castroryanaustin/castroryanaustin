export default function Marquee() {
    return (
        <div className="relative flex overflow-x-hidden font-Aeonik font-extrabold text-[#583928] text-[140px]">
            <div className="py-12 animate-marquee whitespace-nowrap ">
                <span className="mx-4">MY PROJECTS</span>
                <span className="mx-4">//</span>
                <span className="mx-4">MY PROJECTS</span>
                <span className="mx-4">//</span>
                <span className="mx-4">MY PROJECTS</span>
                <span className="mx-4">//</span>
            </div>
            <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                <span className="mx-4">MY PROJECTS</span>
                <span className="mx-4">//</span>
                <span className="mx-4">MY PROJECTS</span>
                <span className="mx-4">//</span>
                <span className="mx-4">MY PROJECTS</span>
                <span className="mx-4">//</span>
            </div>
        </div>

    )
}