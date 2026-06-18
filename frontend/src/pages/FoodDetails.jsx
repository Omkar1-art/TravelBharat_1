import { Link, useParams, useNavigate } from "react-router-dom";
import detailsData from "../utils/detailsData";
import imagesData from "../utils/imagesData";
import "../styles/FoodDetails.css";

function FoodDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const food = detailsData.foods[id];
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
    type: "food",
    name: food.name,
    slug: id,
    location: `${food.city}, ${food.state}`,
    rating: "4.8",
    category: "Traditional Food",
    state: food.state,
    description: food.description
  };

  oldFavorites.push(favoriteData);

  localStorage.setItem(
    "favorites",
    JSON.stringify(oldFavorites)
  );

  alert("Food Added To Favorites ❤️");
};

  if (!food) {

    return (

      <div className="food-page">

        <h1>
          Food Not Found
        </h1>

      </div>

    );

  }

  return (

    <div className="food-page">

      <div className="food-bg"></div>

      {/* HEADER */}

      <div className="food-header">

        <div className="food-icon">
          🍽
        </div>

        <h1>
          {food.name}
        </h1>

        <button
  className="favorite-btn"
  onClick={handleFavorite}
>
  ❤️ Save To Favorites
</button>

        <p>
          Traditional Food Of {food.state}
        </p>

      </div>

      {/* ABOUT */}

      <div className="food-about-card">

        <div className="food-about-image">

  <img
    src={imagesData[id]}
    alt={food.name}
  />

</div>

        <div className="food-about-content">

          <div className="food-badge">
            {food.city}
          </div>

          <h2>
            About {food.name}
          </h2>

          <p>
            {food.description}
          </p>

          <p>
            {food.history}
          </p>

          <div className="food-stats">

            <div className="stat-box">
              <h3>
                {food.state}
              </h3>
              <span>
                State
              </span>
            </div>

            <div className="stat-box">
              <h3>
                {food.city}
              </h3>
              <span>
                City
              </span>
            </div>

            <div className="stat-box">
              <h3>
                {food.restaurants.length}
              </h3>
              <span>
                Restaurants
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

          </div>

        </div>

      </div>

      {/* INGREDIENTS */}

      <section className="food-section">

        <h2>
          Ingredients
        </h2>

        <div className="taste-grid">

          {food.ingredients.map((item,index)=>(

            <div
              key={index}
              className="taste-card"
            >
              🥘 {item}
            </div>

          ))}

        </div>

      </section>

      {/* TASTE */}

      <section className="food-section">

        <h2>
          Taste Profile
        </h2>

        <div className="taste-grid">

          {food.taste.map((item,index)=>(

            <div
              key={index}
              className="taste-card"
            >
              🌟 {item}
            </div>

          ))}

        </div>

      </section>

      {/* FAMOUS IN */}

      <section className="food-section">

        <h2>
          Famous In
        </h2>

        <div className="food-grid">

          <div className="food-card">

            <div className="card-image">

  <img
    src={
      imagesData[
        food.state.toLowerCase().replace(/\s/g,"-")
      ]
    }
    alt={food.state}
  />

</div>

            <div className="card-content">

              <h3>
                {food.state}
              </h3>

              <p>
                State famous for this dish.
              </p>

            </div>

          </div>

          <div className="food-card">

            <div className="card-image">

  <img
    src={
      imagesData[
        food.city.toLowerCase().replace(/\s/g,"-")
      ]
    }
    alt={food.city}
  />

</div>

            <div className="card-content">

              <h3>
                {food.city}
              </h3>

              <p>
                City where this food is very popular.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* RESTAURANTS */}

      <section className="food-section">

        <h2>
          Best Restaurants
        </h2>

        <div className="food-grid">

          {food.restaurants.map((restaurant,index)=>(

            <div
              className="food-card"
              key={index}
            >

              <div className="card-image">

  <img
    src={
      imagesData[
        restaurant.toLowerCase().replace(/\s/g,"-")
      ]
    }
    alt={restaurant}
  />

</div>

              <div className="card-content">

                <h3>
                  {restaurant}
                </h3>

                <p>
                  Famous place to try authentic {food.name}.
                </p>

                <Link
                  className="food-btn"
                  to={`/restaurant/${restaurant.toLowerCase().replace(/\s/g,"-")}`}
                >
                  View Restaurant →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>

  );

}

export default FoodDetails;