import axios from "axios";

const API = axios.create({
    baseURL: "https://python-code-editor-backend-latest.onrender.com/api/code", // Replace with actual backend
});

export const runCode = (code) => {
    return API.post("/run", { code });
};
