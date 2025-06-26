// Imported components
import ProjectHeader from './project-components/ProjectHeader'
import Footer from '../Home/Home-components/Footer'
// Imported icons
import figmaIcon from '@/assets/figma.png'
import githubIcon from '@/assets/github.png'
// Imported images
import lineoutBanner from '@/assets/Works/Lineout/Lineout-banner.png'
import interviewCount from '@/assets/Works/Lineout/Interview-count.png'
import interview1 from '@/assets/Works/Lineout/Interview-1.png'
import interview2 from '@/assets/Works/Lineout/Interview-2.png'
import interview3 from '@/assets/Works/Lineout/Interview-3.png'
import zeroTechIdeas from '@/assets/Works/Lineout/Zero-tech-ideas.png'
import lowTechIdeas from '@/assets/Works/Lineout/Low-tech-ideas.png'
import highTechIdeas from '@/assets/Works/Lineout/High-tech-ideas.png'
import competitorAnalysis from '@/assets/Works/Lineout/Competitor-analysis.png'
import userSatisfaction from '@/assets/Works/Lineout/User-satisfaction.png'
import paperless from '@/assets/Works/Lineout/Paperless.png'
import timeEfficient from '@/assets/Works/Lineout/Time-efficient.png'
import contentMap from '@/assets/Works/Lineout/Content-map.png'
import wireframe from '@/assets/Works/Lineout/Wireframe.png'
import lofiPrototype from '@/assets/Works/Lineout/Lofi-prototype.png'
import hifiPrototype from '@/assets/Works/Lineout/Hifi-prototype.png'
import finalImage from '@/assets/Works/Lineout/FinalImage.png'
export default function Lineout(props) {
    return (
        <>
            {/* Header */}
            <ProjectHeader />
            {/* Title bar with Figma, Github, live demo links */}
            <div id="project-head" className="flex flex-row justify-between w-[100vw] px-4 sticky py-4 top-22 bg-white border-t border-t-gray-200 sm:w-[100vw] lg:px-48 shadow">
                <h3 id="project-title" className="text-left font-normal">Lineout</h3>
                <section id="project-links" className="flex flex-row gap-4 sm:gap-8 items-center">
                    {/* <a href='#' target="blank" id="figma-link"><img src={figmaIcon} alt="Figma" className="min-w-5 sm:w-10" /></a> */}
                    <a href='#' target="blank" id="github-link"><img src={githubIcon} alt="Github" className="min-w-5 sm:w-5" /></a>
                    <a href='#' target="blank" id="liveDemo-link" className="whitespace-nowrap">Live Demo</a>
                </section>
            </div>
            {/* Main content */}
            <main className='flex flex-col items-center gap-16'>
                {/* Banner */}
                <img src={lineoutBanner} alt="lineout banner" className=' w-[80vw] rounded-2xl' />
                {/* Why? */}
                <section className='flex flex-col w-[80vw] bg-gray-100 gap-2 p-4 rounded-2xl'>
                    <h3 className='project-subtitle'>Why?</h3>
                    <p className='project-description'>On average Each person wastes 6 months of her valuable life standing in some waiting line. Apart from the anxiety that comes with waiting, Other financial, environmental and health related issues are the downside of current waiting systems. So I decided to design an app to say goodbye to waiting lines.</p>
                </section>
                {/* User research */}
                <section className='flex flex-col items-center gap-4 sm:gap-2 w-[80vw]'>
                    <h3 className='project-subtitle'>User research</h3>
                    <p className='project-description'>A total of 30 interviews were done with these results:</p>
                    <img src={interviewCount} alt="interview count" className='w-[16rem]' />
                </section>
                {/* Interview statistics */}
                <section className='w-full flex sm:w-[80vw] flex-col sm:flex-row justify-between items-center bg-white rounded-2xl p-2'>
                    <img src={interview1} alt="" className='w-full sm:w-1/3 ' />
                    <img src={interview2} alt="" className='w-full sm:w-1/3 ' />
                    <img src={interview3} alt="" className='w-full sm:w-1/3 ' />
                </section>
                {/* User quotes */}
                <section className='flex flex-col sm:gap-2 justify-start w-full bg-gray-100 rounded-2xl p-4'>
                    <h4 className='project-subtitle w-full text-left'>User pain points</h4>
                    <p className='project-description'>And here are the problems we can solve for the users:</p>
                    <section className='flex flex-row flex-wrap items-center justify-between gap-4 sm:w-[80vw]'>
                        <span className='user-quotes lg:w-[48%] xl:w-[32%] lg:h-[6rem] text-left bg-white'>
                            "You never know how long you're going to waste
                            your time while standing in a line."
                        </span>
                        <span className='user-quotes lg:w-[48%] xl:w-[32%] lg:h-[6rem] text-left bg-white'>
                            "What freaks me out are the crowded lines of people in a relatively small space."
                        </span>
                        <span className='user-quotes lg:w-[48%] xl:w-[32%] lg:h-[6rem] text-left bg-white'>
                            "It always bothers me seeing all the wasted numbering papers."
                        </span>
                        <span className='user-quotes lg:w-[48%] xl:w-[32%] lg:h-[6rem] text-left bg-white'>
                            "Being in my 70's, It's so hard for me to stand in line for long."
                        </span>
                        <span className='user-quotes lg:w-[48%] xl:w-[32%] lg:h-[6rem] text-left bg-white'>
                            "These crowded lines are really dangerous during the Covid-19."
                        </span>
                        <span className='user-quotes lg:w-[48%] xl:w-[32%] lg:h-[6rem] text-left bg-white'>
                            "As a business owner I know how hard it is to soothe a customer who's been waiting for 50 minutes."
                        </span>
                        <span className='user-quotes lg:w-[48%] xl:w-[32%] h-[6rem] text-left bg-white'>
                            "I have to prepare room for the waiting customers. That costs a lot."
                        </span>
                    </section>
                </section>
                {/* Ideation */}
                <section className='flex flex-col gap-2'>
                    <h4 className='project-subtitle w-full text-left'>Ideation</h4>
                    <p className='project-description'>Using Crazy-8 method I came up with different ideas to address the problems</p>
                    <section className='w-full flex sm:w-[80vw] flex-col sm:flex-row justify-center lg:gap-48 items-center bg-white rounded-2xl p-2 mt-10'>
                        <img src={zeroTechIdeas} alt="" className='w-2/3 sm:w-1/4 lg:w-1/7 ' />
                        <img src={lowTechIdeas} alt="" className='w-2/3 sm:w-1/4 lg:w-1/7 ' />
                        <img src={highTechIdeas} alt="" className='w-2/3 sm:w-1/4 lg:w-1/7 ' />
                    </section>
                </section>
                {/* Competitor analysis */}
                <section className='flex flex-col items-center gap-4 sm:gap-2 w-[80vw] bg-gray-100 p-4 rounded-2xl'>
                    <h3 className='project-subtitle'>Competitor analysis</h3>
                    <p className='project-description'>In order to get a deep understanding of our competitors we started using and analysing their services. And here are our findings:</p>
                    <img src={competitorAnalysis} alt="interview count" className='sm:w-[32%] rounded-xl border border-gray-200' />
                    <section className='flex flex-row flex-wrap items-center justify-between gap-4 sm:w-[80vw] pt-4 pr-4 pl-4'>
                        <span className='user-quotes lg:w-[48%] xl:w-[32%] lg:h-[6rem] text-left bg-white'>
                            They are limited in number of services they offer. Either only governmental services or bars.
                        </span>
                        <span className='user-quotes lg:w-[48%] xl:w-[32%] lg:h-[6rem] text-left bg-white'>
                            The option to save the frequent or favorite services is only
                            available on Skiplino.
                        </span>
                        <span className='user-quotes lg:w-[48%] xl:w-[32%] lg:h-[6rem] text-left bg-white'>
                            There is a lack of integrity in these apps. The user has to check
                            email or text messages to be aware of her turn.
                        </span>
                        <span className='user-quotes lg:w-[48%] xl:w-[32%] lg:h-[6rem] text-left bg-white'>
                            Many of the Heuristic rules are not met. Eg. Visibility fo system
                            status, Recognition rather than recall, Aesthetic and minimal design, Help and documentation.
                        </span>
                    </section>
                </section>
                {/* Design goals */}
                <section className='flex flex-col items-center gap-4 sm:gap-6 w-[80vw] bg-white'>
                    <h3 className='project-subtitle'>Design goals</h3>
                    <section className='flex flex-col items-center gap-8'>
                        <section className='w-full flex flex-row gap-4 items-center'>
                            <img src={userSatisfaction} alt="" className='w-[8rem]' />
                            <p className='project-description'>Helping businesses to have more satisfied customers by eliminating waiting lines.</p>
                        </section>
                        <section className='w-full flex flex-row gap-4 items-center'>
                            <img src={paperless} alt="" className='w-[8rem]' />
                            <p className='project-description'>Helping nature by removing paper queueing systems.</p>
                        </section>
                        <section className='w-full flex flex-row gap-4 items-center'>
                            <img src={timeEfficient} alt="" className='w-[8rem]' />
                            <p className='project-description'>Helping customers to use their time effectively by eliminating waiting lines.</p>
                        </section>
                    </section>
                </section>
                {/* Main functions */}
                <section className='flex flex-col items-center gap-4 sm:gap-6 w-[80vw] bg-gray-100 rounded-2xl p-4'>
                    <h3 className='project-subtitle'>Main functions</h3>
                    <p className='project-description'>
                        <li>Virtual queueing to Eliminate waiting lines.</li>
                        <li>Scoring system to enable users rate the service that they received</li>
                        <li>App suggestion area to advertise useful apps so that more
                            things could be done online.</li>
                        <li>App suggestion area to suggest useful apps while waiting.</li>
                        <li>Favorites section to save the desired services</li>
                    </p>
                </section>
                {/* Content map */}
                <section className='flex flex-col items-center gap-4 sm:gap-6 w-[80vw] bg-white'>
                    <h3 className='project-subtitle'>Content map</h3>
                    <img src={contentMap} alt="lineout banner" className=' w-[80vw] rounded-2xl' />
                </section>
                {/* Lofi prototype */}
                <section className='flex flex-col items-center gap-4 sm:gap-6 w-[80vw] bg-gray-100 rounded-2xl p-4 justify-start'>
                    <h3 className='project-subtitle'>Lo-Fi prototype</h3>
                    <p className='project-description'>Before starting to build the wireframes I conducted a series
                        of user testing with paper prototypes which revealed some issues that resulted in some changes.</p>
                    <span className='user-quotes lg:w-[48%] xl:w-[32%] lg:h-[6rem] text-left bg-white'>
                        Some information including the instruction or help sentences need to be meor clear. E.g. In App suggestion area, service rating and search results.
                    </span>
                    <img src={lofiPrototype} alt="lineout banner" className=' w-[80vw] rounded-2xl border border-gray-200' />
                </section>
                {/* Wireframe */}
                <section className='flex flex-col items-center gap-4 sm:gap-6 w-[80vw] bg-white'>
                    <h3 className='project-subtitle'>Wireframe</h3>
                    <img src={wireframe} alt="lineout banner" className=' w-[80vw] rounded-2xl' />
                </section>
                {/* Hifi prototype */}
                <section className='flex flex-col items-center gap-4 sm:gap-6 w-[80vw] bg-gray-100 p-4 rounded-2xl mb-8'>
                    <h3 className='project-subtitle'>Hi-Fi prototype</h3>
                    <img src={hifiPrototype} alt="lineout banner" className=' w-[80vw] rounded-xl border border-gray-200' />
                    <img src={finalImage} alt="lineout banner" className=' w-[80vw] rounded-xl' />
                </section>
            </main>
            {/* Footer */}
            <Footer />
        </>
    )
}