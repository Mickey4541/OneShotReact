# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



# How browser parses react code?

- Compilation : boy to girl,,,high level to machine code.

- transpilation : water to ice,  process of converting code from one programming language or version to another, typically from a high-level language to another high-level language.


- browser understand html, css and js. It doesn't understand jsx. So, we need translator. The translator name is Babel.

- jsx is a modern javascript. Browser doesn't understand it. To convert modern js to older js , babel is used to do it. Older js is understood by browser. So, babel is used to do it. Babel is a transpilation.



- hamile javascript code ra jsx code yesari lekhnu parxa:

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
>>>>>>>>>>>
function App() {
  const [count, setCount] = useState(0)
  # yaha nera js garni::::
  const name = "Rajan"; 
  # return ko bich maa react garni::
  return (
    <>
      <h1>Hello React {1+1}</h1>
      <h1>How are you?? {name}</h1>
    </>
  )
}

export default App

# Routing in React:::
- react doesn't support routing, we can bring it from npm.

- in npm, there is a react-router-dom, we need it for routing.

- for this command is: - npm install react-router-dom

- after this, inside app.jsx, import:
import {BrowserRouter, Routes, Route} from 'react-router-dom'

- and then, this:
 return (
    <BrowserRouter>
      <Routes>
          <Route/>
      </Routes>
    </BrowserRouter>
  )




- To make homepage and aboutpage:
 return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<h1>Homepage</h1>}/>
          <Route path='/about' element={<h1>About page</h1>}/>
      </Routes>
    </BrowserRouter>
  )

# Hooks::::::::::::::::::::::::::::::::

- useeffect, usestate, useref