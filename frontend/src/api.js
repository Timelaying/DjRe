//writing interceptors(adds corrects header, (checks for tokens)

import axios from axios
import { ACCESS_TOKEN } from "./constants"

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})