import { useState, useEffect } from 'react'
import{Link} from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";

function Filmes() {

  const[filmes,setFilmes] = useState([])

  useEffect( () =>{
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e`)
    .then(response => response.json())
    .then(response => setFilmes(response.results))
    .catch(error => console.log(error))
  },[])

      return (
          <>
          <h1 className='font-normal text-4xl mb-7 ml-28'>MAIS ASSISTIDOS</h1>
          <div className="grid grid-cols-3">
              {
                 filmes.map(
                  (filme) =>(
                      <div className="card" key={filme.id}>
                         
                          <img className='rounded-xl w-52 h-72 ml-28' src={`https://image.tmdb.org/t/p/w200/${filme.poster_path}`} alt={filme.title}/>
                          
                          <div className='bg-terciary-sena w-52 h-auto rounded-xl ml-28 mb-8'>
                          <Link to={`${filme.id}`}>
                          <h1 className='font-normal text-lg ml-4' key={filme.title}>{filme.title}</h1>
                      
                          <span className='font-normal text-quarter-sena ml-4' key={filme}>Nota do Filme : {filme.vote_average.toFixed()}</span>

                                <FaRegHeart className='' />

                          
                          </Link>
                          </div>
                        
                          
                      </div>
                  )
              )
              }
         
          </div>
          </>
      )
}

export default Filmes;