import MyPDFViewer from "./project-components/PDFViewer"
import emailIcon from '@/assets/email.png'
import linkedinIcon from '@/assets/linkedin.png'
import figmaIcon from '@/assets/figma.png'
import githubIcon from '@/assets/github.png'

export default function ProjectTemplate(props) {
    return (
        <>
            <nav id="header" className=" bg-white sticky top-0 pt-12 pb-10 h-12 w-full flex justify-between items-center border-b border-b-gray-200">
                <section id="back">
                    <a href="/" className="flex flex-row gap-2 items-center">
                        <span className="material-symbols-rounded">
                            arrow_back
                        </span>
                        <span>Back</span>
                    </a>
                </section>
                <section id="web-title"><h3 className="font-light">Portfolio - Sepas Haghighi</h3></section>
                <section id="contact" className="flex flex-row gap-4">
                    <a href="mailto:Haghighi.sepas@gmail.com" target="_blank"><img src={emailIcon} alt="email" /></a>
                    <a href="https://www.linkedin.com/in/sepas-haghighi/" target="_blank"><img src={linkedinIcon} alt="linkedin" /></a>
                </section>
            </nav>
            <div id="project-head" className="flex flex-row justify-between w-[80vw] sticky top-28 sm:w-[95vw]">
                <h3 id="project-title" className="text-left font-normal">{props.project.title}</h3>
                <section id="project-links" className="flex flex-row gap-4 sm:gap-8 items-center">
                    {props.project.figma !== "" && <a href={props.project.figma} target="blank" id="figma-link"><img src={figmaIcon} alt="Figma" className="min-w-5 sm:w-10" /></a>}
                    {props.project.github !== "" && <a href={props.project.github} target="blank" id="github-link"><img src={githubIcon} alt="Github" className="min-w-5 sm:w-5" /></a>}
                    {props.project.liveDemo !== "" && <a href={props.project.liveDemo} target="blank" id="liveDemo-link" className="whitespace-nowrap">Live Demo</a>}
                </section>
            </div>
            {props.project.pdf !== "#" && <div id="project-brochure">
                <MyPDFViewer pdfLink={props.project.pdf} />
            </div>}

        </>
    )
}