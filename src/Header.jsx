import { Link } from "react-router-dom"
import './Header.css'

function Header() {

  //an example of an inline style for the nav tag for an initial layout - later additions, or 

  const navStyle = {
    display: "flex",
    justifyContent: "space-around",
    borderBottom: ".2rem solid black",
    padding: ".5rem",
    width: "90%",
    margin: "auto",
  };

  return (
    <header className="header-container">
      <h1>Wheely Smart</h1>
      <nav style={navStyle}>
        <Link to="/">
          <div>HOME</div>
        </Link>
        
      </nav>
    </header>
  );
}
  
  export default Header;