import { useState } from "react";

function Home() {
  const [instagram, setInstagram] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // État pour stocker le message d'erreur

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
            window.location.href = "/dashboard";
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

  return (
    <div className="flex w-screen h-screen">
      <div className="flex-auto bg-[#1B1834] h-screen max-w-screen-lg hidden lg:flex justify-center items-center">
        <img
          src="/img/Logo_Blanc_Celest.png"
          alt="logo"
          className="object-cover h-72"
        />
      </div>
      <div className=" flex justify-center items-center p-10 bg-gray-50 flex-col flex-1">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Connexion
        </h1>
        {/* Affichage du message d'erreur */}
        {errorMessage && (
          <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
        )}
        <form
          className="max-w-52 lg:max-w-full p-9"
          onSubmit={handleFormSubmit}
        >
          <label
            htmlFor="instagram"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Instagram
          </label>
          <input
            type="text"
            id="instagram"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="@Celest"
            required
          />
          <label
            htmlFor="password"
            className="block mt-4 mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="********"
            required
          />
          <button
            type="submit"
            className="bg-[#1B1834] text-white text-sm font-medium rounded-lg w-full p-2.5 mt-4"
          >
            Connexion
          </button>
        </form>
        <div>
          Si tu n'as pas encore de compte,{" "}
          <a href="/signup" className="text-blue-500">
            Inscris-toi
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
