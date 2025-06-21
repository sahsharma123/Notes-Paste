import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');

  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      {/* Page Header */}
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        My Saved Pastes
      </h1>

      {/* Search Bar - Your original input with better styling */}
      <div className="mb-8">
        <input
          className="w-full p-4 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none text-lg shadow-sm"
          type="search"
          placeholder="🔍 Search paste here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Your original flex container with better styling */}
      <div className="space-y-6">
        {filteredData.length > 0 && filteredData.map((paste) => (
          <div
            className="bg-white rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-200 p-6"
            key={paste?._id}
          >
            {/* Your original title div with better styling */}
            <div className="mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {paste.title}
              </h2>
            </div>

            {/* Your original content div with better styling */}
            <div className="mb-6">
              <div className="bg-gray-50 rounded-md p-4">
                <p className="text-gray-700 text-sm leading-relaxed max-h-32 overflow-hidden">
                  {paste.content}
                </p>
              </div>
            </div>

            {/* Your original button container with better styling */}
            <div className="flex flex-wrap gap-3 mb-4">
              <button className="bg-blue-100 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200">
                <a href={`/?pasteId=${paste?._id}`} className="text-white no-underline">
                  Edit
                </a>
              </button>

              <a href={`/pastes/${paste._id}`}>
                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md transition-colors duration-200">
                  View
                </button>
              </a>




              <button
                onClick={() => {
                  navigator.clipboard.writeText(paste?.content)
                  toast.success("copied to clipboard");
                }}
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
              >
                copy
              </button>

              <button
                onClick={() => handleDelete(paste?._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
              >
                Delete
              </button>


              <button
                onClick={() => {
                  const url = `${window.location.origin}/?pasteId=${paste._id}`;

                  if (navigator.share) {
                    navigator.share({
                      title: paste.title,
                      text: 'Check out this paste!',
                      url: url,
                    }).catch((err) => {
                      console.error("Sharing failed:", err);
                      navigator.clipboard.writeText(url);
                      toast.success("Link copied to clipboard!");
                    });
                  } else {
                    navigator.clipboard.writeText(url);
                    toast.success("Link copied to clipboard!");
                  }
                }}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md transition-colors duration-200"
              >
                Share
              </button>


            </div>

            {/* Your original date div with better styling */}
            <div className="text-sm text-gray-500 border-t border-gray-100 pt-3">
              Created: {new Date(paste.createdAt).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Paste;