import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Mock Data
const stats = {
  totalEvents: 12,
  totalParticipants: 345,
  totalResources: 23,
};

const mockEvents = [
  { id: 1, name: "Tech Fest 2025", date: "March 15, 2025" },
  { id: 2, name: "Cultural Night", date: "April 10, 2025" },
  { id: 3, name: "Sports Meet", date: "May 5, 2025" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-1/5 bg-blue-900 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <ul className="space-y-3">
          <li
            className={`cursor-pointer p-2 rounded ${activeTab === "dashboard" ? "bg-blue-700" : ""}`}
            onClick={() => setActiveTab("dashboard")}
          >
            Dashboard
          </li>
          <li
            className={`cursor-pointer p-2 rounded ${activeTab === "events" ? "bg-blue-700" : ""}`}
            onClick={() => navigate("/admin/events")}
          >
            Manage Events
          </li>
          <li
            className={`cursor-pointer p-2 rounded ${activeTab === "users" ? "bg-blue-700" : ""}`}
            onClick={() => navigate("/admin/users")}
          >
            Manage Users
          </li>
          <li
            className={`cursor-pointer p-2 rounded ${activeTab === "resources" ? "bg-blue-700" : ""}`}
            onClick={() => navigate("/admin/resources")}
          >
            Manage Resources
          </li>
        </ul>
        <button
          onClick={handleLogout}
          className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 w-full rounded"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="w-4/5 p-6">
        <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
        <div className="grid grid-cols-3 gap-6">
          {/* Cards */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Total Events</h3>
            <p className="text-xl font-bold">{stats.totalEvents}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Total Participants</h3>
            <p className="text-xl font-bold">{stats.totalParticipants}</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-semibold">Total Resources</h3>
            <p className="text-xl font-bold">{stats.totalResources}</p>
          </div>
        </div>

        {/* Recent Events Table */}
        <h2 className="text-xl font-semibold mt-6 mb-3">Upcoming Events</h2>
        <div className="bg-white p-4 rounded-lg shadow">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Event Name</th>
                <th className="p-2 text-left">Date</th>
              </tr>
            </thead>
            <tbody>
              {mockEvents.map((event) => (
                <tr key={event.id} className="border-t">
                  <td className="p-2">{event.name}</td>
                  <td className="p-2">{event.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
