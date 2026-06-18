import "../styles/Favorites.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import imagesData from "../utils/imagesData";

function Favorites() {
  const navigate = useNavigate();

  const storedUser = localStorage.getItem("user");

  const user =
    storedUser && storedUser !== "undefined"
      ? JSON.parse(storedUser)
      : null;

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const allFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    if (user) {
      const userFavorites = allFavorites.filter(
        (item) => item.userId === user._id
      );

      setFavorites(userFavorites);
    }
  }, []);

  const handleRemove = (id) => {
    const allFavorites =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const updatedFavorites =
      allFavorites.filter((item) => item.id !== id);

    localStorage.setItem(
      "favorites",
      JSON.stringify(updatedFavorites)
    );

    setFavorites(
      favorites.filter((item) => item.id !== id)
    );
  };

  const handleView = (item) => {
    if (item.type === "place") {
      navigate(`/place/${item.slug}`);
    }

    if (item.type === "hotel") {
      navigate(`/hotel/${item.slug}`);
    }

    if (item.type === "restaurant") {
      navigate(`/restaurant/${item.slug}`);
    }

    if (item.type === "food") {
      navigate(`/food/${item.slug}`);
    }
  };

  return (
    <div className="favorites-page">

      <div className="favorites-bg"></div>

      <div className="favorites-header">

        <span className="fav-icon">♡</span>

        <h1>Favorite Places</h1>

        <div className="line-design">
          <span></span>
          ❤️
          <span></span>
        </div>

        <p>
          Your saved places, ready for your next adventure
        </p>

      </div>

      <div className="favorites-grid">

        {favorites.length > 0 ? (
          favorites.map((item, index) => (

            <div
              className="favorite-card"
              key={index}
            >

              <div className="favorite-image">

  <img
    src={imagesData[item.slug]}
    alt={item.name}
  />

</div>

              <button
                className="heart-btn"
                onClick={() =>
                  handleRemove(item.id)
                }
              >
                ❤️
              </button>

              <div className="favorite-content">

                <div className="location-tag">
                  {item.state || item.type}
                </div>

                <h2>
                  {item.name}
                </h2>

                <p className="description">
                  {item.description}
                </p>

                <div className="card-footer">

                  <div className="review-text">
                    ⭐ {item.rating} (12.5k reviews)
                  </div>

                  <div className="category">
                    {item.category}
                  </div>

                </div>

                <button
                  className="details-btn"
                  onClick={() =>
                    handleView(item)
                  }
                >
                  View Details →
                </button>

              </div>

            </div>

          ))
        ) : (

          <>
            <div className="favorite-card">

              <div className="favorite-image">

  <img
    src={imagesData["maharashtra"]}
    alt="Maharashtra"
  />

</div>

              <button className="heart-btn">
                ❤️
              </button>

              <div className="favorite-content">

                <div className="location-tag">
                  Maharashtra
                </div>

                <h2>Maharashtra</h2>

                <p className="description">
                  Famous for Mumbai, forts, beaches and rich culture.
                </p>

                <div className="card-footer">

                  <div className="review-text">
                    ⭐ 4.9 (12.5k reviews)
                  </div>

                  <div className="category">
                    Trending
                  </div>

                </div>

                <button className="details-btn">
                  Explore State →
                </button>

              </div>

            </div>
          </>
        )}

      </div>

      <div className="more-section">

        <h2>🎒 More places to explore!</h2>

        <p>
          Keep exploring and add more places to your favorites.
        </p>

      </div>

    </div>
  );
}

export default Favorites;