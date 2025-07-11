import { missions } from "../data/Data";
import { Link } from "react-router-dom";

export default function Missions() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-10 font-poppins">
      <h1 className="text-5xl font-extrabold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
        Epic Missions Await! 
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {missions.map((mission) => (
          <div
            key={mission.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            <img
              src={mission.image}
              alt={mission.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                {mission.title}
              </h2>
              <p className="text-gray-700 mb-4">{mission.description}</p>
              <Link to={`/mission/${mission.id}`}>
                <button className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-200">
                  Check It Out! ✨
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

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