import { tasks } from './task'
let t = tasks;

const renderHome = () => {
  const div = document.createElement('div')
  div.setAttribute('id', 'home')

  const h2 = document.createElement('h2')
  h2.textContent = "Project 1"
  div.appendChild(h2)

  const tasks = document.createElement('div')
  tasks.innerHTML = ""
  for (let i = 0; i < t.length; i++) {
    tasks.innerHTML += `<ul> ${t[i]} </ul>`
  }
  div.appendChild(tasks)

  const btn = document.createElement('div')
  btn.setAttribute('id', 'addTaskBtn')
  btn.innerHTML = "+ add task"
  div.appendChild(btn)

  const taskForm = document.createElement('div')
  taskForm.setAttribute('id', 'taskForm')
  taskForm.classList.add('hide')

  const input = document.createElement('input')
  input.setAttribute('id', 'tinput')
  input.setAttribute('type', 'text')
  input.setAttribute('placeholder', 'Task name')
  input.setAttribute('autofocus', 'on')
  taskForm.appendChild(input)
  const button = document.createElement('button')
  button.setAttribute('id', 'addTBtn')
  button.textContent = "Add"
  taskForm.appendChild(button)

  div.appendChild(taskForm)

  return div
}

export default renderHome