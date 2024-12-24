import Header from './Header'
import { Outlet } from 'react-router-dom'


// import Tailwindbar from './Components/Tailwindbar'

function App() {

  return ( 
    <>   
      <Header />
      <Outlet />
    </>
  )
}

export default App
