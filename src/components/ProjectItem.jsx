function ProjectItem({ project }) {
  return (
    <div className="project-item">
      <img src={project.thumbnail}/>
      <div>
        <div className="project-item-header d-flex justify-content-space-between">
          <a href={project.url} className="d-block flex-grow-1"><h3>{project.name}</h3></a>
          { project.sourceUrl ? (
            <a href={project.sourceUrl}>Source <i className="fa fa-arrow-up-right-from-square"/></a>
          ) : null }
        </div>
        <p>{project.description}</p>
      </div>
    </div>
  );
}

export default ProjectItem;