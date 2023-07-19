import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <div id="navbar"><Link to={`/red`} className="navLink">Red</Link>
      <Link to={`/blue`} className="navLink">Blue</Link>
      <Link to={`/`} className="navLink">Home</Link>
    </div>
  )
}



export default Navbar;