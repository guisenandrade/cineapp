import Navbar from "./Navbar";

function Header() {
    return ( 
        <header className="flex bg-primary-sena text-white p-4 mb-4 text-3xl justify-between font-normal">
            <span className="font-titulo text-5xl">CINEFLIX</span>

            <Navbar/>
        </header>
     );
}

export default Header;