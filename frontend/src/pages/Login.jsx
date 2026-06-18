import "../styles/Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async () => {
    try{

      const res = await fetch("https://travelbharat-backend.vercel.app/api/auth/login",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
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

        alert("Login Successful");

        navigate("/profile");

      }else{
        alert(data.message);
      }

    }catch(error){
      alert("Server Error");
    }
  };

  return (

    <div className="login-page">

      <div className="login-overlay"></div>

      <div className="login-wrapper">

        {/* LEFT SIDE */}

        <div className="login-left">

          <div className="explore-tag">
            ✈ Explore Incredible India
          </div>

          <h1>
            Discover.
            <br />
            Dream.
            <br />
            <span>Travel ❤</span>
          </h1>

          <p>
            Your journey to explore the beauty,
            culture, heritage and hidden gems of
            India starts here. Login and continue
            your adventure with TravelBharat.
          </p>

          <div className="login-features">

            <div className="feature">
              <div className="feature-icon">🗺️</div>
              <h3>100+</h3>
              <p>Destinations</p>
            </div>

            <div className="feature">
              <div className="feature-icon">🛡️</div>
              <h3>Safe</h3>
              <p>Secure</p>
            </div>

            <div className="feature">
              <div className="feature-icon">🎧</div>
              <h3>24/7</h3>
              <p>Support</p>
            </div>

          </div>

        </div>

        {/* CENTER */}

        <div className="login-center">

          <div className="login-card">

            <div className="taj-image">
              TAJ MAHAL IMAGE
            </div>

            <h2>
              Welcome Back
            </h2>

            <p className="sub-text">
              Login to continue your journey
            </p>

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <div className="remember-row">

              <label>
                <input type="checkbox" />
                Remember Me
              </label>

              <a href="#">
                Forgot Password?
              </a>

            </div>

            <button
              className="login-btn"
              onClick={handleLogin}
            >
              Login
            </button>

            <div className="divider">
              <span></span>
              or continue with
              <span></span>
            </div>

            <div className="social-buttons">
              <button>Google</button>
              <button>Facebook</button>
              <button>Apple</button>
            </div>

            <p className="signup-text">

              Don't have an account?

              <span
                onClick={()=>navigate("/signup")}
                style={{cursor:"pointer"}}
              >
                Sign Up
              </span>

            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="login-right">

          <div className="right-image image1">
            Rajasthan Image
          </div>

          <div className="right-image image2">
            Kerala Image
          </div>

          <div className="right-image image3">
            Kedarnath Image
          </div>

        </div>

      </div>

    </div>

  );
}

export default Login;