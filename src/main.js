// main.js
import './style.css'
import main from './pages/main.html?raw'

const routes = {
  '/': main,
  '/dashboard': '<h1>dashboard</h1>',
  '/contract': '<h1>contract</h1>',
  '/launch': '<h1>launch</h1>',
  '/orbit': '<h1>orbit</h1>',
}

function navigate(path) {
  history.pushState({}, '', path)
  document.querySelector('#app').innerHTML = routes[path] || '<h1>404</h1>'
}

document.addEventListener('click', (e) => {
  if (e.target.matches('a')) {
    e.preventDefault()
    navigate(e.target.getAttribute('href'))
  }
})

window.addEventListener('popstate', () => {
  navigate(location.pathname)
})

// inicializa
navigate(location.pathname)