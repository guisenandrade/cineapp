import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function DetalhesFilme(){
    console.log(useParams())
    const {id} = useParams()
    
    const [filme,setFilme] = useState({})
    useEffect( () =>{

        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7c572a9f5b3ba776080330d23bb76e1e&language=pt-BR`)
        .then(response => response.json())
        .then(response => setFilme(response))
        .catch(error => console.log(error))
      },[])

    return (
        <>
        <div className="flex flex-row  m-4  rounded-lg w-[1500px]">
        <img className="ml-10  w-80 rounded-xl " src={`https://image.tmdb.org/t/p/w1280/${filme.poster_path}`}/> 
        <div className=" flex flex-col">
        <p className="font-normal text-4xl ml-4 text-center mb-10">{filme.title}</p>
        <p className="font-normal text-quarter-sena ml-4 w-[650px] text-center">{filme.overview}</p>
        </div>
        
            </div>
            <div className="bg-secondary-sena h-[94px]"></div>
            
            
       
        
        </>
        
    )
   
}

export default DetalhesFilme