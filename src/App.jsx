import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/Home"
import { projectData } from './Pages/Projects/projectData';
import ProjectTemplate from './Pages/Projects/ProjectTemplate'
import Lineout from './Pages/Projects/Lineout';
import Pizzamize from './Pages/Projects/Pizzamize';

// const routes = projectData.map(project => {
//     return <Route path={`/${project.title}`} element= {<ProjectTemplate project={project} />} />
// })

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/lineout" element={<Lineout />} />
            <Route path="/pizzamize" element={<Pizzamize />} />
            {/* {routes} */}
        </Routes>
    )
}