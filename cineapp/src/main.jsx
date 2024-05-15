import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import{createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(

  [
    {
      path: "/",
      element: <App/>,
      children:[
        {index:true, element:<Home/>},
        {path:"filmes", element:<Filmes/>},
        {path:"sobre", element:<Sobre/>},
        {path:"contato", element:<Contato/>},
        {path:"+", element:<PageNotFound/>}
       
      ]
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
