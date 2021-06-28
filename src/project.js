let projects = ['project1', 'project2', 'project3']

const project = title => {
  const addProject = (newProject) => {
    projects.push(newProject)
  };
  const changeTitle = (title) => {};
  const removeProject = (title) => {};

  return {title, addProject, changeTitle, removeProject}
}

export { projects, project }