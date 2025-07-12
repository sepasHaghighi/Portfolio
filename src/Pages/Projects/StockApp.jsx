// Imported components
import ProjectHeader from "./project-components/ProjectHeader"
import Footer from "../Home/Home-components/Footer"
// Imported images
import StockAppBanner from "@/assets/Works/Stock-management-app/StockBanner.png"
import ResearchImg from "@/assets/Works/Stock-management-app/Research.png"
import NewUserJourney from "@/assets/Works/Stock-management-app/NewUserJourney.png"
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
                {/* Why do we need this app? */}
                <section className='flex flex-col w-[80vw] bg-white gap-2 rounded-2xl'>
                    <h3 className='project-subtitle'>Why do we need this app?</h3>
                    <p className='project-description'>Every year, millions of donated medicines and funds are wasted due to paper-based stock management and lack of real-time data collection, causing expiries and stock-outs. This app digitizes the process, enabling live tracking and data reliability for smarter, cost-effective distribution.</p>
                </section>
                {/* Starting step */}
                <section className='flex flex-col w-[80vw] bg-gray-50 p-4 gap-2 rounded-2xl'>
                    <section className="flex flex-col w-auto gap-4">
                        <h3 className='project-subtitle'>First step: Getting to know the current stock management context</h3>
                        <p className='project-description'>Improvement starts with deep understanding. That’s why the team began by thoroughly investigating the existing system to identify its flaws.</p>
                    </section>
                    {/* Steps taken */}
                    <section className="flex xl:grid grid-cols-3 flex-col gap-4">
                        {/* 1st box */}
                        <section className="flex flex-col gap-2 p-4 border border-[#36d89d] rounded-xl items-center">
                            <p className="project-description">
                                <span className="font-medium">
                                    Who are the users?
                                </span>
                                <br />
                                The users are <strong>health workers and facility managers</strong> responsible for <strong>tracking, ordering, and reporting medicine stocks</strong>. They work in <strong>clinics or health posts</strong>, often with <strong>limited digital tools</strong>, managing inventory alongside patient care—typically during regular daytime hours.
                            </p>
                            <p className="project-description">
                                <span className="font-medium">
                                    Characteristics:
                                </span>
                                <li>Have limited tech knowledge</li>
                                <li>Wear too many hats</li>
                            </p>
                        </section>
                        {/* 2nd box */}
                        <section className="flex flex-col gap-2 p-4 border border-[#36d89d] rounded-xl items-center">
                            <p className="project-description">
                                <span className="font-medium">
                                    What is the context?
                                </span>
                                <br />
                                The establishments are often located in low resource, remote areas of the third world countries where electricity or internet stability might be an issue.
                            </p>
                            <p className="project-description">
                                <span className="font-medium">
                                    Characteristics:
                                </span>
                                <li>Remote locations</li>
                                <li>Lack of electricity stability</li>
                                <li>Lack of internet stability</li>
                            </p>
                        </section>
                        {/* 3rd box */}
                        <section className="flex flex-col gap-2 p-4 border border-[#36d89d] rounded-xl items-center">
                            <p className="project-description">
                                <span className="font-medium">
                                    What are the current tools?
                                </span>
                                <br />
                                All the currently used tools are paper-based which causes inaccuracy, unreliability and delayed, not real-time data and are hard to store and maintain.
                            </p>
                            <p className="project-description">
                                <span className="font-medium">
                                    Characteristics:
                                </span>
                                <li>Paper-based</li>
                                <li>Unreliable</li>
                                <li>Prone to human error</li>
                                <li>Not easy to maintain</li>
                                <li>No real-time data</li>
                            </p>
                        </section>
                        {/* 4th box */}
                        <section className="flex flex-col gap-2 p-4 border border-[#36d89d] rounded-xl items-center">
                            <p className="project-description">
                                <span className="font-medium">
                                    What is the current process?
                                </span>
                                <br />
                                Currently, everything is recorded on papers. There are a lot of information to be filled in for each drug movement. The process involves lots of double work. Current tools are designed without having proper understanding of the context.
                            </p>
                            <p className="project-description">
                                <span className="font-medium">
                                    Characteristics:
                                </span>
                                <li>Paper-based</li>
                                <li>Too much data needs to be filled in</li>
                                <li>Lots of copied data</li>
                                <li>Very bad UX</li>
                            </p>
                        </section>
                        {/* 5th box */}
                        <section className="flex flex-col gap-2 p-4 border border-[#36d89d] rounded-xl items-center">
                            <p className="project-description">
                                <span className="font-medium">
                                    Competitor analysis:
                                </span>
                                <br />
                                There are many other tools out there that can be facilitated in inventory management. Many of which are completely computer-based and require a great deal of prior setup.
                            </p>
                            <p className="project-description">
                                <span className="font-medium">
                                    Characteristics:
                                </span>
                                <li>Computer-based apps</li>
                                <li>Do not work properly when offline</li>
                                <li>Requires tech knowledge</li>
                                <li>Not easily adaptable to current situation</li>
                            </p>
                        </section>
                        {/* 6th box */}
                        <section className="flex flex-col gap-2 p-4 bg-[#36d89d] border border-[#36d89d] rounded-xl items-center">
                            <p className="project-description">
                                <span className="font-medium">
                                    How should we solve the problem?
                                </span>
                                <br />
                                Now that we understand the current context, the product should align with existing workflows while enhancing them. It must be user-friendly for those with limited digital literacy and function offline.
                            </p>
                            <p className="project-description">
                                <span className="font-medium">
                                    Characteristics:
                                </span>
                                <li>Offlie enable</li>
                                <li>User friendly for tech illitrate users</li>
                                <li>Limited prior setup</li>
                                <li>Must be paper/digital based</li>
                            </p>
                        </section>

                    </section>
                    {/* Figma iFrame */}
                    <div className="w-auto border border-gray-200 rounded-xl shadow-md overflow-hidden">
                        <iframe
                            className="w-full h-[25rem] md:h-[35rem]"
                            src="https://embed.figma.com/board/cLudJvsjSiqA7Tz5pHnR2s/Stock-management-app---Research?node-id=0-1&embed-host=share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </section>
                {/* Second step: Getting to know the details of the current flow */}
                <section className='flex xl:flex-row flex-col w-[80vw] gap-2'>
                    <section className="flex flex-col w-auto gap-4">
                        <h3 className='project-subtitle'>Second step: Getting to know the current tools in details</h3>
                        <p className='project-description'>Now it was time to understand the current tools in details to figure out the pieces that we can keep and the pieces that are not essential.
                            <br />
                            Through a lot of review sessions with the nurses and health workers on site and on a daily basis, we managed to draw the user journies and fully understand the flows.
                        </p>
                        <figcaption className="text-sm text-left">Images: Me and healthcare workers at hospitals in Uganda and Gambia.</figcaption>
                    </section>
                    <img src={ResearchImg} alt="Busy people" className="w-full xl:w-[40%]" />
                </section>
                {/* Third step: Mapping the suggested flow */}
                <section className='flex bg-gray-50 p-4 rounded-2xl flex-col w-[80vw] gap-2'>
                    <section className="flex flex-col w-auto gap-4">
                        <h3 className='project-subtitle'>Third step: Mapping the suggested flow</h3>
                        <p className='project-description'>Based on our understanding, and after discussing the issues with devs, healthcare workers, business owners and stakeholder we came up with the new user journey.
                        </p>
                    </section>
                    <img src={NewUserJourney} alt="Busy people" className="w-full" />
                </section>
            </main>
            <Footer />
        </>
    )
}