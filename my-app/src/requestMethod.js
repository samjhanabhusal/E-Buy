import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjgwZTM4MjhlZWFhNWVlOGU0MTc5ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0OTkyMjczMiwiZXhwIjoxNjUwMTgxOTMyfQ.ItlSEBfSWhRhc4cmunjEzA5rhmZK2maKIM5RwN3UgAU"

// to fetch any product
export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });