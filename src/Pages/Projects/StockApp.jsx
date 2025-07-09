// Imported components
import ProjectHeader from "./project-components/ProjectHeader"
import Footer from "../Home/Home-components/Footer"
// Imported images
import StockAppBanner from "@/assets/Works/Stock-management-app/StockBanner.png"
// Imported icons
import figmaIcon from "@/assets/figma.png"

export default function StockApp() {
    return (
        <>
            {/* Header */}
            <ProjectHeader />
            {/* Title bar with Figma, Github, live demo links */}
            <div id="project-head" className="flex flex-row justify-between w-[100vw] px-4 sticky py-4 top-22 bg-white border-t border-t-gray-200 sm:w-[100vw] lg:px-48 shadow">
                <h3 id="project-title" className="text-left font-normal">Stock Management App</h3>
                <section id="project-links" className="flex flex-row gap-4 sm:gap-8 items-center">
                    <a href='https://www.figma.com/design/t6xLMzDqjk9zVotvUK2yO9/Stock-management-app?node-id=5929-146586&t=XecRpUWi5U4z1MM3-1' target="blank" id="figma-link"><img src={figmaIcon} alt="Figma" className="min-w-5 sm:w-6" /></a>
                    <a href='https://youtube.com/playlist?list=PLRA4ioaTxcm_LzcOcX0zOBhLIzAex_m-P&si=EX9p-iNNqs6hmKhu' target="blank" id="liveDemo-link" className="whitespace-nowrap">Demo</a>
                </section>
            </div>
            {/* Main */}
            <main className='flex flex-col items-center gap-16'>
                {/* Banner */}
                <img src={StockAppBanner} alt="Stock app banner" className=' w-[80vw] rounded-2xl' />
            </main>
            <Footer/>
        </>
    )
}