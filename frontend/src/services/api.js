const BASE_URL = " https://travelbharat-backend.vercel.app/api";

// STATES
export const getStates = async () => {
  const res = await fetch(`${BASE_URL}/states`);
  return res.json();
};

// CITIES
export const getCitiesByState = async (stateName) => {
  const res = await fetch(`${BASE_URL}/cities/${stateName}`);
  return res.json();
};

// PLACES
export const getPlacesByCity = async (cityName) => {
  const res = await fetch(`${BASE_URL}/places/${cityName}`);
  return res.json();
};

// HOTELS
export const getHotelsByState = async (stateName) => {
  const res = await fetch(`${BASE_URL}/hotels/${stateName}`);
  return res.json();
};

// FOODS
export const getFoodsByState = async (stateName) => {
  const res = await fetch(`${BASE_URL}/foods/${stateName}`);
  return res.json();
};

// RESTAURANTS
export const getRestaurantsByFood = async (foodName) => {
  const res = await fetch(`${BASE_URL}/restaurants/${foodName}`);
  return res.json();
};