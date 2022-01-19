import React from 'react';
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <div>
             <Link to="/home"><li>Home</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="blog"> <li>Blog</li></Link>
        </div>
    );
};

export default Header;