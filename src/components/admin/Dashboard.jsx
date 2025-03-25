import { useEffect } from 'react';
import AdminLayout from '../layouts/AdminLayout';

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalEvents: 0,
    activeRegistrations: 0,
    totalUsers: 0
  });

  return (
    <AdminLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Statistics Cards */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold">Total Events</h3>
          <p className="text-3xl font-bold">{stats.totalEvents}</p>
        </div>
      </div>
      
      {/* Recent Events Table */}
    </AdminLayout>
  );
};