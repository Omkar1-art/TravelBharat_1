import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css";

function AdminDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const adminAuth =
      localStorage.getItem("adminAuth");

    if (!adminAuth) {
      navigate("/admin/login");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    navigate("/admin/login");
  };

  return (
    <div className="admin-page">

      {/* SIDEBAR */}
      <div className="admin-sidebar">

        <div className="admin-logo">
          <h2>TravelBharat</h2>
          <p>Admin Panel</p>
        </div>

        <div className="admin-menu">

          <button
            className="active"
            onClick={() =>
              navigate("/admin/dashboard")
            }
          >
            Dashboard
          </button>

          <button
            onClick={() =>
              navigate("/admin/manage-states")
            }
          >
            Manage States
          </button>

          <button
            onClick={() =>
              navigate("/admin/manage-cities")
            }
          >
            Manage Cities
          </button>

          <button
            onClick={() =>
              navigate("/admin/manage-tourist-places")
            }
          >
            Tourist Places
          </button>

          <button
            onClick={() =>
              navigate("/admin/manage-hotels")
            }
          >
            Manage Hotels
          </button>

          <button
            onClick={() =>
              navigate("/admin/manage-gallery")
            }
          >
            Manage Gallery
          </button>

          <button
            onClick={() =>
              navigate("/admin/contact-messages")
            }
          >
            Contact Messages
          </button>

          <button
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>

      </div>

      {/* CONTENT */}
      <div className="admin-content">

        <div className="admin-header">

          <h1>Admin Dashboard</h1>

          <p>
            Manage TravelBharat website content,
            bookings, users and gallery.
          </p>

        </div>

        {/* DASHBOARD STATS */}

        <div className="dashboard-grid">

          <div
            className="dashboard-card"
            onClick={() =>
              navigate("/admin/manage-states")
            }
          >
            <h2>29</h2>
            <p>Total States</p>
          </div>

          <div
            className="dashboard-card"
            onClick={() =>
              navigate("/admin/manage-cities")
            }
          >
            <h2>128</h2>
            <p>Total Cities</p>
          </div>

          <div
            className="dashboard-card"
            onClick={() =>
              navigate("/admin/manage-tourist-places")
            }
          >
            <h2>324</h2>
            <p>Tourist Places</p>
          </div>

          <div
            className="dashboard-card"
            onClick={() =>
              navigate("/admin/manage-hotels")
            }
          >
            <h2>94</h2>
            <p>Total Hotels</p>
          </div>

          <div
            className="dashboard-card"
            onClick={() =>
              navigate("/admin/manage-gallery")
            }
          >
            <h2>420</h2>
            <p>Gallery Images</p>
          </div>

          <div
            className="dashboard-card"
            onClick={() =>
              navigate("/admin/contact-messages")
            }
          >
            <h2>16</h2>
            <p>Contact Messages</p>
          </div>

        </div>

        {/* QUICK ACTION */}

        <div className="admin-table-section">

          <div className="admin-table-card">

            <div className="admin-table-head">
              <h2>Quick Actions</h2>
            </div>

            <div className="dashboard-grid">

              <div
                className="dashboard-card"
                onClick={() =>
                  navigate("/admin/manage-states")
                }
              >
                <h2>+</h2>
                <p>Add New State</p>
              </div>

              <div
                className="dashboard-card"
                onClick={() =>
                  navigate("/admin/manage-cities")
                }
              >
                <h2>+</h2>
                <p>Add New City</p>
              </div>

              <div
                className="dashboard-card"
                onClick={() =>
                  navigate("/admin/manage-hotels")
                }
              >
                <h2>+</h2>
                <p>Add New Hotel</p>
              </div>

              <div
                className="dashboard-card"
                onClick={() =>
                  navigate("/admin/manage-gallery")
                }
              >
                <h2>+</h2>
                <p>Upload Gallery</p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;