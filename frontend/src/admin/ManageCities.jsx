import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css";

function ManageCities() {
  const navigate = useNavigate();

  useEffect(() => {
    const adminAuth =
      localStorage.getItem("adminAuth");

    if (!adminAuth) {
      navigate("/admin/login");
    }
  }, []);

  const cities = [
    {
      name: "Mumbai",
      state: "Maharashtra",
      places: 14,
      hotels: 18
    },
    {
      name: "Pune",
      state: "Maharashtra",
      places: 8,
      hotels: 10
    },
    {
      name: "Panaji",
      state: "Goa",
      places: 12,
      hotels: 15
    },
    {
      name: "Kochi",
      state: "Kerala",
      places: 9,
      hotels: 11
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

          <button className="active">
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

          <h1>Manage Cities</h1>

          <p>
            Add, edit and manage all cities
            inside states.
          </p>

        </div>

        <div className="admin-table-section">

          <div className="admin-table-card">

            <div className="admin-table-head">

              <h2>All Cities</h2>

              <button className="add-btn">
                Add New City
              </button>

            </div>

            <table className="admin-table">

              <thead>
                <tr>
                  <th>City Name</th>
                  <th>State</th>
                  <th>Tourist Places</th>
                  <th>Hotels</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                {cities.map((city, index) => (
                  <tr key={index}>

                    <td>{city.name}</td>
                    <td>{city.state}</td>
                    <td>{city.places}</td>
                    <td>{city.hotels}</td>

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

export default ManageCities;