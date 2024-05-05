import { useState, useEffect } from "react";
import { getProfile } from "../api/getProfile";
import Header from "../components/Header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

function Profile() {
  const [profileData, setProfileData] = useState([]);
  const [instagram, setInstagram] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [profileSettings, setProfileSettings] = useState([
    { id: 1, label: "Profile" },
    { id: 2, label: "Account" },
  ]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Envoi des données du formulaire à l'API
    fetch("https://apps-celest-api.kas9uk.easypanel.host/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        instagram: instagram,
        password: password,
        lastName: lastName,
        firstName: firstName,
      }),
    })
      .then((response) => {
        if (response.ok) {
          // Si la connexion réussit, extraire le token de la réponse
          response.json().then((data) => {
            const token = data.token;
            // Stocker le token dans le local storage
            localStorage.setItem("token", token);
            // Rediriger vers la page de tableau de bord
            window.location.href = "/profile";
          });
        } else {
          response.json().then((data) => {
            setErrorMessage(data.message);
          });
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la requête fetch :", error);
      });
  };

  const DeleteProfile = (event) => {
    event.preventDefault();

    try {
      fetch("http://localhost:3000/auth/deleteprofile", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then((response) => {
        if (response.ok) {
          localStorage.removeItem("token");
          window.location.href = "/";
        } else {
          response.json().then((data) => {
            setErrorMessage(data.message);
          });
        }
      });
    } catch (error) {
      console.error("Erreur lors de la requête fetch :", error);
    }
  };

  useEffect(() => {
    async function getProfileData() {
      try {
        const data = await getProfile();
        setProfileData(data);
      } catch (error) {
        console.error(error);
      }
    }
    getProfileData();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header title={"Votre profil"} />
      <Tabs className="flex justify-start items-start">
        <TabList className="flex flex-none w-60 justify-center items-center p-10 flex-col">
          {profileSettings.map((setting) => (
            <Tab
              defaultFocus={true}
              key={setting.id}
              className="flex items-center justify-start py-2 hover:bg-gray-100 px-4 cursor-pointer rounded-lg  w-full text-left"
            >
              <span>{setting.label}</span>
            </Tab>
          ))}
        </TabList>

        <TabPanel className="flex flex-1 max-w-2xl p-10 flex-col">
          <h2>Profile</h2>
          <p>Les utilisateurs vous voit comme cela.</p>
          <hr></hr>
          <form onSubmit={handleFormSubmit}>
            {errorMessage && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                {errorMessage
                  ? errorMessage
                  : "Une erreur s'est produite. Veuillez réessayer."}
              </div>
            )}
            {profileData &&
              profileData.length > 0 &&
              profileData.map((profile, index) => (
                <div className="flex flex-col" key={index}>
                  <label htmlFor="firstname">Prénom</label>
                  <input
                    className="border-2 border-gray-400 p-2 w-fit rounded-lg bg-gray-50  "
                    type="text"
                    id="firstname"
                    name="firstname"
                    placeholder={profile.firstname}
                  />
                  <p>
                    {" "}
                    Ceci est votre nom d'utilisateur sur la plateform. Vous
                    pouvez seulement changer votre instagram/nom d'utilisateur
                    tous les 30 jours.
                  </p>
                  <label htmlFor="lastname">Nom</label>
                  <input
                    className="border-2 border-gray-400 p-2 w-fit rounded-lg bg-gray-50  "
                    type="text"
                    id="lastname"
                    name="lastname"
                    placeholder={profile.lastname}
                  />
                  <label htmlFor="instagram">Instagram</label>
                  <input
                    className="border-2 border-gray-400 p-2 w-fit rounded-lg bg-gray-50  "
                    type="text"
                    id="instagram"
                    name="instagram"
                    placeholder={profile.instagram}
                  />
                </div>
              ))}
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
              type="submit"
            >
              Modifier le profil
            </button>
          </form>
        </TabPanel>
      </Tabs>
    </div>
  );
}

export default Profile;
