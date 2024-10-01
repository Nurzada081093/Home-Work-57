const ToolBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container">
        <a className="w-25 h-25 rounded-circle text-center p-0  ms-0" href="#">
          <img
            className="w-50 h-50 rounded-circle m-0 p-0"
            src="https://img.freepik.com/premium-vector/travel-world-trip-logo-around-wold_101884-1041.jpg"
            alt="travel-agency"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default ToolBar;
