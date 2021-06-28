let tasks = ['task1', 'task2', 'task3']

const task = (title, date, priority, description, completed) => {
  const addTask = (newTask) => {
    tasks.push(newTask)
  }
  const project = () => {}
  const changeTitle = () => {}
  const changeDate = () => {}
  const changePriotiry = () => {}
  const changeDescription = () => {}
  const changeCompleted = () => {}
  const removeTask = () => {}
  
  return {title, date, priority, description, completed, changeTitle, changeDate, 
    changePriotiry, changeDescription, changeCompleted, addTask, removeTask}
}

export { tasks, task } 