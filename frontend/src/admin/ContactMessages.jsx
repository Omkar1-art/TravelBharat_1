import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Admin.css";

function ContactMessages() {
  const navigate = useNavigate();

  useEffect(() => {
    const adminAuth =
      localStorage.getItem("adminAuth");

    if (!adminAuth) {
      navigate("/admin/login");
    }
  }, []);

  const messages = [
    {
      name: "Omkar Sawant",
      email: "omkar@gmail.com",
      subject: "Hotel Booking Issue",
      message:
        "I am unable to book hotel in Mumbai."
    },
    {
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      subject: "Tourist Place Info",
      message:
        "Need more details about Goa beaches."
    },
    {
      name: "Priya Patil",
      email: "priya@gmail.com",
      subject: "Gallery Images",
      message:
        "Gallery images are not loading properly."
    },
    {
      name: "Amit Verma",
      email: "amit@gmail.com",
      subject: "Restaurant Booking",
      message:
        "Table booking confirmation not received."
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

          <button
            onClick={() =>
              navigate("/admin/manage-gallery")
            }
          >
            Manage Gallery
          </button>

          <button className="active">
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

          <h1>Contact Messages</h1>

          <p>
            View all user messages and support requests.
          </p>

        </div>

        <div className="messages-container">

          {messages.map((msg, index) => (
            <div
              className="message-card"
              key={index}
            >

              <div className="message-top">

                <h3>{msg.name}</h3>
                <span>{msg.email}</span>

              </div>

              <h4>{msg.subject}</h4>

              <p>{msg.message}</p>

              <div className="action-buttons">

                <button className="reply-btn">
                  Reply
                </button>

                <button className="delete-btn">
                  Delete
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </div>
  );
}

export default ContactMessages;