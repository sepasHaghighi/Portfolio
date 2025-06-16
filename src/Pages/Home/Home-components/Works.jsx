// Projects' array
import { projectData } from "../../Projects/projectData"

// Component to create project tiles
function Tile(props) {
    return (
        <a href={`/${props.title}`}>
            <div className='tile w-[30rem] h-[18.3125rem] p-4 bg-[#ffffff] shadow-xl rounded-2xl flex flex-col gap-4'>
                <section className="flex flex-row items-center justify-between">
                    <h5 className="text-2xl font-medium">{props.title}</h5>
                    <section className="flex flex-row gap-2 items-center">
                        <h6 className="text-lg">Organization:</h6>
                        <section className="flex flex-row gap-1 items-center">
                            <img src={props.organizationLogo} alt="organization logo" className="w-6 h-6" />
                            <span className="text-md">{props.organization}</span>
                        </section>
                    </section>
                </section>
                <section className="flex flex-row gap-2">
                    <img className='tile-img rounded-xl w-[11.25rem] h-[13.4375rem] object-cover' src={props.img} alt='tile' />
                    <section className="flex flex-col items-start gap-1 bg-[#F5F5F9] rounded-xl p-2 w-[16.25rem] h-[13.4375rem]">
                        <span className="text-sm text-left">{props.description}</span>
                        <h5 className="text-md text-left font-bold">what I did:</h5>
                        <section className="flex flex-row gap-2 flex-wrap">
                            {props.skills.map(skill => <span className='bg-[#E5E5EA] text-[#4F4F4F] text-sm py-0.5 px-1 rounded-md' key={skill}>{skill}</span>)}
                        </section>
                    </section>
                </section>
            </div>
        </a>
    )
}

// List of projects returned as Tile components
const projectTiles = projectData.map((project) => {
    return <Tile key={project.id} title={project.title} img={project.img} organizationLogo={project.organizationLogo} organization={project.organization} description={project.description} skills={project.skills} />
})

// Component to create the Works section
export default function Works() {
    return (
        <div className='works w-[100%] h-[90%] flex flex-col  justify-center gap-[10vh]' id="work">
            <section className="flex flex-col gap-0">
                <h2>WORK SHOWCASE.</h2>
                <p>Here are some of the projects I've worked on.</p>
            </section>
            <section className='flex flex-col gap-8'>
                {projectTiles}
            </section>
        </div>
    )
}