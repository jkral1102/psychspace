import axios from "axios";

export default {
  // ARTICLES 
  
  // Gets all events
  getEvents: function() {
    return axios.get("/api/events");
  },
  // Gets event with a given id
  getEvent: function(id) {
    return axios.get("/api/events/" + id);
  },
  updateEvent: function(id, data) {
    return axios.put("/api/events/" + id, data);
  },
  // Deletes event with a given id
  deleteEvent: function(id) {
    return axios.delete("/api/events/" + id);
  },
  // Save event 
  saveEvent: function(data) {
    return axios.post("/api/events", data);
  },
  // Save comment
  postComment: function(id, comment) {
    return axios.put("/api/events/" + id,  {commentBody: comment});
  },

  //Login
  login: function(data) {
    return axios.post("/api/users/login", data)
  },
  //Register
  register: function(data) {
    return axios.post("/api/users/register", data)
  }

};
