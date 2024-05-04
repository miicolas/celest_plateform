import axios from "axios";
const API_URL = "https://apps-celest-api.kas9uk.easypanel.host";

export async function getEvents() {
  try {
    const { data } = await axios.get(`${API_URL}/event/getevents`);
    console.log(data.events);
    return data.events; // Assuming response contains data property
  } catch (error) {
    throw new Error("Erreur lors de la requête fetch :" + error.message);
  }
}
