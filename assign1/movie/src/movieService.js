import axios from "axios"

const URL = "http://localhost:5000/"

export const getMovies = () => {
    return axios.get(URL);
}