import axios from "axios";

const API = axios.create({
    baseURL: "https://python-online-ide-5uuk.onrender.com/api/code", // Replace with actual backend
});

export const runCode = (code) => {
    return API.post("/run", { code });
};
