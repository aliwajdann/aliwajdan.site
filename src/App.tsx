// import Header from './Header'
import Secondheader from './secondheader'
import { Outlet } from 'react-router-dom'
import Footer from './Footer';


function App() {
 

  return ( 
    <>   
      {/* <Header /> */}
      <Secondheader />
      <Outlet />
      <Footer />
    </>
  )
}

export default App;
