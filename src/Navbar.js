import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>📔 KISHORE Blog</h1>
      <div className="links">
        <Link to="/" style={{
          fontWeight: 'bold'
        }}>🏠 Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#00aeff',
          borderRadius: '10px',
          fontWeight:'bold' 
        }}>New Blog</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;