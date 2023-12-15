import './App.css'
import Task from './componenst/Task'
import Header from './componenst/Header'
import TaskList from './componenst/TaskList'
import ContextProvider from './contexts/contextProvider'

function App() {


  return (
    <div className='container-app'>
    <ContextProvider>
    <Header/>
    <Task  />
    <TaskList />
    </ContextProvider>
    </div>
  )
}

export default App
