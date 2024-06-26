import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Sobre from './pages/Sobre.jsx'
import Contato from './pages/Contato.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import Filmes from './pages/Filmes.jsx'
import DetalhesFilmes from './pages/DetalhesFilme.jsx'

const router = createBrowserRouter(

  [
    {
      path: "/",
      element: <App/>,
      children:[
        {index:true, element:<Home/>},
        {path: "/:id", element:<DetalhesFilmes/>},
        {path:"filmes", element:<Filmes/>},
        {path: 'filmes/:id', element: <DetalhesFilmes/>},
        {path: 'sobre/:id', element: <DetalhesFilmes/>},
        {path:"sobre", element:<Sobre/>},
        {path:"contato", element:<Contato/>},
        {path:"*", element:<PageNotFound/>}
       
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
