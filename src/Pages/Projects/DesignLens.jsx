// Imported components
import ProjectHeader from "./project-components/ProjectHeader"
import Footer from "../Home/Home-components/Footer"
// Imported icons
import figmaIcon from "@/assets/figma.png"
// Imported images
import DesignLensBanner from "@/assets/Works/DesignLens/DesignLens.png"
import currentFlow from "@/assets/Works/DesignLens/CurrentFlow.png"

export default function DesignLens() {
    return (
        <>
            {/* Header */}
            <ProjectHeader />
            {/* Title bar with Figma, Github, live demo links */}
            <div id="project-head" className="flex flex-row justify-between w-[100vw] px-4 sticky py-4 top-22 bg-white border-t border-t-gray-200 sm:w-[100vw] lg:px-48 shadow">
                <h3 id="project-title" className="text-left font-normal">Design lens extension</h3>
                <section id="project-links" className="flex flex-row gap-4 sm:gap-8 items-center">
                    <a href='https://www.figma.com/design/t6xLMzDqjk9zVotvUK2yO9/Stock-management-app?node-id=5929-146586&t=XecRpUWi5U4z1MM3-1' target="blank" id="figma-link"><img src={figmaIcon} alt="Figma" className="min-w-5 sm:w-6" /></a>
                    <a href='https://youtube.com/playlist?list=PLRA4ioaTxcm_LzcOcX0zOBhLIzAex_m-P&si=EX9p-iNNqs6hmKhu' target="blank" id="liveDemo-link" className="whitespace-nowrap">Demo</a>
                </section>
            </div>
            {/* Main */}
            <main className='flex flex-col items-center gap-16'>
                {/* Banner */}
                <img src={DesignLensBanner} alt="Stock app banner" className=' w-[80vw] rounded-2xl' />
                {/* Why do we need this tool? */}
                <section className='flex flex-col w-[80vw] bg-white gap-2 rounded-2xl'>
                    <h3 className='project-subtitle'>Why did we need this tool?</h3>
                    <p className='project-description'>After each development phase, the design team faces the tedious task of <strong>reviewing the implementation to ensure it matches the original designs.</strong> This used to involve exporting screens from Figma, manually overlaying them on the staging site, taking screenshots, and re-importing them into Figma to leave comments. With this extension, that entire back-and-forth is eliminated—you can <strong>select Figma screens, overlay them, add comments, and capture screenshots, all within one easy-to-use tool.</strong></p>
                </section>
                <section className='flex flex-col w-[80vw] bg-gray-50 p-4 gap-2 rounded-2xl'>
                    <h3 className='project-subtitle'>Old flow</h3>
                    <img src={currentFlow} alt="Current flow" className="rounded-xl" />
                </section>
            </main>
            <Footer />
        </>
    )
}