// Imported components
import ProjectHeader from "./project-components/ProjectHeader"
import Footer from "../Home/Home-components/Footer"
// Imported icons
import figmaIcon from "@/assets/figma.png"
import errorIcon from "@/assets/Works/ShifoWebsite/Error.svg"
import successIcon from "@/assets/Works/ShifoWebsite/Success.svg"
// Imported images
import shifoMockup from '@/assets/Works/ShifoWebsite/shifoMockup.png'
import busyPeople from "@/assets/Works/ShifoWebsite/Busy-people.png"
import sketch from "@/assets/Works/ShifoWebsite/Sketch.png"
import wireframe from "@/assets/Works/ShifoWebsite/Wireframe-Shifo.png"
import finalMockup from "@/assets/Works/ShifoWebsite/Final-mockup.png"
export default function ShifoWebsite() {
    return (
        <>
            {/* Header */}
            <ProjectHeader />
            {/* Title bar with Figma, Github, live demo links */}
            <div id="project-head" className="flex flex-row justify-between w-[100vw] px-4 sticky py-4 top-22 bg-white border-t border-t-gray-200 sm:w-[100vw] lg:px-48 shadow">
                <h3 id="project-title" className="text-left font-normal">Shifo Foundation website</h3>
                <section id="project-links" className="flex flex-row gap-4 sm:gap-8 items-center">
                    <a href='#' target="blank" id="figma-link"><img src={figmaIcon} alt="Figma" className="min-w-5 sm:w-10" /></a>
                    <a href='https://www.shifo.org/' target="blank" id="liveDemo-link" className="whitespace-nowrap">Live website</a>
                </section>
            </div>
            {/* Main */}
            <main className='flex flex-col items-center gap-16'>
                {/* Banner */}
                <img src={shifoMockup} alt="Shifo image banner" className=' w-[80vw] rounded-2xl' />
                {/* Why? */}
                <section className='flex flex-col w-[80vw] bg-white gap-2 rounded-2xl'>
                    <h3 className='project-subtitle'>Why?</h3>
                    <p className='project-description'>The goal was to present Shifo’s digital health solutions in a clear and engaging way, making it easy for high-level stakeholders and potential investors to quickly grasp the impact and value of the products.</p>
                </section>
                {/* Users */}
                <section className='flex md:flex-row flex-col w-[80vw] bg-gray-100 p-4 gap-2 rounded-2xl'>
                    <section className="flex flex-col w-auto gap-4">
                        <h3 className='project-subtitle'>Who are the users of this website?</h3>
                        <p className='project-description'>As Shifo Foundation develops solutions that transform healthcare systems in low-resource countries, the website is primarily aimed at <span className="font-bold"> high-level decision-makers from health ministries</span> and <span className="font-bold">international organizations like the World Bank.</span></p>
                        <p className="project-description">
                            <span className="inline-block font-medium">
                                User characteristics:
                            </span>
                            <ul className="text-md list-disc list-inside">
                                <li>Busy all the time.</li>
                                <li>Tired of listening to boring presentations all the time.</li>
                                <li>Not interested in complex, hard to implement projects.</li>
                                <li>Are decision makers. Do not understand technical requirements.</li>
                            </ul>
                        </p>
                    </section>
                    <img src={busyPeople} alt="Busy people" className="w-[40%] rounded-xl" />
                </section>
                {/* The challange */}
                <section className='flex md:flex-row flex-col w-[80vw] bg-white p-4 gap-2 rounded-2xl'>
                    <h2 className="project-section-title shifo">The Challenge!</h2>
                </section>
                <section className='flex flex-col w-[80vw] gap-2 p-4 rounded-2xl bg-[#D15C4C]'>
                    <h3 className='project-description-white'>Shifo’s solutions are inherently complex, involving multiple user roles and interconnected workflows across the healthcare system.</h3>
                </section>
                {/* The road to overcome the challenge */}
                <section className="flex flex-col w-[80vw] gap-10 rounded-2xl bg-gray-100 p-4">
                    <section className='flex flex-col w-[80vw] gap-2 rounded-2xl'>
                        <h3 className="project-subtitle">The road to overcome the challenge!</h3>
                        <p className='project-description'>During our <span className="font-bold">weekly catch-ups with stakeholders</span>, we took the chance to <span className="font-bold">try out different presentation approaches</span> to figure out what clicks best with the audience.</p>
                    </section>
                    {/* Presentation approaches */}
                    <section className='flex flex-col w-[80vw]  gap-4 rounded-2xl'>
                        <h3 className='project-subtitle'>Failed approaches:</h3>
                        <section className="flex md:flex-row flex-wrap flex-col gap-4">
                            {/* Approach 1 */}
                            <div className="flex flex-row gap-2 items-start bg-white border border-[#D15C4C] p-4 rounded-2xl md:w-[32%]">
                                <img src={errorIcon} alt="Error icon" />
                                <p className="project-description">
                                    <span className="font-bold">Describing the solution A-Z</span> <br />
                                    In this approach we presented the solution from A to Z and at the end showed the real working app
                                </p>
                            </div>
                            {/* Approach 2 */}
                            <div className="flex flex-row gap-2 items-start bg-white border border-[#D15C4C] p-4 rounded-2xl md:w-[32%]">
                                <img src={errorIcon} alt="Error icon" />
                                <p className="project-description">
                                    <span className="font-bold">Showing the Hi-fi prototype</span> <br />
                                    In the 2nd approach we tried presenting the Hi-fi prototype with simplified information to avoid audience from confusion
                                </p>
                            </div>
                            {/* Approach 3 */}
                            <div className="flex flex-row gap-2 items-start bg-white border border-[#D15C4C] p-4 rounded-2xl md:w-[32%]">
                                <img src={errorIcon} alt="Error icon" />
                                <p className="project-description">
                                    <span className="font-bold">Going over the most simplified presentations</span> <br />
                                    We tried to make the flow as simple as possible by removing the unnecessary details from the presentation but still keeping the main idea intact.
                                </p>
                            </div>
                            <h3 className='py-10 text-[#D15C4C] text-center'>None of these approaches worked, <br />because the audience were failing to put themselves in the shoes of the real users!</h3>
                            <section className="flex md:flex-row flex-wrap flex-col gap-4 justify-center w-full">
                                <h3 className='project-subtitle'>Approach that worked:</h3>
                                {/* Approach that worked */}
                                <div className="flex flex-row gap-2 items-start bg-white border border-[#69caa9] p-4 rounded-2xl">
                                    <img src={successIcon} alt="Error icon" />
                                    <p className="project-description">
                                        <span className="font-bold">Story telling!</span> <br />
                                        Instead of just describing app's features, we decided to tell stories of the users and how the app would help them!
                                    </p>
                                </div>
                            </section>
                        </section>
                    </section>
                </section>
                {/* Sketching */}
                <section className='flex flex-col w-[80vw] bg-white gap-2 rounded-2xl'>
                    <h3 className='project-subtitle'>And so we started sketching stories!</h3>
                    <p className='project-description'>Each feature of the app ended up having its own story from the users' prespective:</p>
                    <div className="w-full flex flex-row justify-center">
                        <img src={sketch} alt="" className="w-[60vw]" />
                    </div>
                </section>
                {/* Wireframe */}
                <section className='flex flex-col w-[80vw] bg-white gap-2 rounded-2xl'>
                    <h3 className='project-subtitle'>Information architecture</h3>
                    <p className='project-description'>Then came the fairly simple structure of the website:</p>
                    <div className="w-full flex flex-row justify-center">
                        <img src={wireframe} alt="" className="w-[60vw]" />
                    </div>
                </section>
                {/* HiFi */}
                <section className='flex flex-col w-[80vw] bg-white gap-2 rounded-2xl'>
                    <h3 className='project-subtitle'>Final design:</h3>
                    <p className='project-description'>Since we knew we were going to use company's design system, we skipped the low fidelity wireframes and went straight to the High fidelity designs. And here's the end product:</p>
                    <div className="w-full flex flex-row justify-center">
                        <img src={finalMockup} alt="Shifo image banner" className=' w-[80vw] rounded-2xl' />
                    </div>
                </section>
                {/* The Feedback */}
                <section className='flex flex-col w-[80vw] bg-gray-100 p-4 gap-2 rounded-2xl'>
                    <h3 className='project-subtitle'>What was the feedback?</h3>
                    <p className='project-description'>Amazing! Before any meeting with the stakeholders, they were visiting the website to get the jist of the products and guess what! <br /><span className="font-bold text-[#69caa9]">Shifo is now operating in 8 countries!</span></p>
                </section>
                <Footer />
            </main>
        </>
    )
}