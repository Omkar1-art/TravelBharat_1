import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css";

function ManageHotels() {
  const navigate = useNavigate();

  useEffect(() => {
    const adminAuth =
      localStorage.getItem("adminAuth");

    if (!adminAuth) {
      navigate("/admin/login");
    }
  }, []);

  const hotels = [
    {
      name: "Taj Palace",
      city: "Mumbai",
      state: "Maharashtra",
      rooms: 120,
      rating: "4.9"
    },
    {
      name: "Sea View Resort",
      city: "Goa",
      state: "Goa",
      rooms: 80,
      rating: "4.7"
    },
    {
      name: "Hilltop Residency",
      city: "Munnar",
      state: "Kerala",
      rooms: 65,
      rating: "4.8"
    },
    {
      name: "Royal Inn",
      city: "Pune",
      state: "Maharashtra",
      rooms: 55,
      rating: "4.6"
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

          <button
            onClick={() =>
              navigate("/admin/manage-tourist-places")
            }
          >
            Tourist Places
          </button>

          <button className="active">
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

          <h1>Manage Hotels</h1>

          <p>
            Add, edit and manage all hotel listings.
          </p>

        </div>

        <div className="admin-table-section">

          <div className="admin-table-card">

            <div className="admin-table-head">

              <h2>All Hotels</h2>

              <button className="add-btn">
                Add New Hotel
              </button>

            </div>

            <table className="admin-table">

              <thead>
                <tr>
                  <th>Hotel Name</th>
                  <th>City</th>
                  <th>State</th>
                  <th>Rooms</th>
                  <th>Rating</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                {hotels.map((hotel, index) => (
                  <tr key={index}>

                    <td>{hotel.name}</td>
                    <td>{hotel.city}</td>
                    <td>{hotel.state}</td>
                    <td>{hotel.rooms}</td>
                    <td>⭐ {hotel.rating}</td>

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

export default ManageHotels;