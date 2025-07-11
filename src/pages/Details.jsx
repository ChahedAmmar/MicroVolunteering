import { useParams, useNavigate } from "react-router-dom";
import { missions } from "../data/Data";
import { useContext, useState } from "react";
import { UserContext } from "./useContext";

export default function MissionDetail() {
  const { id } = useParams();
  const mission = missions.find((m) => m.id === parseInt(id));
  const navigate = useNavigate();
  const { applyToMission } = useContext(UserContext);
  const [formData, setFormData] = useState({ name: "", motivation: "" });

  if (!mission) return <p className="text-center text-pink-600 text-xl font-bold mt-10"> Mission not found!</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    applyToMission(mission);
    navigate("/profile");
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 font-poppins">
      <h1 className="text-5xl font-extrabold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
        {mission.title} 
      </h1>

      <img
        src={mission.image}
        alt={mission.title}
        className="w-full h-64 object-cover object-center rounded-2xl border-4 border-purple-200 shadow-lg mb-8 transition-transform duration-300 ease-in-out hover:scale-105"
      />

      <p className="mb-6 text-lg leading-relaxed text-gray-800">{mission.fullDescription}</p>

      <div className="mb-6 text-gray-800 space-y-2">
        <p><strong className="text-purple-700">Deadline:</strong> {mission.deadline}</p>
        <p><strong className="text-purple-700">Organization:</strong> {mission.organization}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-xl font-bold text-pink-600 mb-3">What You Need:</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-800">
          {mission.requirements.map((req, index) => (
            <li key={index} className="text-base">{req}</li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => navigate("/")}
        className="mb-10 px-6 py-3 bg-gradient-to-r from-orange-400 to-pink-400 text-white font-semibold rounded-full hover:from-orange-500 hover:to-pink-500 transition transform hover:scale-105"
      >
        ← Back to Mission Hub
      </button>

      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg border border-purple-200 transition-all duration-300 hover:shadow-xl"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-purple-800">Join the Mission! </h2>

        <label className="block mb-4 font-semibold text-gray-800">
          Your Name:
          <input
            type="text"
            required
            className="w-full mt-1 px-4 py-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </label>

        <label className="block mb-6 font-semibold text-gray-800">
          Why you choose us?
          <textarea
            required
            rows="4"
            className="w-full mt-1 px-4 py-3 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white"
            value={formData.motivation}
            onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
          />
        </label>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full hover:from-pink-600 hover:to-purple-700 transition transform hover:scale-105"
        >
          Apply Now!
        </button>
      </form>
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
