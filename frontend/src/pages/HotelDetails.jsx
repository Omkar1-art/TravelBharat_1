import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import detailsData from "../utils/detailsData";
import imagesData from "../utils/imagesData";
import "../styles/HotelDetails.css";

function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const hotel = detailsData.hotels[id];

  // NEW
  const [selectedRoom, setSelectedRoom] = useState(
    hotel?.roomTypes?.[0]
  );

  const [guests, setGuests] = useState(1);
const [checkIn, setCheckIn] = useState("");
const [checkOut, setCheckOut] = useState("");

  if (!hotel) {
    return (
      <div className="hotel-page">
        <h1>Hotel Not Found</h1>
      </div>
    );
  }


  const handleFavorite = () => {
  const storedUser = localStorage.getItem("user");

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
    type: "hotel",
    name: hotel.name,
    slug: id,
    location: `${hotel.city}, ${hotel.state}`,
    rating: hotel.rating,
    category: "Luxury Hotel",
    state: hotel.state,
    description: hotel.description
  };

  oldFavorites.push(favoriteData);

  localStorage.setItem(
    "favorites",
    JSON.stringify(oldFavorites)
  );

  alert("Added To Favorites ❤️");
};

  const handleBooking = async () => {
  const storedUser = localStorage.getItem("user");

  if (!storedUser || storedUser === "undefined") {
    alert("Please Login First");
    navigate("/login");
    return;
  }

  const user = JSON.parse(storedUser);

  const bookingData = {
    userId: user._id,
    type: "hotel",

    hotelName: hotel.name,
    location: `${hotel.city}, ${hotel.state}`,

    roomType: selectedRoom.name,
guests: guests,
nights: 2,

checkIn: checkIn,
checkOut: checkOut,

    price: selectedRoom.price,
    breakfast: "Breakfast Included",
    status: "Confirmed"
  };

  try {
    await fetch(
      "https://travelbharat-backend.vercel.app/api/bookings/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(bookingData)
      }
    );

    alert("Hotel Booking Successful");
    navigate("/profile");

  } catch (error) {
    console.log(error);
    alert("Booking Failed");
  }
};

  return (
    <div className="hotel-page">

      <div className="hotel-bg"></div>

      {/* HEADER */}
      <div className="hotel-header">

        <div className="hotel-icon">
          🏨
        </div>

        <h1>
          {hotel.name}
        </h1>

        <button
  className="favorite-btn"
  onClick={handleFavorite}
>
  ❤️ Save To Favorites
</button>

        <p>
          Luxury Stay In {hotel.city}
        </p>

      </div>

      {/* ABOUT */}
      <div className="hotel-about-card">

        <div className="hotel-about-image">

  <img
    src={imagesData[id]}
    alt={hotel.name}
  />

</div>

        <div className="hotel-about-content">

          <div className="hotel-badge">
            {hotel.city}, {hotel.state}
          </div>

          <h2>
            About {hotel.name}
          </h2>

          <p>
            {hotel.description}
          </p>

          <div className="hotel-stats">

            <div className="stat-box">
              <h3>{hotel.rating}</h3>
              <span>Rating</span>
            </div>

            <div className="stat-box">
              <h3>{hotel.reviews}</h3>
              <span>Reviews</span>
            </div>

            <div className="stat-box">
              <h3>{hotel.rooms}</h3>
              <span>Rooms</span>
            </div>

            <div className="stat-box">
              <h3>24/7</h3>
              <span>Service</span>
            </div>

          </div>

        </div>

      </div>

      {/* ABOUT HOTEL */}
      <section className="hotel-section">

        <h2>Hotel Information</h2>

        <div className="info-box">

          <h3>Location</h3>
          <p>{hotel.city}, {hotel.state}</p>

          <h3>Description</h3>
          <p>{hotel.description}</p>

          <h3>Rating</h3>
          <p>⭐ {hotel.rating} ({hotel.reviews} Reviews)</p>

        </div>

      </section>

      {/* AMENITIES */}
      <section className="hotel-section">

        <h2>Amenities</h2>

        <div className="amenities-grid">

          {hotel.amenities.map((item,index)=>(

            <div
              className="amenity-card"
              key={index}
            >
              {item.name}
            </div>

          ))}

        </div>

      </section>

      {/* ROOM TYPES */}
      <section className="hotel-section">

        <h2>Room Types</h2>

        <div className="hotel-grid">

          {hotel.roomTypes.map((room,index)=>(

            <div
              className={`hotel-card ${
                selectedRoom?.name === room.name
                  ? "room-selected"
                  : ""
              }`}
              key={index}
              onClick={() => setSelectedRoom(room)}
            >

              <div className="card-image">

  <img
    src={imagesData[id]}
    alt={room.name}
  />

</div>

<div className="card-content">

  <h3>{room.name}</h3>

  <p className="room-price">
    💰 {room.price}
  </p>

  <div className="room-features">

    <p>
      🛏 {room.beds}
    </p>

    <p>
      👥 {room.guests} Guests
    </p>

    <p>
      🌆 {room.view}
    </p>

  </div>

</div>

            </div>

          ))}

        </div>

      </section>

      {/* NEARBY PLACES */}
      <section className="hotel-section">

        <h2>Nearby Attractions</h2>

        <div className="hotel-grid">

          {hotel.nearbyPlaces.map((place,index)=>(

            <div
              className="hotel-card"
              key={index}
            >

              <div className="card-image">

  <img
    src={
      imagesData[
        place.toLowerCase().replace(/\s/g,"-")
      ]
    }
    alt={place}
  />

</div>

              <div className="card-content">

                <h3>{place}</h3>

                <p>
                  Popular tourist attraction near the hotel.
                </p>

                <Link
                  className="tour-btn"
                  to={`/place/${place.toLowerCase().replace(/\s/g,"-")}`}
                >
                  View Place →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* BOOK */}
<section className="hotel-section">

  <div className="book-card">

    <h2>
      Ready To Stay?
    </h2>

    <p>
      Experience luxury hospitality and premium comfort at {hotel.name}.
    </p>

    <div className="booking-form">

      <div className="form-group">
        <label>Selected Room</label>
        <input
          type="text"
          value={selectedRoom?.name}
          readOnly
        />
      </div>

      <div className="form-group">
        <label>Guests</label>
        <select
  value={guests}
  onChange={(e) =>
    setGuests(e.target.value)
  }
>
  <option>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
</select>
      </div>

      <div className="form-group">
        <label>Check-In</label>
        <input
  type="date"
  value={checkIn}
  onChange={(e) =>
    setCheckIn(e.target.value)
  }
/>
      </div>

      <div className="form-group">
        <label>Check-Out</label>
        <input
  type="date"
  value={checkOut}
  onChange={(e) =>
    setCheckOut(e.target.value)
  }
/>
      </div>

      <div className="form-group checkbox-group">
        <label>
          <input type="checkbox" />
          Breakfast Included
        </label>
      </div>

    </div>

    <div className="price-preview">

      <h3>Total Price</h3>

      <p>
        {selectedRoom?.price}
      </p>

    </div>

    <button
      className="book-btn"
      onClick={handleBooking}
    >
      Confirm Booking →
    </button>

  </div>

</section>

    </div>
  );
}

export default HotelDetails;