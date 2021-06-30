// import _ from 'lodash';
import './style.css';
import { renderSideBar } from './sidebar'
import renderHome from './home'
import { project } from './project';
import { task, tasks } from './task'


const header = document.getElementById('header')
const content = document.getElementById('content')
content.classList.add('flex-container')

const left = document.createElement('div')
content.appendChild(left)
const right = document.createElement('div')
content.appendChild(right)

function headerTitle() {
  const element = document.createElement('div');
  const h1 = document.createElement('h1')
  h1.textContent = 'Todo-list'
  element.appendChild(h1)
  return element;
}
header.appendChild(headerTitle())

function renderContent() {
  left.innerHTML = ""
  right.innerHTML = ""
  left.appendChild(renderSideBar())
  right.appendChild(renderHome())
  readyAddProject()
  readyAddTask() 
  readyTasks()
}
renderContent()

function readyAddProject() {
  const btn = document.getElementById('addProjectBtn')
  btn.addEventListener('click', (e) => {
    btn.classList.add('hide')
    const projectFrom = document.getElementById('projectForm')
    projectFrom.classList.remove('hide')

    const addBtn = document.getElementById('addPBtn')
    addBtn.addEventListener('click', (e) => {
      const pojectTitle = document.getElementById('pinput').value
      const newProject = project(pojectTitle)
      newProject.addProject(newProject)
      projectFrom.classList.add('hide')
      btn.classList.remove('hide')
      renderContent()
    })
  })
}

function readyAddTask() {
  const btn = document.getElementById('addTaskBtn');
  btn.addEventListener('click', (e) => {
    btn.classList.add('hide')
    // const taskForm = document.getElementById('taskForm')
    taskForm.classList.remove('hide')

    const addBtn = document.getElementById('addTBtn')
    addBtn.addEventListener('click', (e) => {
      const taskTitle = document.getElementById('tinput').value
      const taskDescription = document.getElementById('description').value
      const newTask = task(taskTitle, taskDescription)
      newTask.addTask(newTask)
      taskForm.classList.add('hide')
      btn.classList.remove('hide')
      renderContent()
    })

  });
}

function readyTasks() {
  for (let i = 0; i < tasks.length; i++) {
    const btn = document.getElementById(`task${i}`)
    const li = document.getElementById(`li${i}`)
    const div = tasks[i].viewTask(tasks[i])
    div.classList.add('hide')
    li.after(div)

    btn.addEventListener('click', () => {
      if (tasks[i].expand === false) {
        div.classList.remove('hide')
        tasks[i].expand = true
      } else {
        div.classList.add('hide')
        tasks[i].expand = true
      }
    });
  }
}

function readyProjects() {

}

/* To-do
- Make tasks display details below their name when clicked on their name
- Connect tasks to their projects
- Connect checkbox to the task
- Make projects show their tasks on the right when clicked on them

- Add remaning features to tasks and projects
- Make better UI
*/