import { useState } from "react";
import "../styles/Contact.css";

function Contact() {

  // NEW STATES
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");

  // NEW SEND FUNCTION
  const handleSend = async () => {
    const storedUser =
      localStorage.getItem("user");

    if (
      !storedUser ||
      storedUser === "undefined"
    ) {
      alert("Please Login First");
      return;
    }

    const user =
      JSON.parse(storedUser);

    if (!name || !email || !message) {
      alert("Please Fill All Fields");
      return;
    }

    try {

      const res = await fetch(
        " https://travelbharat-backend.vercel.app/api/contact/send",
        {
          method: "POST",
          headers: {
            "Content-Type":"application/json"
          },
          body: JSON.stringify({
            userId: user._id,
            name,
            email,
            message
          })
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Message Sent Successfully");

        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert(data.message);
      }

    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div className="contact-page">

      <div className="contact-bg"></div>

      <div className="contact-header">

        <p>GET IN TOUCH</p>

        <h1>Contact Us</h1>

        <div className="contact-line">
          <span></span>
          🌍
          <span></span>
        </div>

      </div>

      <div className="contact-wrapper">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            Have questions or need travel assistance?
          </p>

          <div className="info-item">
            📧 support@travelbharat.com
          </div>

          <div className="info-item">
            📞 +91 9876543210
          </div>

          <div className="info-item">
            📍 Mumbai, India
          </div>

          <div className="info-item">
            🕘 Mon - Sat : 9AM - 7PM
          </div>

        </div>

        <div className="contact-form-box">

          <h2>Send us a Message</h2>

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e)=>
              setName(e.target.value)
            }
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e)=>
              setEmail(e.target.value)
            }
          />

          <textarea
            rows="7"
            placeholder="Your Message"
            value={message}
            onChange={(e)=>
              setMessage(e.target.value)
            }
          ></textarea>

          <button
            onClick={handleSend}
          >
            Send Message
          </button>

        </div>

      </div>

    </div>
  );
}

export default Contact;