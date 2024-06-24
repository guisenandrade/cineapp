import { useState, useEffect } from 'react'
import{Link} from 'react-router-dom'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Sobre() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    const[filmes,setFilmes] = useState([])

    useEffect( () =>{
      fetch(`https://api.themoviedb.org/3/movie/popular?api_key=7c572a9f5b3ba776080330d23bb76e1e`)
      .then(response => response.json())
      .then(response => setFilmes(response.results))
      .catch(error => console.log(error))
    },[])

    return (
        <>
        
          <h1 className='font-normal text-4xl mb-7 ml-28 text-red-700'>FAVORITOS</h1>
          <img className='w-14 h-14 absolute left-[285px] top-[90px]' src="../../public/coracao.png" alt="" />
          
          <div className='flex justify-center'>
          <div className='w-[1150px]'>
            <Slider {...settings}>
              {
                  filmes.map(
                      (filme) =>(
                          <div className="card" key={filme.id}>
                         
                          <img className='rounded-xl w-52 h-72 ml-28' src={`https://image.tmdb.org/t/p/w200/${filme.poster_path}`} alt={filme.title}/>
                          
                          <div className='bg-terciary-sena w-52 h-auto rounded-xl ml-28 mb-8'>
                          <Link to={`${filme.id}`}>
                            <div className='flex-row'>
                            <div className='flex flex-col'>
                            <h1 className='font-normal text-lg ml-4' key={filme.title}>{filme.title}</h1>   
                            <span className='font-normal text-quarter-sena ml-4' key={filme}>Nota do Filme : {filme.vote_average.toFixed()}</span>
                            </div>
                            <img className="w-10 p-1 ml-[160px]" src="../../public/coracao.png" alt="" />
                            </div>
                            

                          
                          </Link>
                          </div>
                        
                          
                      </div>
                  )
                  )
                }
            </Slider>

            <div className='flex justify-center'>
            <div className='w-[1150px]'>

            <Slider {...settings}>
              {
                  filmes.map(
                      (filme) =>(
                          <div className="card" key={filme.id}>
                         
                          <img className='rounded-xl w-52 h-72 ml-28' src={`https://image.tmdb.org/t/p/w200/${filme.poster_path}`} alt={filme.title}/>
                          
                          <div className='bg-terciary-sena w-52 h-auto rounded-xl ml-28 mb-8'>
                          <Link to={`${filme.id}`}>
                            <div className='flex-row'>
                            <div className='flex flex-col'>
                            <h1 className='font-normal text-lg ml-4' key={filme.title}>{filme.title}</h1>   
                            <span className='font-normal text-quarter-sena ml-4' key={filme}>Nota do Filme : {filme.vote_average.toFixed()}</span>
                            </div>
                            <img className="w-10 p-1 ml-[160px]" src="../../public/coracao.png" alt="" />
                            </div>
                            

                          
                          </Link>
                          </div>
                        
                          
                      </div>
                  )
                  )
                }
            </Slider>
            </div>
            </div>
          </div>
          </div>
          <div className='bg-secondary-sena h-[300px]'></div>
          </>
          
    )
}

export default Sobre;