const EventCard = ({ event }) => (
    <div className="bg-white rounded-lg shadow-md p-6">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover mb-4" />
      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
      <p className="text-gray-600 mb-4">{event.description}</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Register Now
      </button>
    </div>
  );