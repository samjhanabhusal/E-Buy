import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjgwZTM4MjhlZWFhNWVlOGU0MTc5ZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MDE3NDgwOSwiZXhwIjoxNjUwNDM0MDA5fQ.kvZfRft1g6YpvrI72QlTfvGveIc3UlsWOXQHAaFHUA0"
// const user = JSON.parse(localStorage.getItem("persist:root"))
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;
// to fetch any product
export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` },
  });