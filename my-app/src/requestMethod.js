import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjgwZTM4MjhlZWFhNWVlOGU0MTc5ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDAwOTYxNCwiZXhwIjoxNjUwMjY4ODE0fQ.ea8tLixl3YlZrrXKj-rSwcNkpsffuTkxXua_fssjsBI"

// to fetch any product
export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });