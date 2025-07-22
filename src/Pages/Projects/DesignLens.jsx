// Imported components
import ProjectHeader from "./project-components/ProjectHeader"
import Footer from "../Home/Home-components/Footer"
// Imported icons
import figmaIcon from "@/assets/figma.png"
import githubIcon from "@/assets/github.png"
// Imported images
import DesignLensBanner from "@/assets/Works/DesignLens/DesignLens.png"
import designerImg from "@/assets/Works/DesignLens/Designer.png"
import developerImg from "@/assets/Works/DesignLens/Developer.png"
import finalUI from "@/assets/Works/DesignLens/FinalDesignLens.png"
import userImg from "@/assets/Works/DesignLens/User1.jpg"
import userImg2 from "@/assets/Works/DesignLens/User2.jpg"
import oldFlow1 from "@/assets/Works/DesignLens/Old-1.svg"
import oldFlow2 from "@/assets/Works/DesignLens/Old-2.svg"
import oldFlow3 from "@/assets/Works/DesignLens/Old-3.svg"
import oldFlow4 from "@/assets/Works/DesignLens/Old-4.svg"
import oldFlow5 from "@/assets/Works/DesignLens/Old-5.svg"
import wireframeInterface from "@/assets/Works/DesignLens/Wireframe-Interface.svg"
import wireframeBrowser from "@/assets/Works/DesignLens/Wireframe-Browser.svg"

export default function DesignLens() {
    return (
        <>
            {/* Header */}
            <ProjectHeader />
            {/* Title bar with Figma, Github, live demo links */}
            <div id="project-head" className="flex flex-row justify-between w-[100vw] px-4 sticky py-4 top-22 bg-white border-t border-t-gray-200 sm:w-[100vw] lg:px-48 shadow">
                <h3 id="project-title" className="text-left font-normal">Design lens extension</h3>
                <section id="project-links" className="flex flex-row gap-4 sm:gap-8 items-center">
                    <a href='https://github.com/sepasHaghighi/Design-lens-extension' target="blank" id="figma-link"><img src={githubIcon} alt="Github Icon" className="min-w-5 sm:w-6" /></a>
                    
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
                {/* Old flow */}
                <section className='flex flex-col w-[80vw] bg-gray-50 p-4 gap-8 rounded-2xl'>
                    <h3 className='project-subtitle'>Old flow</h3>
                    <section className="flex lg:flex-row flex-col justify-between lg:gap-4 gap-4 lg:items-start">
                        <img src={oldFlow1} alt="Current flow 1" className="lg:w-1/6 w-full" />
                        <img src={oldFlow2} alt="Current flow 2" className="lg:w-1/6 w-full" />
                        <img src={oldFlow3} alt="Current flow 3" className="lg:w-1/6 w-full" />
                        <img src={oldFlow4} alt="Current flow 4" className="lg:w-1/6 w-full" />
                        <img src={oldFlow5} alt="Current flow 5" className="lg:w-1/6 w-full" />
                    </section>
                </section>
                {/* User pain points */}
                <section className="flex flex-col gap-4 bg-gray-50 p-4 rounded-2xl w-[80vw]">
                    <h3 className='project-subtitle'>User pain points</h3>
                    {/* Designers */}
                    <section className="flex xl:flex-row flex-col gap-4">
                        <img src={designerImg} alt="Image of a designer" className= "lg:w-1/3 rounded-xl" />
                        <p className="project-description w-full">
                            <span className="font-medium">
                                Designers:
                            </span>
                            <li>I have to constantly go back and forth between Figma and browser</li>
                            <li>In big projects, exporting Figma screens one by one is a pain.</li>
                            <li>It's a huge waste of time, having to overlay designed screens manually.</li>
                            <li>Being a designer and having to inspect each web element is a headache.</li>
                            <li>Having to upload screenshots to Figma and leave comments? Don't get me started on that!</li>
                        </p>
                    </section>
                    {/* Developer */}
                    <section className="flex lg:flex-row flex-col gap-4">
                        <img src={developerImg} alt="Image of a developer" className="lg:w-1/3 rounded-xl" />
                        <p className="project-description">
                            <span className="font-medium">
                                Developer:
                            </span>
                            <li>It would have been cool if there was a tool to inspect where the code went wrong!</li>
                            <li>I don't like going to Figma again, so that I can see what went wrong.</li>
                            <li>Only if there was a way to inspect HTML and Figma elements side by side!</li>
                        </p>
                    </section>
                </section>
                {/* New flow */}
                <section className="flex flex-col w-[80vw] gap-8">
                    <h3 className='project-subtitle'>A new flow to deal with design reviews</h3>
                    <section className="flex lg:flex-row flex-col justify-center gap-8">
                        <img src={wireframeInterface} alt="Wireframe of the product" className="rounded-xl lg:w-1/2 w-full" />
                        <img src={wireframeBrowser} alt="Wireframe of the product" className=" rounded-xl lg:w-1/2 w-full" />
                    </section>
                </section>
                {/* The UI */}
                <section className="flex flex-col w-[80vw] gap-8">
                    <h3 className='project-subtitle'>How the real product looks</h3>
                    <section className="flex flex-row justify-center">
                        <img src={finalUI} alt="The new proposed flow" className="border border-gray-200 rounded-xl" />
                    </section>
                </section>
                {/* Impact of the product */}
                <section className='flex bg-gray-50 p-4 rounded-2xl flex-col w-[80vw] gap-2 mb-8'>
                    <section className="flex flex-col w-auto gap-4">
                        <h3 className='project-subtitle'>Impact of the product</h3>
                            <section className="flex lg:flex-row flex-col items-center gap-4 p-4 border border-[#36d89d] rounded-xl">
                                <img src={userImg} alt="User image" className="rounded-full w-36 h-36" />
                                <p className="project-description">
                                    <span className="font-medium">Monica(Designer):</span><br />
                                    What used to take 4 hours is now done in 1 hour max! I don't need to do all the exporting, importing and inspecting. I can just use one simple extension. <strong>Highly recomended!</strong>
                                </p>
                            </section>
                            <section className="flex lg:flex-row flex-col items-center gap-4 p-4 border border-[#36d89d] rounded-xl">
                                <img src={userImg2} alt="User image" className="rounded-full w-36 h-36" />
                                <p className="project-description">
                                    <span className="font-medium">Ali(Developer):</span><br />
                                    I don't need to check Figma dev mode anymore to see the design specs. I can just make changes to code by looking at screenshots. <strong>This has made my life much easier!</strong>
                                </p>
                            </section>
                    </section>
                </section>
            </main>
            <Footer />
        </>
    )
}