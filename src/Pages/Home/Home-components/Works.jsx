// Projects' array
import { projectData } from "../../Projects/projectData"

// Component to create project tiles
function Tile(props) {
    return (
        <div className='tile w-auto rounded-lg transition-transform duration-300 hover:scale-105'>
            <a href={`/${props.title}`}><img className='tile-img rounded-xl w-full h-60 object-cover' src={props.img} alt='tile' /></a>
        </div>
    )
}

// List of projects returned as Tile components
const projectTiles = projectData.map((project) => {
    return <Tile key={project.id} title={project.title} img={project.img} />
})

// Component to create the Works section
export default function Works() {
    return (
        <div className='works w-[100%] h-[100vh] flex flex-col  justify-center gap-[10vh]' id="work">
            <section className="flex flex-col gap-0">
                <h2>WORK SHOWCASE.</h2>
                <p>Here are some of the projects I've worked on.</p>
            </section>
            <section className='grid grid-cols-2 gap-4'>
                {projectTiles}
            </section>
        </div>
    )
}