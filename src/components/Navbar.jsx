import {useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom'
import { useCart } from '../store/StoreContext';

const Navbar = ({onSearch}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [query, setQuery] = useState('');
    const { state } = useCart(); // Access cart state from the store
    const { cart } = state;
    const navigate = useNavigate();

    function toggleMenu(){
        setIsMenuOpen(!isMenuOpen)
    }

  // Handle search query changes
  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  // Handle form submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onSearch(query.trim().toLowerCase()); 
    };
    // Handle Logout
    const handleLogout = () => {
        localStorage.removeItem('user'); // Clear user data from localStorage
        navigate('/login'); // Redirect to login page
    };

  return (
    <>
        <nav className="navbar navbar-expand-lg border p-3">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to='/'>ACStore</NavLink>
                <button 
                className="navbar-toggler" 
                type="button" 
                onClick={toggleMenu}
                data-bs-toggle="collapse" 
                data-bs-target="#navbarColor04" 
                aria-controls="navbarColor04" 
                aria-expanded={isMenuOpen? "true":"false"}
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isMenuOpen?"show":""}`} id="navbarColor04">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                        <NavLink className="nav-link active" to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to='/shop'>Shop</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to='/about'>About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                    <form className="d-flex" onSubmit={handleSearchSubmit}>
                        <input className="form-control me-sm-2" type="search" placeholder="Search" value={query} onChange={handleSearchChange}/>
                        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    {/* cart links */}
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/cart'>
                                🛒{cart.length > 0 && <span className="badge bg-danger">{cart.length}</span>}
                            </NavLink>
                        </li>
                        {/* Check if user is logged in */}
                        {localStorage.getItem('user') ? (
                            <li className="nav-item">
                               <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
                            </li>
                        
                        ) : (
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">Login</NavLink>
                        </li>
                        )}

                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar
