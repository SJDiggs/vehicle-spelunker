import { Link } from "react-router-dom"
import './Header.css'

function Header() {

 
return (
    
        <header className="relative" id="header-banner">
            <img src='Header_Banner1.png' alt="header-image" className="w-full h-40 object-cover" />
            <div className="absolute inset-y-0 left-0 flex flex-col items-start justify-center text-white text-shadow-lg pl-8">
                <Link to="/">
                    <h1 className="text-4xl font-bold mt-5 text-zinc-400 animate-zoom-in-once">
                    <span className="glow">Whee</span>
                    <span>ly Smart</span>
                    </h1>
                </Link>
                <h3 className="text-sm italic ml-20 font-semibold text-sky-300">...drive on better research

                </h3>
                <nav className="flex items-start mt-14 text-zinc-600">
                    <Link to="/" className="text-lg mr-2">HOME</Link>
                    <Link to="/about" className="text-lg ml-2">ABOUT</Link>
                </nav>
            </div>
        </header>

  );

}
  
  export default Header;