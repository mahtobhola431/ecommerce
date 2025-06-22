import axios from 'axios'

export const axiosi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:8000", // fallback for safety
  withCredentials: true
})
