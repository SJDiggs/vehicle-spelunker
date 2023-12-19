import { Link } from "react-router-dom"
import './Header.css'

function Header() {

  //an example of an inline style for the nav tag for an initial layout - later additions, or 

//   const navStyle = {
//     display: "flex",
//     justifyContent: "space-around",
//     // borderBottom: ".2rem solid black",
//     padding: ".5rem",
//     width: "90%",
//     margin: "auto",
//   };

//   return (
    // <header className="header-container">
//         <header>
//             {/* <div class="bg-cover bg-center ..." style="background-image: url(src/images/Header_Banner1.png)"></div> */}
//             <img src='src/images/Header_Banner1.png' alt="header-image" class="w-full h-40" ></img>
//       <h1>Wheely Smart</h1>
//       <nav style={navStyle}>
//         <Link to="/">
//           <div>HOME</div>
//         </Link>
        
//       </nav>
//     </header>
//   );
return (
    <header className="relative">
     <Link to="/" className="absolute inset-0 flex items-center pl-8">
        <h1 className="text-4xl font-bold text-zinc-400 relative animate-zoom-in-once">
          <span className="glow">Whee</span>
          ly Smart
        </h1>
      </Link>
    <img src='src/images/Header_Banner1.png' alt="header-image" className="w-full h-40 object-cover" />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-shadow-lg">
      <nav className="flex justify-around mt-4">
        <Link to="/" className="text-xl">HOME</Link>
        {/* Add more navigation links as needed */}
      </nav>
    </div>
  </header>
  );
}
  
  export default Header;