import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import imagesData from "../utils/imagesData";
import "../styles/RestaurantDetails.css";

function RestaurantDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const restaurantName =
    id?.replace(/-/g," ") || "Britannia & Co";

  const [selectedTable, setSelectedTable] =
    useState("Table for 2");

  const [guests, setGuests] =
    useState(2);

  const [date, setDate] =
    useState("");

  const [time, setTime] =
    useState("");

  const tableOptions = [
    {
      name: "Table for 2",
      price: "₹500"
    },
    {
      name: "Table for 4",
      price: "₹1000"
    },
    {
      name: "Family Table",
      price: "₹1800"
    }
  ];

  const handleFavorite = () => {
  const storedUser =
    localStorage.getItem("user");

  if (!storedUser || storedUser === "undefined") {
    alert("Please Login First");
    navigate("/login");
    return;
  }

  const user = JSON.parse(storedUser);

  const oldFavorites =
    JSON.parse(localStorage.getItem("favorites")) || [];

  const favoriteData = {
    id: Date.now(),
    userId: user._id,
    type: "restaurant",
    name: restaurantName,
    slug: id,
    location: "India",
    rating: "4.8",
    category: "Restaurant",
    state: "India",
    description:
      "Popular restaurant known for authentic food and dining."
  };

  oldFavorites.push(favoriteData);

  localStorage.setItem(
    "favorites",
    JSON.stringify(oldFavorites)
  );

  alert("Restaurant Added To Favorites ❤️");
};

  const handleBooking = async () => {
  const storedUser =
    localStorage.getItem("user");

  if (!storedUser || storedUser === "undefined") {
    alert("Please Login First");
    navigate("/login");
    return;
  }

  const user = JSON.parse(storedUser);

  const selectedData =
    tableOptions.find(
      (table) => table.name === selectedTable
    );

  const bookingData = {
    userId: user._id,
    type: "restaurant",

    restaurantName: restaurantName,
    tableType: selectedTable,
    guests: guests,

    checkIn: date,
    time: time,

    price: selectedData.price,
    status: "Confirmed"
  };

  try {
    await fetch(
      "https://travelbharat-backend.vercel.app/api/restaurant-bookings/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookingData)
      }
    );

    alert("Table Booked Successfully");
    navigate("/profile");

  } catch (error) {
    console.log(error);
    alert("Booking Failed");
  }
};

  return (
    <div className="restaurant-page">

      <div className="restaurant-bg"></div>

      {/* HEADER */}
      <div className="restaurant-header">

        <div className="restaurant-icon">
          🍽
        </div>

        <h1>{restaurantName}</h1>

        <button
  className="favorite-btn"
  onClick={handleFavorite}
>
  ❤️ Save To Favorites
</button>

        <p>
          Discover authentic food, ambience and dining experiences
        </p>

      </div>

      {/* ABOUT */}
      <div className="restaurant-banner-card">

        <div className="restaurant-banner-image">

  <img
    src={imagesData[id]}
    alt={restaurantName}
  />

</div>
        <div className="restaurant-banner-content">

          <div className="restaurant-tag">
            Top Rated Restaurant
          </div>

          <h2>
            About {restaurantName}
          </h2>

          <p>
            {restaurantName} is one of the most
            popular restaurants known for authentic
            cuisine, quality service and memorable
            dining experiences.
          </p>

          <p>
            The restaurant attracts food lovers
            from across India and is highly rated
            for taste, ambience and hospitality.
          </p>

          <div className="restaurant-stats">

            <div className="stat-box">
              <h3>4.8</h3>
              <span>Rating</span>
            </div>

            <div className="stat-box">
              <h3>2.4k</h3>
              <span>Reviews</span>
            </div>

            <div className="stat-box">
              <h3>₹800</h3>
              <span>Avg Cost</span>
            </div>

            <div className="stat-box">
              <h3>Family</h3>
              <span>Friendly</span>
            </div>

          </div>

        </div>

      </div>

      {/* POPULAR DISHES */}
      <section className="restaurant-section">

        <h2>Popular Dishes</h2>

        <div className="restaurant-grid">

          <div className="restaurant-card">
            <div className="card-image">

  <img
    src={imagesData["vada-pav"]}
    alt="Vada Pav"
  />

</div>
            <div className="card-content">
              <div className="card-badge">
                Bestseller
              </div>
              <h3>Vada Pav</h3>
              <p>
                Mumbai's iconic street food loved
                by locals and tourists.
              </p>
            </div>
          </div>

          <div className="restaurant-card">
            <div className="card-image">

  <img
    src={imagesData["misal-pav"]}
    alt="Misal Pav"
  />

</div>
            <div className="card-content">
              <div className="card-badge">
                Popular
              </div>
              <h3>Misal Pav</h3>
              <p>
                Spicy Maharashtrian delicacy
                served with fresh pav.
              </p>
            </div>
          </div>

          <div className="restaurant-card">
            <div className="card-image">

  <img
    src={imagesData["modak"]}
    alt="Modak"
  />

</div>
            <div className="card-content">
              <div className="card-badge">
                Traditional
              </div>
              <h3>Modak</h3>
              <p>
                Famous sweet dish associated
                with Lord Ganesha.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* BOOK TABLE ADVANCED */}
      <section className="restaurant-section">

        <div className="booking-card">

          <h2>
            Reserve Your Table
          </h2>

          <p>
            Select table, guests and time
          </p>

          <div className="booking-inputs">

  <div className="booking-input-box">
    <label>Selected Table</label>
    <select
      value={selectedTable}
      onChange={(e) =>
        setSelectedTable(e.target.value)
      }
    >
      {tableOptions.map((table,index)=>(
        <option key={index}>
          {table.name}
        </option>
      ))}
    </select>
  </div>

  <div className="booking-input-box">
    <label>Guests</label>
    <input
      type="number"
      value={guests}
      min="1"
      max="10"
      onChange={(e)=>
        setGuests(e.target.value)
      }
    />
  </div>

  <div className="booking-input-box">
    <label>Date</label>
    <input
      type="date"
      value={date}
      onChange={(e)=>
        setDate(e.target.value)
      }
    />
  </div>

  <div className="booking-input-box">
    <label>Time</label>
    <input
      type="time"
      value={time}
      onChange={(e)=>
        setTime(e.target.value)
      }
    />
  </div>

</div>

          <div className="booking-summary">

            <h3>Booking Summary</h3>

            <p>{selectedTable}</p>
            <p>{guests} Guests</p>
            <p>{date}</p>
            <p>{time}</p>

            <p>
              {
                tableOptions.find(
                  (table)=>table.name===selectedTable
                )?.price
              }
            </p>

            <p>Confirmed</p>

          </div>

          <button
            className="booking-btn"
            onClick={handleBooking}
          >
            Book Table →
          </button>

        </div>

      </section>

    </div>
  );
}

export default RestaurantDetails;