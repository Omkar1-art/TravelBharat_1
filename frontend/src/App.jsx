import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* USER PAGES */

import Home from "./pages/Home";
import States from "./pages/States";
import StateDetails from "./pages/StateDetails";
import CityDetails from "./pages/CityDetails";
import FoodDetails from "./pages/FoodDetails";
import RestaurantDetails from "./pages/RestaurantDetails";
import HotelDetails from "./pages/HotelDetails";
import TouristPlaceDetails from "./pages/TouristPlaceDetails";
import Categories from "./pages/Categories";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Favorites from "./pages/Favorites";

/* ADMIN PAGES */

import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import ManageStates from "./admin/ManageStates";
import ManageCities from "./admin/ManageCities";
import ManageTouristPlaces from "./admin/ManageTouristPlaces";
import ManageHotels from "./admin/ManageHotels";
import ManageGallery from "./admin/ManageGallery";
import ContactMessages from "./admin/ContactMessages";

function App() {
  const location = useLocation();

  const isAdminPage =
    location.pathname.startsWith("/admin");

  return (
    <>
      {/* USER NAVBAR */}
      {!isAdminPage && <Navbar />}

      <Routes>

        {/* USER ROUTES */}

        <Route path="/" element={<Home />} />
        <Route path="/states" element={<States />} />
        <Route path="/state/:id" element={<StateDetails />} />
        <Route path="/city/:id" element={<CityDetails />} />
        <Route path="/food/:id" element={<FoodDetails />} />
        <Route path="/restaurant/:id" element={<RestaurantDetails />} />
        <Route path="/hotel/:id" element={<HotelDetails />} />
        <Route path="/place/:id" element={<TouristPlaceDetails />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/favorites" element={<Favorites />} />

        {/* ADMIN ROUTES */}

        <Route
          path="/admin"
          element={<Navigate to="/admin/login" />}
        />

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="/admin/manage-states"
          element={<ManageStates />}
        />

        <Route
          path="/admin/manage-cities"
          element={<ManageCities />}
        />

        <Route
          path="/admin/manage-tourist-places"
          element={<ManageTouristPlaces />}
        />

        <Route
          path="/admin/manage-hotels"
          element={<ManageHotels />}
        />

        <Route
          path="/admin/manage-gallery"
          element={<ManageGallery />}
        />

        <Route
          path="/admin/contact-messages"
          element={<ContactMessages />}
        />

      </Routes>

      {/* USER FOOTER */}
      {!isAdminPage && <Footer />}
    </>
  );
}

export default App;