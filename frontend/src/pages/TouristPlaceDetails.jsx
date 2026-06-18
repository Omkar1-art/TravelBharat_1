import { useParams, useNavigate } from "react-router-dom";
import detailsData from "../utils/detailsData";
import imagesData from "../utils/imagesData";
import "../styles/TouristPlaceDetails.css";

function TouristPlaceDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const place = detailsData.places[id];
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
    type: "place",
    name: place.name,
    slug: id,
    location: `${place.city}, ${place.state}`,
    rating: "4.8",
    category: "Tourist Place",
    state: place.state,
    description: place.description
  };

  oldFavorites.push(favoriteData);

  localStorage.setItem(
    "favorites",
    JSON.stringify(oldFavorites)
  );

  alert("Place Added To Favorites ❤️");
};

  if (!place) {

    return (

      <div className="place-not-found">

        <h1>
          Tourist Place Not Found
        </h1>

      </div>

    );

  }

  return (

    <div className="place-page">

      <div className="place-bg"></div>

      {/* HEADER */}

      <div className="place-header">

        <div className="place-icon">
          📍
        </div>

        <h1>
          {place.name}
        </h1>

        <button
  className="favorite-btn"
  onClick={handleFavorite}
>
  ❤️ Save To Favorites
</button>

        <p>
          Explore one of India's most beautiful tourist destinations
        </p>

      </div>

      {/* ABOUT */}

      <div className="place-main-card">

        <div className="place-image">
  <img
    src={imagesData[id]}
    alt={place.name}
  />
</div>

        <div className="place-content">

          <div className="place-tag">
            Must Visit Destination
          </div>

          <h2>
            About {place.name}
          </h2>

          <p>
            {place.description}
          </p>

          <div className="place-location">

            📍 {place.city}, {place.state}

          </div>

          <div className="place-stats">

            <div className="stat-box">

              <h3>
                Top
              </h3>

              <span>
                Attraction
              </span>

            </div>

            <div className="stat-box">

              <h3>
                India
              </h3>

              <span>
                Tourism
              </span>

            </div>

            <div className="stat-box">

              <h3>
                4.8
              </h3>

              <span>
                Rating
              </span>

            </div>

            <div className="stat-box">

              <h3>
                Popular
              </h3>

              <span>
                Destination
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* VISITOR INFO */}

      <div className="info-grid">

        <div className="info-box">

          <h3>
            🌤 Best Time
          </h3>

          <p>
            {place.bestTime}
          </p>

        </div>

        <div className="info-box">

          <h3>
            🎫 Entry Fee
          </h3>

          <p>
            {place.entryFee}
          </p>

        </div>

        <div className="info-box">

          <h3>
            🕒 Timings
          </h3>

          <p>
            {place.timings}
          </p>

        </div>

      </div>

      {/* HIGHLIGHTS */}

      <section className="highlights-section">

        <h2>
          Highlights
        </h2>

        <div className="highlight-grid">

          {place.highlights.map((item,index)=>(

            <div
              className="highlight-card"
              key={index}
            >

              {item}

            </div>

          ))}

        </div>

      </section>

      {/* LOCATION */}

      <section className="travel-section">

        <h2>
          Location
        </h2>

        <div className="travel-card">

          <p>

            <strong>City:</strong> {place.city}

          </p>

          <p>

            <strong>State:</strong> {place.state}

          </p>

        </div>

      </section>

      {/* TRAVEL TIPS */}

      <section className="travel-section">

        <h2>
          Travel Tips
        </h2>

        <div className="travel-card">

          <p>

            • Visit during {place.bestTime} for the best experience.

          </p>

          <p>

            • Carry comfortable footwear and a camera.

          </p>

          <p>

            • Reach early to avoid crowds and enjoy sightseeing.

          </p>

          <p>

            • Try nearby local food and explore local markets.

          </p>

        </div>

      </section>

      {/* WHY VISIT */}

      <section className="travel-section">

        <h2>
          Why Visit {place.name}?
        </h2>

        <div className="travel-card">

          <p>

            {place.name} is one of the most popular tourist attractions
            in {place.state}. It attracts visitors because of its
            historical importance, natural beauty, cultural value
            and unique travel experience.

          </p>

        </div>

      </section>

    </div>

  );

}

export default TouristPlaceDetails;