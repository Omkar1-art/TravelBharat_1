import { Link } from "react-router-dom";
import { useState } from "react";
import imagesData from "../utils/imagesData";
import "../styles/States.css";

function States() {

  const states = [

    {
      id:"maharashtra",
      image: imagesData["maharashtra"],
      name:"Maharashtra",
      description:"Famous for Mumbai, forts, beaches and rich culture.",
      rating:"4.9",
      reviews:"12.5k",
      tag:"Popular"
    },

    {
      id:"goa",
      image: imagesData["goa"],
      name:"Goa",
      description:"Golden beaches, nightlife and water sports.",
      rating:"4.8",
      reviews:"11.2k",
      tag:"Beach"
    },

    {
      id:"kerala",
      image: imagesData["kerala"],
      name:"Kerala",
      description:"Backwaters, greenery and peaceful destinations.",
      rating:"4.9",
      reviews:"9.8k",
      tag:"Nature"
    },

    {
      id:"himachal",
      name:"Himachal Pradesh",
      image: imagesData["himachal"],
      description:"Snowy mountains and beautiful hill stations.",
      rating:"4.8",
      reviews:"8.6k",
      tag:"Mountain"
    },

    {
      id:"tamilnadu",
      name:"Tamil Nadu",
      image: imagesData["tamilnadu"],
      description:"Ancient temples and cultural heritage.",
      rating:"4.7",
      reviews:"7.4k",
      tag:"Heritage"
    },

    {
      id:"jammu-kashmir",
      name:"Jammu & Kashmir",
      image: imagesData["jammu-kashmir"],
      description:"Paradise on Earth with stunning valleys.",
      rating:"5.0",
      reviews:"14.2k",
      tag:"Top Rated"
    },

    {
      id:"rajasthan",
      name:"Rajasthan",
      image: imagesData["rajasthan"],
      description:"Royal palaces, deserts and majestic forts.",
      rating:"4.8",
      reviews:"9.1k",
      tag:"Royal"
    },

    {
      id:"punjab",
      name:"Punjab",
      image: imagesData["punjab"],
      description:"Food, culture and warm hospitality.",
      rating:"4.7",
      reviews:"6.8k",
      tag:"Culture"
    },

    {
      id:"uttarakhand",
      name:"Uttarakhand",
      image: imagesData["uttarakhand"],
      description:"Spiritual places and Himalayan beauty.",
      rating:"4.8",
      reviews:"8.3k",
      tag:"Spiritual"
    },

    {
      id:"karnataka",
      name:"Karnataka",
      image: imagesData["karnataka"],
      description:"Technology, heritage and nature together.",
      rating:"4.7",
      reviews:"7.7k",
      tag:"Trending"
    }

  ];

  const [search,setSearch] = useState("");
  const [showAll,setShowAll] = useState(false);

  const filteredStates = states.filter((state)=>
    state.name.toLowerCase().includes(search.toLowerCase())
  );

  const visibleStates = showAll
    ? filteredStates
    : filteredStates.slice(0,6);

  return (

    <div className="states-page">

      <div className="states-bg"></div>

      <div className="states-header">

        <div className="states-icon">
          🇮🇳
        </div>

        <h1>Explore Indian States</h1>

        <div className="states-line">
          <span></span>
          ❤
          <span></span>
        </div>

        <p>
          Discover India's most beautiful destinations,
          culture and tourism experiences.
        </p>

      </div>

      <div className="search-box-state">

        <input
          type="text"
          placeholder="Search State..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />

        <button
  className="search-btn"
  onClick={() => setSearch(search)}
>
  Search
</button>

      </div>

      <div className="states-grid">

        {visibleStates.map((state)=>(

          <div
            className="state-card"
            key={state.id}
          >

            <div className="state-image">

              <img
  src={state.image}
  alt={state.name}
  className="state-img"
/>

              <button className="heart-btn">
                ❤
              </button>

            </div>

            <div className="state-content">

              <div className="state-tag">
                {state.tag}
              </div>

              <h2>{state.name}</h2>

              <p>
                {state.description}
              </p>

              <div className="state-footer">

                <div className="rating">
                  ⭐ {state.rating}
                  <span>
                    ({state.reviews} reviews)
                  </span>
                </div>

                <div className="popular-badge">
                  Trending
                </div>

              </div>

              <Link
                to={`/state/${state.id}`}
                className="state-btn"
              >
                Explore State →
              </Link>

            </div>

          </div>

        ))}

      </div>

      <div className="view-all-section">

        <button
          className="view-all-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll
            ? "Show Less States"
            : "View All States"}
        </button>

      </div>

      <div className="more-states">

        <h2>
          🌍 More States To Explore!
        </h2>

        <p>
          Discover India's hidden gems and
          unforgettable travel experiences.
        </p>

      </div>

    </div>

  );
}

export default States;