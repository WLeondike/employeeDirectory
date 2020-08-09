import axios from "axios";

// Get random users from API
export default {
  getUsers: () => {
    return axios.get("https://randomuser.me/api/?results=50&nat=us");
  }
};