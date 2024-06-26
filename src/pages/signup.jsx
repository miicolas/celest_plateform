import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [instagram, setInstagram] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [firstname, setFirstname] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // État pour stocker le message d'erreur

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Envoi des données du formulaire à l'API
    fetch("https://apps-celest-api.kas9uk.easypanel.host/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        instagram: instagram,
        password: password,
        lastname: name,
        firstname: firstname,
      }),
    })
      .then((response) => {
        if (response.ok) {
          window.location.href = "/"; // Redirection vers la page de tableau de bord
        } else {
          // Afficher le message d'erreur provenant de l'API
          response.json().then((data) => {
            // Mettre à jour l'état de l'erreur
            setErrorMessage(data.message);
          });
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la requête fetch :", error);
      });
  };

  return (
    <div className="flex w-screen">
      <div className="flex-auto bg-[#1B1834] h-screen max-w-screen-lg hidden lg:flex justify-center items-center">
        <img
          src="/img/Logo_Blanc_Celest.png"
          alt="logo"
          className="object-cover h-72"
        />
      </div>
      <div className=" flex justify-center items-center p-10 bg-gray-50 flex-col flex-1">
        <h1 className="text-2xl font-bold text-gray-900 ">Inscription</h1>
        {errorMessage && (
          <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
        )}
        <form className="w-full p-9" onSubmit={handleFormSubmit}>
          <label
            htmlFor="instagram"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Instagram
          </label>
          <input
            type="text"
            id="instagram"
            value={instagram}
            onChange={(e) => setInstagram(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="@Celest"
            required
          />
          <label
            htmlFor="name"
            className="block mt-4 mb-2 text-sm font-medium text-gray-900"
          >
            Nom
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Doe"
            required
          ></input>
          <label
            htmlFor="firstname"
            className="block mt-4 mb-2 text-sm font-medium text-gray-900"
          >
            Prénom
          </label>
          <input
            type="text"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="John"
            required
          ></input>
          <label
            htmlFor="password"
            className="block mt-4 mb-2 text-sm font-medium text-gray-900 "
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder="********"
            required
          />
          <div className="flex justify-between items-center px-4 py-6">
            <label
              htmlFor="conditions"
              className="block w-full text-sm font-medium text-gray-900 "
            >
              J'accepte{" "}
              <Link to="/mentions-legales" className="underline">
                les conditions d'utilisation
              </Link>
            </label>

            <input
              type="checkbox"
              id="conditions"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-fit p-2.5 "
              required
            ></input>
          </div>

          <button
            type="submit"
            className="bg-[#1B1834] text-white text-sm font-medium rounded-lg w-full p-2.5 "
          >
            Inscription
          </button>
        </form>
        <div>
          Si tu as déjà un compte,{" "}
          <a href="/" className="text-blue-500">
            Connecte-toi
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
