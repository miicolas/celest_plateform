import axios from "axios";
const API_URL = "https://apps-celest-api.kas9uk.easypanel.host";

export async function getEvent(id_name) {
  try {
    const { data } = await axios.get(`${API_URL}/event/${id_name}`);
    console.log(data.event);
    return data.event; // Assuming response contains data property
  } catch (error) {
    throw new Error("Erreur lors de la requête fetch :" + error.message);
  }
}
