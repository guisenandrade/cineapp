import{Link} from'react-router-dom'

function Navbar() {
    return (
<nav>
  <ul className='flex gap-3'>
    <li><Link to ="/">HOME</Link></li>
    <li><Link to ="filmes">FILMES</Link></li>
    <li><Link to ="sobre">FAVORITOS</Link></li>
  </ul>
</nav>
       
      );
}

export default Navbar;