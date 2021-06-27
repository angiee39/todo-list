import _ from 'lodash';
import './style.css';
import sideBar from './sidebar'
import home from './home'

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


function sidebarContent() {
  const element = sideBar()
  return element
}
left.appendChild(sidebarContent())

function homeContent() {
  const element = home()
  return element
}
right.appendChild(homeContent())
