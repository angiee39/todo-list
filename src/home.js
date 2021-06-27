import tasks from './task'
let t = tasks;

const home = () => {
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
  return div
}

export default home