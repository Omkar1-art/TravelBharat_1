import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import imagesData from "../utils/imagesData";
import "../styles/Profile.css";

function Profile() {
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("user");

  const user =
    storedUser && storedUser !== "undefined"
      ? JSON.parse(storedUser)
      : null;

  const [bookings, setBookings] = useState([]);

  const savedPlaces = localStorage.getItem("favorites")
    ? JSON.parse(localStorage.getItem("favorites"))
    : [];

  const [showAllBookings, setShowAllBookings] = useState(false);
  const [showAllSaved, setShowAllSaved] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    const fetchBookings = async () => {
      try {
        const hotelRes =
          await fetch(
            `https://travelbharat-backend.vercel.app/api/bookings/user/${user._id}`
          );

        const restaurantRes =
          await fetch(
            `https://travelbharat-backend.vercel.app/api/restaurant-bookings/user/${user._id}`
          );

        const hotelData =
          await hotelRes.json();

        const restaurantData =
          await restaurantRes.json();

        setBookings([
          ...hotelData,
          ...restaurantData
        ]);

      } catch (error) {
        console.log(error);
      }
    };

    fetchBookings();

  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    alert("Logout Successful");
    navigate("/");
  };

  // FIXED
  const handleDeleteBooking = async (bookingId, type) => {
  try {
    if (type === "hotel") {
      await fetch(
        `https://travelbharat-backend.vercel.app/api/bookings/delete/${bookingId}`,
        {
          method: "DELETE"
        }
      );
    }

    if (type === "restaurant") {
      await fetch(
        `https://travelbharat-backend.vercel.app/api/restaurant-bookings/delete/${bookingId}`,
        {
          method: "DELETE"
        }
      );
    }

    const updatedBookings =
      bookings.filter(
        (item) => item._id !== bookingId
      );

    setBookings(updatedBookings);

    alert("Booking Deleted");

  } catch (error) {
    console.log(error);
    alert("Delete Failed");
  }
};

  return (
    <div className="profile-page">

      <div className="profile-header">
        <div className="profile-top-icon">👤</div>

        <h1>My Profile</h1>

        <div className="profile-line">
          <span></span> ❤ <span></span>
        </div>

        <p>
          Manage your bookings, favorites and travel journey
        </p>
      </div>

      <div className="profile-top">

        <div className="profile-avatar">
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <div className="profile-info">

          <h2>{user?.name}</h2>
          <p>{user?.email}</p>

          <div className="profile-extra">
            <span>📍 Mumbai, Maharashtra</span>
            <span>📅 Joined May 2026</span>
          </div>

          <p className="bio">
            Travel enthusiast | Exploring India, one journey at a time.
          </p>

          <button>Edit Profile</button>

        </div>

      </div>

      <div className="profile-body">

        <div className="sidebar">
          <div onClick={() => navigate("/profile")}>Overview</div>
          <div>My Bookings</div>
          <div>Favorites</div>
          <div>Recently Viewed</div>
          <div>Travel Plans</div>
          <div>Reviews & Ratings</div>
          <div>Settings</div>
          <div onClick={handleLogout}>Logout</div>
        </div>

        <div className="profile-right">

          <div className="stats">

            <div className="stat-box">
              <h3>{bookings.length}</h3>
              <p>Trips Completed</p>
            </div>

            <div className="stat-box">
              <h3>{savedPlaces.length}</h3>
              <p>Saved Places</p>
            </div>

            <div className="stat-box">
              <h3>14</h3>
              <p>Reviews Given</p>
            </div>

            <div className="stat-box">
              <h3>5</h3>
              <p>Upcoming Trips</p>
            </div>

          </div>

          <div className="double-section">

            {/* BOOKINGS */}
            <div className="box">

              <div className="box-head">
                <h3>Recent Bookings</h3>

                <button
                  onClick={() =>
                    setShowAllBookings(!showAllBookings)
                  }
                >
                  {showAllBookings ? "Show Less" : "View All"}
                </button>
              </div>

              <div className="scroll-box">

                {(showAllBookings
                  ? bookings
                  : bookings.slice(0, 4)
                ).map((item, index) => (

                  <div className="item-card" key={index}>

                    <div className="booking-img">

  <img
    src={
      imagesData[
        item.type === "hotel"
          ? item.hotelName.toLowerCase().replace(/\s/g,"-")
          : item.restaurantName.toLowerCase().replace(/\s/g,"-")
      ] || imagesData["maharashtra"]
    }
    alt={
      item.type === "hotel"
        ? item.hotelName
        : item.restaurantName
    }
  />

</div>

                    <div className="booking-content">

                      <h4>
                        {item.type === "hotel"
                          ? item.hotelName
                          : item.restaurantName}
                      </h4>

                      <p>
                        {item.type === "hotel"
                          ? item.roomType
                          : item.tableType}
                      </p>

                      <p>
                        {item.type === "hotel"
                          ? `${item.nights} Days, ${item.guests} Guests`
                          : `${item.guests} Guests`}
                      </p>

                      <span>
                        {item.type === "hotel"
                          ? `${item.checkIn} - ${item.checkOut}`
                          : `${item.checkIn} • ${item.time}`}
                      </span>

                      <p>{item.price}</p>

                      {item.breakfast && (
                        <p>{item.breakfast}</p>
                      )}

                    </div>

                    <div className="status">
                      {item.status}
                    </div>

                    <button
                      onClick={() =>
                          handleDeleteBooking(
                          item._id,
                          item.type
                                  )
                        }
                    >
                      Cancel
                    </button>

                  </div>

                ))}

              </div>

            </div>

            {/* SAVED */}
            <div className="box">

              <div className="box-head">
                <h3>Saved Places</h3>

                <button
                  onClick={() =>
                    setShowAllSaved(!showAllSaved)
                  }
                >
                  {showAllSaved ? "Show Less" : "View All"}
                </button>
              </div>

              <div className="scroll-box">

                {(showAllSaved
                  ? savedPlaces
                  : savedPlaces.slice(0, 3)
                ).map((item, index) => (

                  <div
                    className="saved-item"
                    key={index}
                    onClick={() => navigate("/favorites")}
                  >

                    <div className="saved-img">

  <img
    src={
      imagesData[item.slug] || imagesData["maharashtra"]
    }
    alt={item.name}
  />

</div>

                    <div className="saved-content">
                      <h4>{item.name}</h4>
                      <p>{item.location}</p>
                    </div>

                    <div className="saved-heart">❤</div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="bottom-banner">

        <h2>Ready for your next adventure?</h2>

        <p>
          Discover new places and create unforgettable memories.
        </p>

        <button onClick={() => navigate("/states")}>
          Explore Destinations ✈
        </button>

      </div>

    </div>
  );
}

export default Profile;