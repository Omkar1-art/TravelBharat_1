import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css";

function ManageGallery() {
  const navigate = useNavigate();

  useEffect(() => {
    const adminAuth =
      localStorage.getItem("adminAuth");

    if (!adminAuth) {
      navigate("/admin/login");
    }
  }, []);

  const galleryImages = [
    {
      title: "Gateway Of India",
      category: "Tourist Place"
    },
    {
      title: "Goa Beach",
      category: "Beach"
    },
    {
      title: "Kerala Backwaters",
      category: "Nature"
    },
    {
      title: "Taj Hotel Mumbai",
      category: "Hotel"
    },
    {
      title: "Marine Drive",
      category: "City View"
    },
    {
      title: "Munnar Hills",
      category: "Mountain"
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

          <button
            onClick={() =>
              navigate("/admin/manage-hotels")
            }
          >
            Manage Hotels
          </button>

          <button className="active">
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

          <h1>Manage Gallery</h1>

          <p>
            Upload, edit and manage all gallery images.
          </p>

        </div>

        <div className="gallery-top-bar">

          <button className="add-btn">
            Upload New Image
          </button>

        </div>

        <div className="admin-gallery-grid">

          {galleryImages.map((image, index) => (
            <div
              className="gallery-card"
              key={index}
            >

              <div className="gallery-image">
                Image
              </div>

              <div className="gallery-content">

                <h3>{image.title}</h3>

                <p>{image.category}</p>

                <div className="action-buttons">

                  <button className="edit-btn">
                    Edit
                  </button>

                  <button className="delete-btn">
                    Delete
                  </button>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default ManageGallery;