import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import store from './Store/Store.tsx'
import { Provider } from 'react-redux'
import Components from './Pages/Components.tsx'
import Home from './Pages/Home.tsx'
import Showcase from './Pages/Showcase.tsx'
import About from './Pages/About.tsx'
import Contact from './Pages/Contact.tsx'
import Services from './Pages/Services.tsx'
import { Route, RouterProvider,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Faq from './Pages/Faq.tsx'
import PlanetPage from './Pages/PlanetPage.tsx'
import ScrollPage from './Pages/ScrollPage.tsx'
import GalleryPage from './Pages/GalleryPage.tsx'
import { ProductConfigurator } from './Pages/ProductConfigPage.tsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="components" element={<Components />} />
      <Route path="showcase" element={<Showcase />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="services" element={<Services />} />
      <Route path="faq" element={<Faq />} />
      <Route path="planet" element={<PlanetPage />} />
      <Route path="gallery" element={<GalleryPage />} />
      <Route path="scroll" element={<ScrollPage />} />
      <Route path="productsconfig" element={<ProductConfigurator />} />
    </Route>

  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
<Provider store={store}>
  <RouterProvider router={router}>
  </RouterProvider>
  </Provider>
  </StrictMode>,
)
