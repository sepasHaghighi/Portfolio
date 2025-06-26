// Imported components
import ProjectHeader from "./project-components/ProjectHeader"
import Footer from "../Home/Home-components/Footer"
// Imported icons
import githubIcon from '@/assets/github.png'
import figmaIcon from '@/assets/figma.png'
// Imported images
import pizzamizeBanner from "@/assets/Works/Pizzamize/Pizzamize-banner.png"
import persona1 from "@/assets/Works/Pizzamize/persona-1.png"
import persona2 from "@/assets/Works/Pizzamize/persona-2.png"
import persona3 from "@/assets/Works/Pizzamize/persona-3.png"
import informationArchitecture from "@/assets/Works/Pizzamize/Information-architecture-Pizzamize.png"
import treeJackTest from "@/assets/Works/Pizzamize/Treejack-test.png"
import wireframePizzamize from "@/assets/Works/Pizzamize/wireframe-pizzamize.png"
import hifiPrototype from "@/assets/Works/Pizzamize/Hifi-prototype.png"
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
                <section className='flex flex-col w-[80vw] bg-white gap-2 rounded-2xl'>
                    <h3 className='project-subtitle'>Why?</h3>
                    <p className='project-description'>Pizzamize is a restaurant aiming to promote food customization based on customers' taste preferences. The goal of this project is to design a website which not only attracts the potential target users by offering customization tools and services but also transfers the idea of both uniqueness and minimalism as the portal of a modern business.</p>
                </section>
                {/* Strategy definition */}
                <h2 className="project-section-title pizzamize">Strategy Definition</h2>
                <section className="flex lg:flex-row flex-col gap-4 justify-between sm:w-[80vw]">
                    {/* Business concept */}
                    <section className='flex flex-col items-center gap-4 p-4 rounded-2xl sm:gap-2 bg-gray-100  w-full lg:w-[32%]' >
                        <h3 className='project-subtitle'>Business concept</h3>
                        <p className='project-description'>I started working on this project by defining the business concepts first. Informations like which services would the restaurant offer its customers, the target audience and the elevator pitch were defined in this phase.</p>
                    </section>
                    {/* Services */}
                    <section className='flex flex-col items-center gap-4 p-4 rounded-2xl sm:gap-2 bg-gray-100 w-full lg:w-[32%]'>
                        <h3 className='project-subtitle'>Services</h3>
                        <p className='project-description'>What separates this restaurant from the competitors are the options it offers besides the ordinary services. Customers will be able to define their taste preferences ni their account so that the website can suggest them new dishes. Apart from that, users can customize the dishes based on their interests</p>
                    </section>
                    {/* Target audience */}
                    <section className='flex flex-col items-center gap-4 p-4 rounded-2xl sm:gap-2 bg-gray-100 w-full lg:w-[32%]'>
                        <h3 className='project-subtitle'>Target audience</h3>
                        <p className='project-description'>What separates this restaurant from the competitors are the options it offers besides the ordinary services.Customers will be able to define their taste preferences in their account so that the website can suggest them new dishes. Apart from that, users can customize the dishes based on their interests</p>
                    </section>
                </section>
                {/* Elevator pitch */}
                <section className='flex flex-col w-[80vw] gap-2 p-4 rounded-2xl bg-[#D15C4C]'>
                    <h3 className='project-description-white'>Pizza, just customized!
                        For when you're tired of having to choose from the same old menu.</h3>
                </section>
                {/* User research */}
                <h2 className="project-section-title pizzamize">User Research</h2>
                <section className="flex lg:flex-row flex-col gap-4 justify-between sm:w-[80vw]">
                    {/* Business concept */}
                    <section className='flex flex-col items-center gap-4 p-4 rounded-2xl sm:gap-2 bg-gray-100 w-full lg:w-[32%]' >
                        <h3 className='project-subtitle'>User characteristics</h3>
                        <p className='project-description'>
                            <span className="font-medium">
                                Personality and attitudes:
                            </span>
                            <br />
                            <span className="inline-block mb-4">
                                Adventerous, youthful, energetic, curious, playful
                            </span>
                            <br />
                            <span className="font-medium">
                                Values:
                            </span>
                            <br />
                            <span className="inline-block mb-4">
                                Open minded, liberal, optimistic, positive, creative
                            </span>
                            <br />
                            <span className="font-medium">
                                Lifestyles:
                            </span>
                            <br />
                            Active, Partier, Thinker, Peak experiences, Adventurer
                        </p>
                    </section>
                    {/* Persona */}
                    <section className='flex flex-col md:items-center xl:items-start items-start gap-4 p-4 rounded-2xl sm:gap-2 bg-gray-100 w-full lg:w-[32%]'>
                        <h3 className='project-subtitle'>Persona</h3>
                        <section className="flex lg:flex-col md:flex-row flex-col gap-4">
                            {/* Persona 1 */}
                            <section className="flex flex-row md:flex-col lg:flex-row gap-2">
                                <img src={persona1} alt="persona image" className='w-18 h-18 rounded-full' />
                                <p className="project-description">
                                    <span className="inline-block font-medium">
                                        Leila Monier (20)
                                    </span>
                                    <ul className="text-sm list-disc list-inside">
                                        <li>Student of art at George Town</li>
                                        <li>She would kill for unqiue experiences</li>
                                        <li>Originally from an artist family</li>
                                        <li>Enjoys strange looks and feelings</li>
                                    </ul>
                                </p>
                            </section>
                            {/* Persona 2 */}
                            <section className="flex flex-row md:flex-col lg:flex-row gap-2">
                                <img src={persona2} alt="persona image" className='w-18 h-18 rounded-full' />
                                <p className="project-description">
                                    <span className="inline-block font-medium">
                                        Shawn Smith (24)
                                    </span>
                                    <ul className="text-sm list-disc list-inside">
                                        <li>Student at business school</li>
                                        <li>Is known for his specific personality</li>
                                        <li>Loves uniquness</li>
                                        <li>Enjoys throwing party for his friends</li>
                                    </ul>
                                </p>
                            </section>
                            {/* Persona 3 */}
                            <section className="flex flex-row md:flex-col lg:flex-row gap-2">
                                <img src={persona3} alt="persona image" className='w-18 h-18 rounded-full' />
                                <p className="project-description">
                                    <span className="inline-block font-medium">
                                        Jasmin White (22)
                                    </span>
                                    <ul className="text-sm list-disc list-inside">
                                        <li>Studies Philanthropy</li>
                                        <li>Loves thinking about little details</li>
                                        <li>Enjoys talking about her feelings</li>
                                        <li>Nature enthusiast</li>
                                    </ul>
                                </p>
                            </section>
                        </section>
                    </section>
                    {/* User needs */}
                    <section className='flex flex-col sm:items-center xl:items-start items-start gap-4 p-4 rounded-2xl sm:gap-2 bg-gray-100 lg:w-[32%] w-full'>
                        <h3 className='project-subtitle'>User needs</h3>
                        <section className="flex lg:flex-col sm:flex-row flex-col gap-4">
                            <p className='project-description'>
                                <span className="font-medium">
                                    Restaurant customers:
                                </span>
                                <br />
                                <ul className="text-sm list-disc list-inside">
                                    <li>Find out if the restaurant delivers to their area</li>
                                    <li>Order food online</li>
                                    <li>Customize the ingredients based on interest</li>
                                    <li>Receive recipe suggestions based on preferences</li>
                                    <li>Save the favorite recipes</li>
                                    <li>Share favorite recipes</li>
                                </ul>
                            </p>
                            <p className="project-description">
                                <span className="font-medium">
                                    Restaurant owners:
                                </span>
                                <br />
                                <ul className="text-sm list-disc list-inside">
                                    <li>Sell food online and deliver it</li>
                                    <li>Provide a system for order customization</li>
                                    <li>Build a community for pizza lovers</li>
                                    <li>Communicate the idea of personal recipes</li>
                                    <li>Promote uniqueness as the goal of the business</li>
                                </ul>
                            </p>
                        </section>
                    </section>
                </section>
                {/* Information architecture */}
                <h2 className="project-section-title pizzamize">Information Architecture</h2>
                <section className='flex flex-col w-[80vw] bg-white gap-2 rounded-2xl'>
                    <h3 className='project-subtitle'>Site map</h3>
                    <p className='project-description'>Based no the information I'd gathered until this phase I started working on the sitemap.</p>
                    <img src={informationArchitecture} alt="Information architecture" />
                </section>
                <section className='flex flex-col w-[80vw] bg-white gap-2 rounded-2xl'>
                    <h3 className='project-subtitle'>Treejack test</h3>
                    <p className='project-description'>In order to test the structure of menus and the organization of information I conducted a Treejack test using Optimal Workshop. 40 users with ages between 20-40 participated in the test.</p>
                    <img src={treeJackTest} alt="Treejack test" />
                </section>
                {/* Outcomes */}
                <section className='flex flex-col w-[80vw] bg-gray-100 p-4 gap-2 rounded-2xl'>
                    <h3 className='project-subtitle'>Outcomes</h3>
                    <p className="project-description">
                        <li>Customers must be able to submit their favorite ingredients using the order menu and not only in the preferences section.</li>
                        <li>Most customers were not familiar with the concept of community forum in a restaurant context, so its name was changed to pizza lovers hub to convey the meaning</li>
                        <li>Customers must be able to track their order as soon as they land on the homepage.</li>
                    </p>
                </section>
                {/* User interface */}
                <h2 className="project-section-title pizzamize">User Interface</h2>
                <section className='flex flex-col w-[80vw] bg-white gap-2 rounded-2xl'>
                    <h3 className='project-subtitle'>Wireframe</h3>
                    <img src={wireframePizzamize} alt="Wireframe-Pizzamize" />
                </section>
                <section className='flex flex-col w-[80vw] bg-gray-100 p-4 gap-4 rounded-2xl mb-8'>
                    <h3 className='project-subtitle'>HiFi prototype</h3>
                    <img src={hifiPrototype} alt="Wireframe-Pizzamize" className="rounded-xl" />
                </section>

            </main>
            {/* Footer */}
            <Footer />
        </>
    )
}