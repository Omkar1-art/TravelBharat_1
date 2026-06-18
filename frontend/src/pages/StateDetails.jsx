import { Link, useParams } from "react-router-dom";
import travelData from "../utils/travelData";
import imagesData from "../utils/imagesData";
import "../styles/StateDetails.css";

function StateDetails() {

  const { id } = useParams();

  const state = travelData.find(
    (item) => item.id === id
  );

  if (!state) {

    return (

      <div className="state-not-found">

        <h1>
          State Not Found
        </h1>

      </div>

    );

  }

  return (

    <div className="state-page">

      <div className="state-bg"></div>

      {/* HEADER */}

      <div className="state-header">

        <div className="state-icon">
          🇮🇳
        </div>

        <h1>
          {state.name}
        </h1>

        <div className="state-line">

          <span></span>

          ❤

          <span></span>

        </div>

        <p>
          Discover cities, foods, hotels and tourist places
        </p>

      </div>

      {/* ABOUT SECTION */}

      <div className="state-about-card">

        <div className="state-about-image">
  <img
    src={imagesData[state.id]}
    alt={state.name}
  />
</div>

        <div className="state-about-content">

          <div className="about-badge">
            Top Tourist Destination
          </div>

          <h2>
            About {state.name}
          </h2>

          <p>
            {state.description}
          </p>

          <p>
            {state.name} is one of India's most
            visited travel destinations. Tourists
            come here to explore culture, heritage,
            famous food, beautiful cities and
            breathtaking tourist attractions.
          </p>

          <p>
            Whether you are looking for adventure,
            family vacations, religious tourism,
            beaches, mountains or historical places,
            {state.name} has something for everyone.
          </p>

          <div className="state-stats">

            <div className="stat-box">

              <h3>
                {state.cities.length}
              </h3>

              <span>
                Cities
              </span>

            </div>

            <div className="stat-box">

              <h3>
                {state.places.length}
              </h3>

              <span>
                Places
              </span>

            </div>

            <div className="stat-box">

              <h3>
                {state.hotels.length}
              </h3>

              <span>
                Hotels
              </span>

            </div>

            <div className="stat-box">

              <h3>
                {state.foods.length}
              </h3>

              <span>
                Foods
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* CITIES */}

      <section className="state-section">

        <h2>
          Popular Cities
        </h2>

        <div className="state-grid">

          {state.cities.map((city,index)=>(

            <div
              className="tour-card"
              key={index}
            >

              <div className="tour-image">

  <img
    src={
      imagesData[
        city.toLowerCase().replace(/\s/g,"-")
      ]
    }
    alt={city}
  />

</div>

              <div className="tour-content">

                <div className="tour-tag">
                  Popular City
                </div>

                <h3>
                  {city}
                </h3>

                <div className="tour-location">
                  📍 {state.name}
                </div>

                <p>
                  Explore famous attractions,
                  local culture, shopping and
                  travel experiences in {city}.
                </p>

                <div className="tour-footer">

                  <span>
                    ⭐ 4.8 Rating
                  </span>

                  <span className="tour-type">
                    City
                  </span>

                </div>

                <Link
                  className="tour-btn"
                  to={`/city/${city.toLowerCase().replace(/\s/g,"-")}`}
                >
                  Explore City →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* FOODS */}

      <section className="state-section">

        <h2>
          Famous Foods
        </h2>

        <div className="state-grid">

          {state.foods.map((food,index)=>(

            <div
              className="tour-card"
              key={index}
            >

              <div className="tour-image">

  <img
    src={
      imagesData[
        food.toLowerCase().replace(/\s/g,"-")
      ]
    }
    alt={food}
  />

</div>

              <div className="tour-content">

                <div className="tour-tag food-tag">
                  Traditional Food
                </div>

                <h3>
                  {food}
                </h3>

                <div className="tour-location">
                  🍽 {state.name}
                </div>

                <p>
                  One of the most loved traditional
                  dishes enjoyed by locals and tourists.
                </p>

                <div className="tour-footer">

                  <span>
                    ⭐ 4.9 Rating
                  </span>

                  <span className="tour-type">
                    Food
                  </span>

                </div>

                <Link
                  className="tour-btn"
                  to={`/food/${food.toLowerCase().replace(/\s/g,"-")}`}
                >
                  View Food →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* HOTELS */}

      <section className="state-section">

        <h2>
          Popular Hotels
        </h2>

        <div className="state-grid">

          {state.hotels.map((hotel,index)=>(

            <div
              className="tour-card"
              key={index}
            >

              <div className="tour-image">

  <img
    src={
      imagesData[
        hotel.toLowerCase().replace(/\s/g,"-")
      ]
    }
    alt={hotel}
  />

</div>

              <div className="tour-content">

                <div className="tour-tag hotel-tag">
                  Luxury Stay
                </div>

                <h3>
                  {hotel}
                </h3>

                <div className="tour-location">
                  🏨 {state.name}
                </div>

                <p>
                  Premium accommodation with
                  excellent hospitality and
                  world-class facilities.
                </p>

                <div className="tour-footer">

                  <span>
                    ⭐ 4.8 Rating
                  </span>

                  <span className="tour-type">
                    Hotel
                  </span>

                </div>

                <Link
                  className="tour-btn"
                  to={`/hotel/${hotel.toLowerCase().replace(/\s/g,"-")}`}
                >
                  View Hotel →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* TOURIST PLACES */}

      <section className="state-section">

        <h2>
          Tourist Places
        </h2>

        <div className="state-grid">

          {state.places.map((place,index)=>(

            <div
              className="tour-card"
              key={index}
            >

              <div className="tour-image">

  <img
    src={
      imagesData[
        place.toLowerCase().replace(/\s/g,"-")
      ]
    }
    alt={place}
  />

</div>

              <div className="tour-content">

                <div className="tour-tag place-tag">
                  Must Visit
                </div>

                <h3>
                  {place}
                </h3>

                <div className="tour-location">
                  📍 {state.name}
                </div>

                <p>
                  One of the most famous tourist
                  attractions visited by travelers
                  every year.
                </p>

                <div className="tour-footer">

                  <span>
                    ⭐ 4.8 Rating
                  </span>

                  <span className="tour-type">
                    Attraction
                  </span>

                </div>

                <Link
                  className="tour-btn"
                  to={`/place/${place.toLowerCase().replace(/\s/g,"-")}`}
                >
                  View Details →
                </Link>

              </div>

            </div>

          ))}

        </div>

      </section>

    </div>

  );

}

export default StateDetails;