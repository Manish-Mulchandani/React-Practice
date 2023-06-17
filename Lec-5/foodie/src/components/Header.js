import React from "react";

const Header = () => {

  //const [search,setSearch] = useState("")

  return (
    <nav
      className="navbar bg-dark border-bottom border-bottom-dark navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid ms-4">
        <a href="/" className="navbar-brand">
          Foodie
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Restaraunts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
