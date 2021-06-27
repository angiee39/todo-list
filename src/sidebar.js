import projects from './project'
let p = projects

const sideBar = () => {
  const div = document.createElement('div')
  div.setAttribute('id', 'sidebar')

  const h2 = document.createElement('h2')
  h2.textContent = "My Projects"
  div.appendChild(h2)

  const projects = document.createElement('div')
  projects.innerHTML = ""
  for (let i = 0; i < p.length; i++) {
    projects.innerHTML += `<ul> ${p[i]} </ul>`
  }
  div.appendChild(projects)
  return div
}

export default sideBar