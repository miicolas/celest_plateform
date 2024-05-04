import { useState, useEffect } from "react";
import { getProfile } from "../api/getProfile";
import Header from "../components/Header";

function Profile() {
  const [profileData, setProfileData] = useState([]);

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
    <div>
      <Header title={"Profile"} />
      <h1>Profile</h1>

      <div>
        <form>
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
        </form>
      </div>
    </div>
  );
}

export default Profile;
