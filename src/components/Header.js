import React from 'react';

const Header = (props) => {
    return(
        <div className="Header">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">RecipeMart.com</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/recipes">Recipes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            {props.auth.isAuthenticated() && 
            <li className="nav-item">
              <button className="nav-link btn btn-sm btn-primary" onClick={() => props.auth.logout()}>Logout</button>
          </li>}
          </ul>
        </div>
      </nav>
      </div>
    )
}

export default Header;