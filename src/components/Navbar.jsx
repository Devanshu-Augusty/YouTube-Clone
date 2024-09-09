import { Link, useNavigate } from "react-router-dom";
import { AiFillYoutube } from 'react-icons/ai';
import { FaSearchengin } from 'react-icons/fa';
import './navbar.css';
import { useState } from "react";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();

    if(searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm('');
    }
  }

  return (
    <div className="nav">
      <div className="youtube-icon">
        <Link className="youtube-link" to="/">
          <AiFillYoutube />
        </Link>
      </div>
      <div className="search">
        <input type="text" placeholder="Search..."
          value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="icon" onClick={handleClick} ><FaSearchengin /></div>
      </div>
    </div>
  )
}

export default Navbar