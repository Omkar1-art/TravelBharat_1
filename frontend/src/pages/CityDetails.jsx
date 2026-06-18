import { useParams, Link } from "react-router-dom";
import detailsData from "../utils/detailsData";
import imagesData from "../utils/imagesData";
import "../styles/CityDetails.css";

function CityDetails() {

  const { id } = useParams();

  const city =
    detailsData.cities[id];

  if (!city) {

    return (

      <div className="city-not-found">

        <h1>
          City Not Found
        </h1>

      </div>

    );

  }

  return (

    <div className="city-page">

      <div className="city-bg"></div>

      {/* HEADER */}

      <div className="city-header">

        <div className="city-icon">
          🏙
        </div>

        <h1>
          {id.replace(/-/g," ")}
        </h1>

        <div className="city-line">

          <span></span>

          ❤

          <span></span>

        </div>

        <p>
          Discover attractions, hotels, food and culture
        </p>

      </div>

      {/* ABOUT CITY */}

      <div className="city-about-card">

        <div className="city-about-image">

  <img
    src={imagesData[id]}
    alt={id}
  />

</div>

        <div className="city-about-content">

          <div className="city-badge">
            {city.state}
          </div>

          <h2>
            About {id.replace(/-/g," ")}
          </h2>

          <p>
            {city.description}
          </p>

          <p>
            {city.culture}
          </p>

          <div className="city-stats">

            <div className="stat-box">

              <h3>
                {city.places.length}
              </h3>

              <span>
                Attractions
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
                Top
              </h3>

              <span>
                Destination
              </span>

            </div>

            <div className="stat-box">

              <h3>
                ❤
              </h3>

              <span>
                Tourist Choice
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* HISTORY */}

      <section className="city-section">

        <h2>
          History & Culture
        </h2>

        <div className="info-box">

          <p>
            {city.history}
          </p>

          <br />

          <p>
            {city.culture}
          </p>

        </div>

      </section>

      {/* TOURIST PLACES */}

      <section className="city-section">

        <h2>
          Famous Places
        </h2>

        <div className="city-grid">

          {city.places.map((place,index)=>(

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

                <div className="tour-tag">
                  Must Visit
                </div>

                <h3>
                  {place}
                </h3>

                <div className="tour-location">
                  📍 {id.replace(/-/g," ")}
                </div>

                <p>
                  One of the most famous tourist attractions in the city.
                </p>

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

      {/* FOODS */}

<section className="city-section">

  <h2>
    Famous Foods
  </h2>

  <div className="city-grid">

    {
      Object.entries(detailsData.foods)
      .filter(
        ([key,food]) =>
        food.city.toLowerCase().replace(/\s/g,"-") === id
      )
      .map(([key,food])=>(

        <div
          className="tour-card"
          key={key}
        >

          <div className="tour-image">

  <img
    src={imagesData[key]}
    alt={food.name}
  />

</div>

          <div className="tour-content">

            <div className="tour-tag food-tag">
              Traditional Food
            </div>

            <h3>
              {food.name}
            </h3>

            <div className="tour-location">
              🍽 {food.city}
            </div>

            <p>
              {food.description}
            </p>

            <Link
              className="tour-btn"
              to={`/food/${key}`}
            >
              View Food →
            </Link>

          </div>

        </div>

      ))
    }

  </div>

</section>

      {/* HOTELS */}

      <section className="city-section">

  <h2>
    Popular Hotels
  </h2>

  <div className="city-grid">

    {
      Object.entries(detailsData.hotels)
      .filter(
        ([key,hotel]) =>
        hotel.city.toLowerCase().replace(/\s/g,"-") === id
      )
      .map(([key,hotel])=>(

        <div
          className="tour-card"
          key={key}
        >

          <div className="tour-image">

  <img
    src={imagesData[key]}
    alt={hotel.name}
  />

</div>

          <div className="tour-content">

            <div className="tour-tag hotel-tag">
              Luxury Stay
            </div>

            <h3>
              {hotel.name}
            </h3>

            <div className="tour-location">
              🏨 {hotel.city}
            </div>

            <p>
              {hotel.description}
            </p>

            <Link
              className="tour-btn"
              to={`/hotel/${key}`}
            >
              View Hotel →
            </Link>

          </div>

        </div>

      ))
    }

  </div>

</section>

      {/* TRAVEL TIPS */}

      <section className="city-section">

        <h2>
          Travel Tips
        </h2>

        <div className="tips-grid">

          <div className="tip-card">

            <h3>
              🌤 Best Time
            </h3>

            <p>
              {city.travelTips.bestTime}
            </p>

          </div>

          <div className="tip-card">

            <h3>
              💰 Budget
            </h3>

            <p>
              {city.travelTips.budget}
            </p>

          </div>

          <div className="tip-card">

            <h3>
              🚖 Transport
            </h3>

            <p>
              {city.travelTips.transport}
            </p>

          </div>

        </div>

      </section>

    </div>

  );

}

export default CityDetails;