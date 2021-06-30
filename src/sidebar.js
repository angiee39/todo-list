import { projects } from './project'

let p = projects

const renderSideBar = () => {
  const div = document.createElement('div')
  div.setAttribute('id', 'sidebar')

  const h2 = document.createElement('h2')
  h2.textContent = "My Projects"
  div.appendChild(h2)

  const projects = document.createElement('div')
  projects.innerHTML = ""
  for (let i = 0; i < p.length; i++) {
    projects.innerHTML += `<ul> ${p[i].title} </ul>`
  }
  div.appendChild(projects)

  const btn = document.createElement('div')
  btn.setAttribute('id', 'addProjectBtn')
  btn.innerHTML = "+ add project"
  div.appendChild(btn)

  const projectForm = document.createElement('div')
  projectForm.setAttribute('id', 'projectForm')
  projectForm.classList.add('hide')

  const input = document.createElement('input')
  input.setAttribute('id', 'pinput')
  input.setAttribute('type', 'text')
  input.setAttribute('placeholder', 'Project name')
  input.setAttribute('autofocus', 'on')
  projectForm.appendChild(input)
  const button = document.createElement('button')
  button.setAttribute('id', 'addPBtn')
  button.textContent = "Add"
  projectForm.appendChild(button)

  div.appendChild(projectForm)

  return div
}

export { renderSideBar };