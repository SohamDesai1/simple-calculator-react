import React from "react";
import './Navbar.css';
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="title">MemeIstaan</div>
        <div className="navbar-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Memes</a>
            </li>
            <li>
              <a href="/">Videos</a>
            </li>
            <li>
              <a href="/">GIFs</a>
            </li>
          </ul>
        </div>
        <div className="search-box">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="search">
          <form action="">
            {/*<input type="image" src="images/search.png" alt="" />*/}
          </form>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
