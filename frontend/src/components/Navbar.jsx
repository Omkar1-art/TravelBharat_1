import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  let user = null;

  try {
    const storedUser = localStorage.getItem("user");

    if (
      storedUser &&
      storedUser !== "undefined" &&
      storedUser !== "null"
    ) {
      user = JSON.parse(storedUser);
    }
  } catch (error) {
    user = null;
    localStorage.removeItem("user");
  }

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logout Successful");

    navigate("/");
  };

  return (
    <nav className="navbar">

      {/* LOGO */}
      <div className="logo">
        <span className="logo-orange">Travel</span>
        <span className="logo-dark">Bharat</span>
        <span className="logo-plane">✈</span>
      </div>

      {/* MENU */}
      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/states">States</Link>
        </li>

        <li>
          <Link to="/categories">Categories</Link>
        </li>

        <li>
          <Link to="/gallery">Gallery</Link>
        </li>

        <li>
          <Link to="/favorites">Favorites</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/contact">Contact</Link>
        </li>

        {user && (
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        )}

      </ul>

      {/* BUTTONS */}
      <div className="nav-auth">

        {!user ? (
          <>
            <Link
              to="/login"
              className="login-btn"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="signup-btn"
            >
              Signup
            </Link>
          </>
        ) : (
          <button
            className="signup-btn"
            onClick={handleLogout}
          >
            Logout
          </button>
        )}

      </div>

    </nav>
  );
}

export default Navbar;