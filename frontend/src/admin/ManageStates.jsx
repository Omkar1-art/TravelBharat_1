import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css";

function ManageStates() {
  const navigate = useNavigate();

  useEffect(() => {
    const adminAuth =
      localStorage.getItem("adminAuth");

    if (!adminAuth) {
      navigate("/admin/login");
    }
  }, []);

  const states = [
    {
      name: "Maharashtra",
      cities: 18,
      hotels: 32
    },
    {
      name: "Goa",
      cities: 8,
      hotels: 21
    },
    {
      name: "Kerala",
      cities: 12,
      hotels: 25
    },
    {
      name: "Punjab",
      cities: 9,
      hotels: 15
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

          <button className="active">
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

          <h1>Manage States</h1>

          <p>
            Add, edit and manage all states
            of TravelBharat.
          </p>

        </div>

        <div className="admin-table-section">

          <div className="admin-table-card">

            <div className="admin-table-head">

              <h2>All States</h2>

              <button className="add-btn">
                Add New State
              </button>

            </div>

            <table className="admin-table">

              <thead>
                <tr>
                  <th>State Name</th>
                  <th>Total Cities</th>
                  <th>Total Hotels</th>
                  <th>Actions</th>
                </tr>
              </thead>

              <tbody>

                {states.map((state, index) => (
                  <tr key={index}>

                    <td>{state.name}</td>
                    <td>{state.cities}</td>
                    <td>{state.hotels}</td>

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

export default ManageStates;