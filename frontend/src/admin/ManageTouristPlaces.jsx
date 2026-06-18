import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css";

function ManageTouristPlaces() {
  const navigate = useNavigate();

  useEffect(() => {
    const adminAuth =
      localStorage.getItem("adminAuth");

    if (!adminAuth) {
      navigate("/admin/login");
    }
  }, []);

  const places = [
    {
      name: "Gateway Of India",
      city: "Mumbai",
      state: "Maharashtra",
      rating: "4.8"
    },
    {
      name: "Marine Drive",
      city: "Mumbai",
      state: "Maharashtra",
      rating: "4.7"
    },
    {
      name: "Baga Beach",
      city: "Goa",
      state: "Goa",
      rating: "4.9"
    },
    {
      name: "Munnar Hills",
      city: "Munnar",
      state: "Kerala",
      rating: "4.8"
    }
  ];

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

          <button className="active">
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

          <h1>Manage Tourist Places</h1>

          <p>
            Add, edit and manage all tourist places.
          </p>

        </div>

        <div className="admin-table-section">

          <div className="admin-table-card">

            <div className="admin-table-head">

              <h2>All Tourist Places</h2>

              <button className="add-btn">
                Add New Place
              </button>

            </div>

            <table className="admin-table">

              <thead>
                <tr>
                  <th>Place Name</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Rating</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                {places.map((place, index) => (
                  <tr key={index}>

                    <td>{place.name}</td>
                    <td>{place.city}</td>
                    <td>{place.state}</td>
                    <td>⭐ {place.rating}</td>

                    <td>
                      <div className="action-buttons">

                        <button className="edit-btn">
                          Edit
                        </button>

                        <button className="delete-btn">
                          Delete
                        </button>

                      </div>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ManageTouristPlaces;