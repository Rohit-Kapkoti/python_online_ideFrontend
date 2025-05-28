import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api/code", // Replace with actual backend
});

export const runCode = (code) => {
    return API.post("/run", { code });
};
