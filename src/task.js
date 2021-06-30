let tasks = [];

const task = (title, description, date, priority, completed) => {
  const addTask = (newTask) => {
    tasks.push(newTask)
  }
  const viewTask = (task) => {
    const div = document.createElement('div')
    const ttl = document.createElement('div')
    ttl.textContent = `Title: ${task.title}`
    div.appendChild(ttl)
    const dsc = document.createElement('div')
    dsc.textContent = `Description: ${task.description}`
    div.appendChild(dsc)
    return div
  }
  // const display = false
  const project = () => {}
  const changeTitle = () => {}
  const changeDate = () => {}
  const changePriotiry = () => {}
  const changeDescription = () => {}
  const changeCompleted = () => {}
  const removeTask = () => {}
  const expand = false
  
  return {title, viewTask, date, priority, description, completed, changeTitle, changeDate, 
    changePriotiry, changeDescription, changeCompleted, addTask, removeTask, expand}
}

export { tasks, task } 