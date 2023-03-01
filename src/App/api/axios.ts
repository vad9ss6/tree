import axios from "axios";

export const client = axios.create({
  baseURL: "https://test.vmarmysh.com/",
  headers: {
    "Content-Type": "application/json",
  },
});
