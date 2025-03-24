import Header from './Header'
import { Outlet } from 'react-router-dom'

function App() {
 

  return ( 
    <>   
      <Header />
      <Outlet />
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <nav className="p-4 flex justify-between">
          <h1 className="text-xl font-bold">My Portfolio</h1>
         
        </nav>
        <main className="p-4">
          <p>Welcome to my portfolio!</p>
        </main>
      </div>
    </>
  )
}

export default App;
