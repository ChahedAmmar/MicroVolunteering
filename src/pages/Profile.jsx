import { useContext } from "react";
import { UserContext } from "./useContext";
import avatar from "../assets/avatar.png";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { profileMissions } = useContext(UserContext);
  const navigate = useNavigate();

  const user = {
    name: "Chahed Ammar",
    email: "chahedammar.029@gmail.com",
    country: "Tunisia",
    bio: "Tech dreamer Passionate about coding, connecting, and making a difference!",
    totalApplied: profileMissions.length,
    image: avatar,
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 font-poppins">
      <div className="flex items-center gap-6 mb-8">
        <img
          src={user.image}
          alt="User avatar"
          className="w-28 h-28 rounded-full border-4 border-pink-400 shadow-lg transform hover:scale-105 transition"
        />
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            {user.name}
          </h2>
          <p className="text-gray-700 text-lg">{user.email}</p>
          <p className="text-sm font-semibold text-purple-600">🌍 {user.country}</p>
        </div>
      </div>

      <div className="bg-gradient-to-br from-pink-100 to-purple-100 p-6 rounded-xl mb-8 shadow-md">
        <h3 className="font-bold text-xl text-purple-800 mb-2">About Me</h3>
        <p className="text-gray-800 text-base">{user.bio}</p>
      </div>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-5">
          Your Missions ({user.totalApplied}) 
        </h1>
        {profileMissions.length === 0 ? (
          <p className="text-gray-600 text-lg">No missions yet? Time to jump in! </p>
        ) : (
          <ul className="space-y-5">
            {profileMissions.map((mission) => (
              <li
                key={mission.id}
                className="border border-purple-200 rounded-xl p-5 bg-white shadow-md hover:shadow-lg transition"
              >
                <h3 className="font-bold text-xl text-purple-700">
                  {mission.title}
                </h3>
                <p className="text-gray-700"> {mission.organization}</p>
                <p className="text-sm text-gray-500">
                   Applied: {new Date().toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition transform hover:scale-105"
      >
        Back to the Mission Page
      </button>
      <footer className="bg-gradient-to-r from-purple-800 to-pink-700 text-white mt-12 py-8 px-4 text-center min-w-full rounded-t-xl">
        <p className="text-sm">© {new Date().getFullYear()} MicroVolunteering. Let's make waves! </p>
        <div className="mt-3 space-x-6">
          <a href="#" className="hover:underline text-purple-200 font-medium">Privacy Policy</a>
          <a href="#" className="hover:underline text-purple-200 font-medium">Contact us!</a>
          <a href="#" className="hover:underline text-purple-200 font-medium">GitHub </a>
        </div>
      </footer>
    </div>
  );
}