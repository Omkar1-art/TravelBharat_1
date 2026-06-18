import { useState } from "react";
import { useNavigate } from "react-router-dom";
import imagesData from "../utils/imagesData";
import "../styles/Gallery.css";

function Gallery() {

  const navigate = useNavigate();

  const [searchInput,setSearchInput] = useState("");
  const [searchTerm,setSearchTerm] = useState("");
  const [showAll,setShowAll] = useState(false);

  const galleryImages = [

    {
      id:"gateway-of-india",
      title:"Gateway of India",
      image: imagesData["gateway-of-india"],
      state:"Maharashtra",
      tag:"Historic",
      visitors:"12k+"
    },

    {
      id:"baga-beach",
      image: imagesData["baga-beach"],
      title:"Baga Beach",
      state:"Goa",
      tag:"Beach",
      visitors:"10k+"
    },

    {
      id:"munnar",
       image: imagesData["munnar"],
      title:"Munnar",
      state:"Kerala",
      tag:"Nature",
      visitors:"9k+"
    },

    {
      id:"manali",
      title:"Manali",
       image: imagesData["manali"],
      state:"Himachal Pradesh",
      tag:"Adventure",
      visitors:"14k+"
    },

    {
      id:"meenakshi-temple",
       image: imagesData["meenakshi-temple"],
      title:"Meenakshi Temple",
      state:"Tamil Nadu",
      tag:"Religious",
      visitors:"8k+"
    },

    {
      id:"dal-lake",
       image: imagesData["dal-lake"],
      title:"Dal Lake",
      state:"Jammu & Kashmir",
      tag:"Lake View",
      visitors:"11k+"
    },

    {
      id:"gulmarg",
       image: imagesData["gulmarg"],
      title:"Gulmarg",
      state:"Jammu & Kashmir",
      tag:"Snow",
      visitors:"13k+"
    },

    {
      id:"marine-drive",
       image: imagesData["marine-drive"],
      title:"Marine Drive",
      state:"Maharashtra",
      tag:"City Life",
      visitors:"15k+"
    }

  ];

  const handleSearch = () => {
    setSearchTerm(searchInput);
    setShowAll(false);
  };

  const filteredGallery = galleryImages.filter((item)=>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleGallery = showAll
    ? filteredGallery
    : filteredGallery.slice(0,6);

  return (

    <div className="gallery-page">

      {/* HEADER */}

      <div className="gallery-header">

        <p className="top-title">
          TRAVEL MEMORIES
        </p>

        <h1>
          Travel Gallery
        </h1>

        <div className="gallery-line">
          <span></span>
          ❤
          <span></span>
        </div>

        <p className="sub-title">
          Explore beautiful destinations across India
        </p>

        {/* SEARCH */}

        <div className="search-container">

          <input
            type="text"
            placeholder="Search places..."
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

      {/* GRID */}

      <div className="gallery-grid">

        {visibleGallery.map((item)=>(

          <div
            className="gallery-card"
            key={item.id}
          >

            <div className="gallery-image">

  <img
    src={item.image}
    alt={item.title}
  />

</div>
            <div className="gallery-content">

              <div className="card-top">

                <div className="gallery-tag">
                  {item.tag}
                </div>

                <div className="visitor-count">
                  👥 {item.visitors}
                </div>

              </div>

              <h2>
                {item.title}
              </h2>

              <p>
                {item.state}
              </p>

              <div className="card-bottom">
                ⭐ Must Visit Destination
              </div>

              <button
                className="gallery-btn"
                onClick={() =>
                  navigate(`/place/${item.id}`)
                }
              >
                Explore →
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* VIEW ALL */}

      {filteredGallery.length > 6 && (

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

export default Gallery;