import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Categories.css";

function Categories() {

  const navigate = useNavigate();

  const [searchInput,setSearchInput] = useState("");
  const [searchTerm,setSearchTerm] = useState("");
  const [showAll,setShowAll] = useState(false);

  const categories = [

  {
    id:"gateway-of-india",
    title:"Heritage",
    icon:"🏛",
    desc:"Historic monuments and cultural landmarks across India.",
    tag:"Popular",
    visitors:"12k+"
  },

  {
    id:"munnar",
    title:"Nature",
    icon:"🌿",
    desc:"Forests, waterfalls and peaceful green landscapes.",
    tag:"Trending",
    visitors:"9k+"
  },

  {
    id:"manali",
    title:"Adventure",
    icon:"⛰",
    desc:"Thrilling trekking, rafting and snow adventures.",
    tag:"Adventure",
    visitors:"15k+"
  },

  {
    id:"meenakshi-temple",
    title:"Religious",
    icon:"🛕",
    desc:"Spiritual journeys and famous temple destinations.",
    tag:"Sacred",
    visitors:"8k+"
  },

  {
    id:"ajanta-caves",
    title:"Ancient Caves",
    icon:"🪨",
    desc:"Explore ancient Indian cave architecture.",
    tag:"History",
    visitors:"5k+"
  },

  {
    id:"dharamshala",
    title:"Hill Stations",
    icon:"🏔",
    desc:"Beautiful hill stations with mountain views.",
    tag:"Hill",
    visitors:"13k+"
  },

  {
    id:"pahalgam",
    title:"Wildlife",
    icon:"🐅",
    desc:"Wildlife parks, forests and jungle adventures.",
    tag:"Wild",
    visitors:"6k+"
  },

  {
    id:"dal-lake",
    title:"Lake View",
    icon:"🚣",
    desc:"Boating and peaceful lake-side destinations.",
    tag:"Nature",
    visitors:"7k+"
  },

  {
    id:"marine-drive",
    title:"City Life",
    icon:"🌃",
    desc:"Nightlife, shopping and urban experiences.",
    tag:"Urban",
    visitors:"14k+"
  },

  {
    id:"rohtang-pass",
    title:"Road Trips",
    icon:"🚗",
    desc:"Best scenic highways for road trip lovers.",
    tag:"Drive",
    visitors:"6k+"
  },

  {
    id:"sonmarg",
    title:"Photography",
    icon:"📸",
    desc:"Best scenic places for amazing photography.",
    tag:"Photo",
    visitors:"3k+"
  },

  {
    id:"ooty",
    title:"Weekend Getaways",
    icon:"🎒",
    desc:"Short and refreshing weekend travel plans.",
    tag:"Weekend",
    visitors:"9k+"
  },

  {
    id:"gulmarg",
    title:"Snow Trips",
    icon:"❄",
    desc:"Winter holidays with snowfall and snow sports.",
    tag:"Winter",
    visitors:"10k+"
  },

  {
    id:"baga-beach",
    title:"Beaches",
    icon:"🏖",
    desc:"Relax and enjoy beautiful coastal destinations.",
    tag:"Beach",
    visitors:"11k+"
  },

  {
    id:"kovalam-beach",
    title:"Luxury Escapes",
    icon:"💎",
    desc:"Premium resorts and luxury holiday experiences.",
    tag:"Luxury",
    visitors:"4k+"
  }

];

  const handleSearch = () => {
    setSearchTerm(searchInput);
    setShowAll(false);
  };

  const filteredCategories = categories.filter((item)=>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleCategories = showAll
    ? filteredCategories
    : filteredCategories.slice(0,8);

  return (

    <div className="categories-page">

      <div className="categories-header">

        <p className="top-title">
          EXPLORE EXPERIENCES
        </p>

        <h1>
          Explore Categories
        </h1>

        <p className="sub-title">
          Find the best places and experiences based on your interests
        </p>

        {/* SEARCH */}

        <div className="search-container">

          <input
            type="text"
            placeholder="Search categories..."
            value={searchInput}
            onChange={(e)=>setSearchInput(e.target.value)}
          />

          <button
            className="search-btn"
            onClick={handleSearch}
          >
            Search
          </button>

        </div>

      </div>

      {/* CARDS */}

      <div
  className={`categories-grid ${
    visibleCategories.length === 1
      ? "single-card"
      : ""
  }`}
>

  {visibleCategories.map((item)=>(

    <div
      className="category-card"
      key={item.id}
    >

            <div className="card-top">

              <div className="category-badge">
                {item.tag}
              </div>

              <div className="visitor-count">
                👥 {item.visitors}
              </div>

            </div>

            <div className="category-icon">
              {item.icon}
            </div>

            <h2>
              {item.title}
            </h2>

            <p>
              {item.desc}
            </p>

            <div className="card-bottom">

              <span>
                ⭐ Top Experience
              </span>

            </div>

            <button
              className="explore-btn"
              onClick={() =>
                navigate(`/place/${item.id}`)
              }
            >
              Explore →
            </button>

          </div>

        ))}

      </div>

      {/* VIEW ALL */}

      {filteredCategories.length > 8 && (

        <div className="view-all-box">

          <button
            className="view-btn"
            onClick={() =>
              setShowAll(!showAll)
            }
          >
            {showAll ? "Show Less" : "View All"}
          </button>

        </div>

      )}

    </div>

  );

}

export default Categories;