const Navbar = () => (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800">
              College Events
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/events" className="text-gray-600 hover:text-gray-900">
              Events
            </Link>
            {/* Role-based navigation items */}
          </div>
        </div>
      </div>
    </nav>
  );