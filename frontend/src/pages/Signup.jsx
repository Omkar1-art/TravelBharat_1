import "../styles/Signup.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const handleSignup = async () => {

    if(password !== confirmPassword){
      alert("Passwords do not match");
      return;
    }

    try{

      const res = await fetch("https://travelbharat-backend.vercel.app/api/auth/signup",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name,
          email,
          password
        })
      });

      const data = await res.json();

      if(res.ok){

  localStorage.setItem("token", data.token);

  localStorage.setItem(
    "user",
    JSON.stringify({
      _id: data._id,
      name: data.name,
      email: data.email
    })
  );

  alert("Signup Successful");

  navigate("/profile");
}
      
      else
        
        {
        alert(data.message);
      }

    }catch(error){
      alert("Server Error");
    }
  };

  return (
    <div className="signup-page">

      <div className="signup-bg"></div>

      <div className="signup-wrapper">

        {/* LEFT SIDE */}

        <div className="signup-left">

          <div className="journey-text">
            ✈ Begin Your Journey
          </div>

          <h1>
            Create Account,
            <br />
            <span>Explore India ❤</span>
          </h1>

          <p>
            Join TravelBharat and discover amazing
            destinations, culture and experiences.
          </p>

          <div className="feature-icons">

            <div className="feature-item">
              <div className="feature-circle">🗺️</div>
              <h4>100+ Destinations</h4>
              <span>Across Incredible India</span>
            </div>

            <div className="feature-item">
              <div className="feature-circle">🛡️</div>
              <h4>Safe & Secure</h4>
              <span>Your data is protected</span>
            </div>

            <div className="feature-item">
              <div className="feature-circle">🎧</div>
              <h4>24/7 Support</h4>
              <span>We're here for you</span>
            </div>

          </div>

          <div className="bottom-image">
            TAJ MAHAL IMAGE
          </div>

        </div>

        {/* CENTER */}

        <div className="signup-card">

          <div className="top-banner">
            INDIA LANDMARKS IMAGE
          </div>

          <h2>Signup</h2>

          <p>Create your account to get started</p>

          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
          />

          <button
            className="signup-btn"
            onClick={handleSignup}
          >
            Create Account
          </button>

          <div className="divider">
            <span></span>
            or sign up with
            <span></span>
          </div>

          <div className="social-login">

            <button>Google</button>
            <button>Facebook</button>
            <button>Apple</button>

          </div>

          <div className="login-text">
            Already have an account?
            <button onClick={()=>navigate("/login")}>
              Login
            </button>
          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="signup-right">

          <div className="image-card card-1">
            Rajasthan Image
          </div>

          <div className="image-card card-2">
            Kerala Image
          </div>

          <div className="image-card card-3">
            Kedarnath Image
          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;