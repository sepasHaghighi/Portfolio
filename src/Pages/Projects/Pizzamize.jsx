// Imported components
import ProjectHeader from "./project-components/ProjectHeader"
import Footer from "../Home/Home-components/Footer"
// Imported icons
import githubIcon from '@/assets/github.png'
import figmaIcon from '@/assets/figma.png'
// Imported images
import pizzamizeBanner from "@/assets/Works/Pizzamize/Pizzamize-banner.png"
export default function Pizzamize() {
    return (
        <>
            {/* Header */}
            <ProjectHeader />
            {/* Title bar with Figma, Github, live demo links */}
            <div id="project-head" className="flex flex-row justify-between w-[100vw] px-4 sticky py-4 top-22 bg-white border-t border-t-gray-200 sm:w-[100vw] lg:px-48 shadow">
                <h3 id="project-title" className="text-left font-normal">Pizzamize</h3>
                <section id="project-links" className="flex flex-row gap-4 sm:gap-8 items-center">
                    {/* <a href='#' target="blank" id="figma-link"><img src={figmaIcon} alt="Figma" className="min-w-5 sm:w-10" /></a> */}
                    {/* <a href='#' target="blank" id="github-link"><img src={githubIcon} alt="Github" className="min-w-5 sm:w-5" /></a> */}
                    {/* <a href='#' target="blank" id="liveDemo-link" className="whitespace-nowrap">Live Demo</a> */}
                </section>
            </div>
            {/* Main */}
            <main className='flex flex-col items-center gap-16'>
                {/* Banner */}
                <img src={pizzamizeBanner} alt="lineout banner" className=' w-[80vw] rounded-2xl' />
                {/* Why? */}
                <section className='flex flex-col w-[80vw] bg-gray-100 gap-2 p-4 rounded-2xl'>
                    <h3 className='project-subtitle'>Why?</h3>
                    <p className='project-description'>Pizzamize is a restaurant aiming to promote food customization based on customers' taste preferences. The goal of this project is to design a website which not only attracts the potential target users by offering customization tools and services but also transfers the idea of both uniqueness and minimalism as the portal of a modern business.</p>
                </section>
                {/* Business concept */}
                <section className="flex sm:flex-row justify-between">
                    <section className='flex flex-col items-center gap-4 sm:gap-2 w-[80vw] bg-gray-100'>
                        <h3 className='project-subtitle'>Business concept</h3>
                        <p className='project-description'>What separates this restaurant from the competitors are the options it offers besides the ordinary services.Customers will be able to define their taste preferences in their account so that the website can suggest them new dishes. Apart from that, users can customize the dishes based on their interests</p>
                    </section>
                </section>
            </main>
            {/* Footer */}
            <Footer />
        </>
    )
}