export default function Bt9() {
  return (
    <div className="h-screen flex flex-col justify-between p-4 bg-gray-900 text-white">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <img src="your-logo.png" alt="Logo" className="w-8 h-8" />
        </div>
        <nav className="space-y-2">
          <a href="#" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded">
            <span className="material-icons">home</span>
            <span className="ml-3">Dashboard</span>
          </a>
          <a href="#" className="flex items-center p-2 text-white bg-gray-700 rounded">
            <span className="material-icons">edit</span>
            <span className="ml-3">Posts</span>
          </a>
          <a href="#" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded">
            <span className="material-icons">perm_media</span>
            <span className="ml-3">Media</span>
          </a>
          <a href="#" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded">
            <span className="material-icons">description</span>
            <span className="ml-3">Pages</span>
          </a>
          <a href="#" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded">
            <span className="material-icons">comment</span>
            <span className="ml-3">Comments</span>
            <span className="ml-auto bg-red-600 text-white rounded-full px-2 text-sm">1</span>
          </a>
          <a href="#" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded">
            <span className="material-icons">brush</span>
            <span className="ml-3">Appearance</span>
          </a>
          <a href="#" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded">
            <span className="material-icons">extension</span>
            <span className="ml-3">Plugins</span>
          </a>
          <a href="#" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded">
            <span className="material-icons">people</span>
            <span className="ml-3">Users</span>
          </a>
          <a href="#" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded">
            <span className="material-icons">settings</span>
            <span className="ml-3">Settings</span>
          </a>
          <a href="#" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded">
            <span className="material-icons">build</span>
            <span className="ml-3">Tools</span>
          </a>
        </nav>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between p-2 bg-gray-800 rounded">
          <span className="text-gray-300">Light Mode</span>
          <label className="flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only" />
            <div className="w-10 h-4 bg-gray-600 rounded-full"></div>
            <div className="w-6 h-6 bg-white rounded-full -ml-4 transform transition-transform duration-200"></div>
          </label>
        </div>
        <a href="#" className="flex items-center p-2 text-gray-300 hover:bg-gray-700 rounded">
          <span className="material-icons">logout</span>
          <span className="ml-3">Logout</span>
        </a>
      </div>
    </div>
  );
};

