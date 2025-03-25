import { useState } from "react";

// Mock Data for Events
const upcomingEvents = [
  { id: 1, name: "Tech Fest 2025", date: "March 15, 2025", registered: false },
  { id: 2, name: "Cultural Night", date: "April 10, 2025", registered: true },
  { id: 3, name: "Sports Meet", date: "May 5, 2025", registered: false },
];

const Dashboard = () => {
  const [events, setEvents] = useState(upcomingEvents);

  const handleRegister = (eventId) => {
    setEvents(events.map(event => 
      event.id === eventId ? { ...event, registered: true } : event
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Participant Dashboard</h1>

      {/* Upcoming Events */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Upcoming Events</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 text-left">Event Name</th>
              <th className="p-2 text-left">Date</th>
              <th className="p-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map(event => (
              <tr key={event.id} className="border-t">
                <td className="p-2">{event.name}</td>
                <td className="p-2">{event.date}</td>
                <td className="p-2">
                  {event.registered ? (
                    <span className="text-green-500">Registered</span>
                  ) : (
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                      onClick={() => handleRegister(event.id)}
                    >
                      Register
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Ticketing System */}
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h2 className="text-xl font-semibold mb-3">Your Tickets</h2>
        {events.filter(event => event.registered).length === 0 ? (
          <p>No tickets available. Register for events to get tickets.</p>
        ) : (
          <ul>
            {events.filter(event => event.registered).map(event => (
              <li key={event.id} className="border p-2 rounded mb-2 flex justify-between">
                {event.name} - {event.date}
                <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded">
                  Download Ticket
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Feedback Submission */}
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-3">Submit Feedback</h2>
        <textarea
          className="w-full p-2 border rounded mb-2"
          rows="3"
          placeholder="Write your feedback..."
        ></textarea>
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded">
          Submit Feedback
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
