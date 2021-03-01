import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

console.log('%cMarketing!', 'color:white;text-shadow:1px 1px blue;font-size: 30px')

const mount = el => {
  ReactDOM.render(
    <App />,
    el
  )
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing_dev_root')
  if (devRoot) {
    mount(devRoot)
  }
}

export { mount }
