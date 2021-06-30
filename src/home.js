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
    tasks.innerHTML += `<ul class="flex" id="li${i}"><input id="taskCheck${i}"type="checkbox">
    <div id="task${i}">${t[i].title}</div></ul>`
  }
  div.appendChild(tasks)

  const btn = document.createElement('div')
  btn.setAttribute('id', 'addTaskBtn')
  btn.innerHTML = "+ add task"
  div.appendChild(btn)

  const taskForm = document.createElement('div')
  taskForm.setAttribute('id', 'taskForm')
  taskForm.classList.add('hide')

  const title = document.createElement('input')
  title.setAttribute('id', 'tinput')
  title.setAttribute('type', 'text')
  title.setAttribute('placeholder', 'Task name')
  title.setAttribute('autofocus', 'on')
  taskForm.appendChild(title)

  const description = document.createElement('input')
  description.setAttribute('id', 'description')
  description.setAttribute('type', 'text')
  description.setAttribute('placeholder', 'Description')
  taskForm.appendChild(description)

  const button = document.createElement('button')
  button.setAttribute('id', 'addTBtn')
  button.textContent = "Add"
  taskForm.appendChild(button)

  div.appendChild(taskForm)

  return div
}

export default renderHome