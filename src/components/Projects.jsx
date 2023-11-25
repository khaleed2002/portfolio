import Title from './Title'
import { projects } from '../data'
import ProjectCard from './ProjectCard'
const Projects = () => {
  return (
    <section className="py-16" id='projects'>
      <div className="align-element">
        <Title text="Web Creations" />
        <ul className="py-16 grid md:grid-cols-3 lg:grid-col-3 gap-8">
          {projects.map((project) => {
            return <ProjectCard key={project.id} {...project} />
          })}
        </ul>
      </div>
    </section>
  )
}
export default Projects
