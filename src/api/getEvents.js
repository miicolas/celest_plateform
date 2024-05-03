import axios from "axios";
const API_URL = "http://localhost:3000";

export async function getEvents() {
  try {
    const { data } = await axios.get(`${API_URL}/event/getevents`);
    console.log(data.events);
    return data.events; // Assuming response contains data property
  } catch (error) {
    throw new Error("Erreur lors de la requête fetch :" + error.message);
  }
}
