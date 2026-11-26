
const ProjectCard = ({projectObject}) => {
  return (
    <div className='p-5 flex flex-col gap-5 border border-accent rounded-lg shadow-[0_0_7px_rgba(209,255,92,0.4)]'>
      <img className="rounded-t-lg" src={projectObject.img} />
      <span className="text-3xl font-heading font-bold">{projectObject.projectName}</span>
      <span className="text-secondary">{projectObject.projectDesc}</span>
      <div className="flex gap-5 text-secondary">
        {projectObject.projectTech.map((item) => {
          return <span className="">{item}</span>
        })}
      </div>
      <div className="text-accent font-mono text-sm">{projectObject.id.toString().padStart(2, "0")}</div>
    </div>
  )
}

export default ProjectCard