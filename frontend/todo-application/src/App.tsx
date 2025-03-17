import { Provider } from 'react-redux'
import { store } from './store/store'
import { Outlet } from 'react-router'
import Navbar from './components/Navbar'

function App () {
  return (
    <Provider store={store}>
      <div className='flex flex-col items-center justify-start h-screen w-screen'>
        <Navbar />
        <div className='grow w-full px-3 pt-3'>
          <Outlet />
        </div>
        {/* <TaskInput />
      <TaskList /> */}
      </div>
    </Provider>
  )
}

export default App
