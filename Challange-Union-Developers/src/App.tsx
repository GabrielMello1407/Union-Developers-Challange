import './App.css'
import {Outlet} from 'react-router-dom'
import Pages from './components/Pages'

function App() {
  return (
      <div className='App'>
        <div className="container">
        <Outlet/>
        </div>
      </div>
  )
}

export default App
