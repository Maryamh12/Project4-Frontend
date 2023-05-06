const DEV_API_URL = "http://127.0.0.1:8000:8000";
// const PROD_API_URL = "https://ga-drink-api-svjj.onrender.com";
export const API_URL =
  process.env.NODE_ENV === "production" ? PROD_API_URL : DEV_API_URL;
