import "../styles/About.css";

function About() {
  return (
    <div className="about-page">

      <div className="about-bg"></div>

      <div className="about-header">
        <h1>About TravelBharat</h1>
        <div className="about-line">
          <span></span>
          ✈
          <span></span>
        </div>
      </div>

      <div className="about-card">

        <div className="about-left">

          <h2>Who We Are</h2>

          <p>
            TravelBharat is a tourism platform that helps users
            discover tourist destinations across India.
          </p>

          <p>
            We provide detailed information about states,
            cities, tourist places and attractions.
          </p>

          <p>
            Our mission is to make travel planning easy,
            inspiring and accessible for everyone.
          </p>

          <div className="stats">

            <div className="stat-box">
              <h3>28+</h3>
              <p>States</p>
            </div>

            <div className="stat-box">
              <h3>1000+</h3>
              <p>Destinations</p>
            </div>

            <div className="stat-box">
              <h3>5000+</h3>
              <p>Attractions</p>
            </div>

          </div>

        </div>

        <div className="about-right">

          <div className="img-big">
            Temple Image
          </div>

          <div className="small-images">

            <div className="img-small">
              Mountain Image
            </div>

            <div className="img-small">
              Kerala Image
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;