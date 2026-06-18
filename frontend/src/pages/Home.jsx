import { useNavigate } from "react-router-dom";
import heroImage from "../assets/images/hero.jpg";
import imagesData from "../utils/imagesData";
import "../styles/Home.css";

function Home() {

  const navigate = useNavigate();

  const states = [
  {
    id: "tamilnadu",
    name: "Tamil Nadu"
  },
  {
    id: "goa",
    name: "Goa"
  },
  {
    id: "rajasthan",
    name: "Rajasthan"
  },
  {
    id: "kerala",
    name: "Kerala"
  }
];

  const categories = [
    "Adventure",
    "Beaches",
    "Heritage",
    "Wildlife",
    "Hill Stations"
  ];

  return (

    <div className="home-page">

      {/* HERO */}

      <section
  className="hero"
  style={{
    backgroundImage: `
      linear-gradient(
        rgba(0,0,0,.00),
        rgba(0,0,0,.00)
      ),
      url(${heroImage})
    `
  }}
>

        <div className="hero-overlay">

          <p className="hero-top-text">
            EXPLORE INCREDIBLE INDIA
          </p>

          <h1>
            Discover Places, <br />
            Create Memories
          </h1>

          <p className="hero-sub">
            From snow-capped mountains to serene backwaters,
            explore the beauty, culture and diversity of India.
          </p>

          {/* SEARCH BAR */}

          <div className="hero-search">

            <input
              type="text"
              placeholder="Where to go?"
            />

            <input
              type="text"
              placeholder="Select Date"
            />

            <input
              type="text"
              placeholder="Travellers"
            />

            <button>
              Search
            </button>

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="top-features">

        <div className="feature-card">
          Popular Destinations
        </div>

        <div className="feature-card">
          Trip Ideas
        </div>

        <div className="feature-card">
          Best Offers
        </div>

        <div className="feature-card">
          Travel Guide
        </div>

        <div className="feature-card">
          24/7 Support
        </div>

      </section>

      {/* DESTINATIONS */}

      <section className="section">

        <div className="section-head">

          <h2>
            Popular Destinations
          </h2>

          <button onClick={() => navigate("/states")}>
            View All →
          </button>

        </div>

        <div className="home-grid">

          {states.map((item, index) => (

            <div
              className="home-card"
              key={index}
            >

              <div className="home-image">
  <img
    src={imagesData[item.id]}
    alt={item.name}
  />
</div>

              <div className="home-content">

                <span className="state-tag">
                  {item.name}
                </span>

                <h3>
                  {item.name}
                </h3>

                <p>
                  Explore the beauty and culture of {item.name}.
                </p>

                <button
                  onClick={() => navigate("/states")}
                >
                  Explore Now →
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>

      {/* CATEGORIES */}

      <section className="section">

        <div className="section-head">

          <h2>
            Explore by Category
          </h2>

          <button onClick={() => navigate("/categories")}>
            View All →
          </button>

        </div>

        <div className="category-row">

          {categories.map((item, index) => (

  <div
    className="category-box"
    key={index}
    onClick={() => navigate("/categories")}
  >
    {item}
  </div>

))}

        </div>

      </section>

      {/* WHY US */}

      <section className="why-us">

        <p className="why-top">
          WHY TRAVEL WITH US
        </p>

        <h2>
          Your Journey, Our Priority
        </h2>

        <div className="why-grid">

          <div>Handpicked Places</div>
          <div>Best Price Guarantee</div>
          <div>Trusted by Travelers</div>
          <div>Easy Booking</div>

        </div>

      </section>

      {/* NEWSLETTER */}

      <section className="newsletter">

        <div className="newsletter-left">

          <h2>
            Let's Travel Together
          </h2>

          <p>
            Subscribe and get travel updates and offers.
          </p>

        </div>

        <div className="newsletter-right">

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>
            Subscribe
          </button>

        </div>

      </section>

    </div>

  );
}

export default Home;