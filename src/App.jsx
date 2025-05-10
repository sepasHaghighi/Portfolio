import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home"
import { projectData } from './Pages/Projects/projectData';
import ProjectTemplate from './Pages/Projects/ProjectTemplate'

const routes = projectData.map(project => {
    return <Route path={`/${project.title}`} element= {<ProjectTemplate project={project} />} />
})

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            {routes}
        </Routes>
    )
}