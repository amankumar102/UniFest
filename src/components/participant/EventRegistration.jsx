import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    eventDate: new Date(),
  });

  return (
    <form className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Full Name</label>
        <input
          type="text"
          className="w-full p-2 border rounded"
          onChange={(e) => setFormData({...formData, fullName: e.target.value})}
        />
      </div>
      <DatePicker
        selected={formData.eventDate}
        onChange={(date) => setFormData({...formData, eventDate: date})}
        className="w-full p-2 border rounded"
      />
    </form>
  );
};