import projects from '../assets/json/projects.json';
import ProjectItem from './ProjectItem';

function ProjectList() {
  return (
    <>
      <h2 id="projects"><i className="fa fa-briefcase"/> Projects</h2>
      
      <div className='project-list'>
        {projects.map((project) => {
          return (
            <ProjectItem key={project.name} project={project} />
          )
        })}
      </div>
    </>
  )
}

export default ProjectList;
