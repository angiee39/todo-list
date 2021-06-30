let projects = []

const project = title => {
  const addProject = (newProject) => {
    projects.push(newProject)
  };
  const changeTitle = (title) => {};
  const removeProject = (title) => {};

  return {title, addProject, changeTitle, removeProject}
}

export { projects, project }