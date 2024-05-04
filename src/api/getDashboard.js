import axios from "axios";
const API_URL = "https://apps-celest-api.kas9uk.easypanel.host";

export async function getDashboard() {
  try {
    const { data } = await axios.get(`${API_URL}/dashboard`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    console.log(data.userInfo);
    return data.userInfo; // Assuming response contains data property
  } catch (error) {
    throw new Error("Erreur lors de la requête fetch :" + error.message);
  }
}
