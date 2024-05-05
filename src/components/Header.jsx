import { useState, useEffect } from "react";
import { getDashboard } from "../api/getDashboard";
import { Link } from "react-router-dom";

function Header({ title }) {
  const [dashboardData, setDashboardData] = useState({});

  const HandleDisconnect = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDashboard();
        setDashboardData(data);
      } catch (error) {
        console.error("Erreur lors de la requête fetch :", error.message);
      }
    };

    fetchData(); // Call the function to fetch data when the component mounts
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <header className="flex justify-between h-fit p-5 bg-gray-50">
      <div className="flex gap-10 items-center">
        <Link to="/dashboard">
          <img
            src="/img/Logo_Bleu_Marine.png"
            className="w-24 h-auto"
            alt="Logo"
          ></img>
        </Link>
        <h1 className="font-bold text-2xl">{title}</h1>
      </div>
      <div className="flex gap-5 items-center justify-center ">
        <p>
          Compte de :{" "}
          <span className="font-bold">
            {dashboardData.length > 0 && (
              <>
                {dashboardData[0].firstname} {dashboardData[0].lastname}
              </>
            )}
          </span>
        </p>

        {dashboardData.length > 0 && dashboardData[0].admin == "1" && (
          <button
            className="border-[#1B1834] border-2 text-black text-sm font-medium rounded-lg p-2.5"
            onClick={() => (window.location.href = "/admin")}
          >
            Admin
          </button>
        )}
        <button
          className="bg-[#1B1834] text-white text-sm font-medium rounded-lg p-2.5"
          onClick={() => (window.location.href = "/profile")}
        >
          Profile
        </button>

        <button
          className="bg-[#1B1834] text-white text-sm font-medium rounded-lg p-2.5"
          onClick={HandleDisconnect}
        >
          Deconnexion
        </button>
      </div>
    </header>
  );
}

export default Header;
