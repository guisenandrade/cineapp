import data from '../../artigos.json'
import{Link} from 'react-router-dom'

function Sobre() {
    return (
        <>
        <h1 className='font-normal text-4xl mb-7 ml-28'> NOVOS NO CIMENA</h1>
        <div className="grid grid-cols-3">
            {
                 data.map(
                    (filme, index) =>(
                        <div className="card" key={index}>
                           
                            <img className='rounded-xl w-52 h-72 ml-28' src={filme.image}/>
                            
                            <div className='bg-terciary-sena  w-52 h-14 rounded-xl ml-28 mb-8'>
                            <Link to={`${filme.id}`}>
                            <h1 className='font-normal text-lg ml-4' key={filme.title}>{filme.title}</h1>
                            
                            <div className="tags">
                                {
                                    filme.tags.map( tag =>(
                                        <span className='font-normal text-quarter-sena ml-4' key={tag}>{tag}</span>
                                    ))
                                }
                            </div>
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

export default Sobre;