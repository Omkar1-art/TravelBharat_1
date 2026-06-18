import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css";

function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const handleAdminLogin = (e) => {
    e.preventDefault();

    if (
      email === "admin@travelbharat.com" &&
      password === "admin123"
    ) {
      localStorage.setItem(
        "adminAuth",
        "true"
      );

      navigate("/admin/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="admin-login-page">

      {/* LEFT SIDE */}
      <div className="admin-login-left">

        <div className="admin-brand">

          <h1>TravelBharat</h1>

          <p>
            Manage your complete tourism platform
            from one powerful admin panel.
          </p>

          <div className="admin-login-features">

            <div className="feature-box">
              <span>🌍</span>
              <p>Manage States & Cities</p>
            </div>

            <div className="feature-box">
              <span>🏨</span>
              <p>Manage Hotels</p>
            </div>

            <div className="feature-box">
              <span>📸</span>
              <p>Manage Gallery</p>
            </div>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="admin-login-right">

        <div className="admin-login-box">

          <h1>Admin Login</h1>

          <p>
            Login to access TravelBharat Admin Panel
          </p>

          <form onSubmit={handleAdminLogin}>

            <input
              type="email"
              placeholder="Enter Admin Email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <div className="password-box">

              <input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <button
                type="button"
                className="show-btn"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
              >
                {showPassword
                  ? "Hide"
                  : "Show"}
              </button>

            </div>

            <button
              type="submit"
              className="login-btn"
            >
              Login
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default AdminLogin;