import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from "react-router-dom"

const ViewPaste = () => {
  const { id } = useParams();
  const allPaste = useSelector((state) => state.paste.pastes);
  const paste = allPaste.filter((p) => p._id === id)[0];

  // Handle case when paste is not found
  if (!paste) {
    return (
      <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-red-600 mb-4">❌ Paste Not Found</h2>
          <p className="text-gray-600">The paste you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(paste.content);
    // You can add toast notification here if needed
    alert('Content copied to clipboard!');
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-2">
          📖 View Paste
        </h1>
        <p className="text-gray-600 text-center">
          Read-only view of your saved paste
        </p>
      </div>

      {/* Title Section */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Paste Title
        </label>
        <div className="relative">
          <input
            className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 text-lg
                       bg-gray-50 text-gray-700 cursor-not-allowed
                       focus:outline-none"
            type="text"
            value={paste.title}
            disabled
            readOnly
          />
          <div className="absolute right-3 top-3 text-gray-400">
            🔒
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="block text-gray-700 font-medium">
            Paste Content
          </label>
          <button
            onClick={handleCopyToClipboard}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white 
                       rounded-lg font-medium transition-colors duration-200
                       flex items-center gap-2"
          >
            📋 Copy Content
          </button>
        </div>
        
        <div className="relative">
          <textarea
            className="w-full border-2 border-gray-300 rounded-lg p-4 text-base
                       bg-gray-50 text-gray-700 cursor-not-allowed
                       focus:outline-none resize-none
                       font-mono leading-relaxed"
            value={paste.content}
            disabled
            readOnly
            rows={20}
          />
          <div className="absolute right-3 top-3 text-gray-400">
            🔒
          </div>
        </div>
      </div>

      {/* Paste Info */}
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
        <h3 className="font-semibold text-gray-700 mb-2">📊 Paste Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-gray-600">Created:</span>
            <span className="ml-2 text-gray-800">
              {new Date(paste.createdAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </span>
          </div>
          <div>
            <span className="font-medium text-gray-600">Content Length:</span>
            <span className="ml-2 text-gray-800">
              {paste.content.length} characters
            </span>
          </div>
          <div>
            <span className="font-medium text-gray-600">Paste ID:</span>
            <span className="ml-2 text-gray-800 font-mono text-xs">
              {paste._id}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 mt-6 justify-center">
        <a href={`/?pasteId=${paste._id}`}>
          <button className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white 
                           rounded-lg font-medium transition-colors duration-200
                           flex items-center gap-2">
            ✏️ Edit Paste
          </button>
        </a>
        
        <a href="/pastes">
          <button className="px-6 py-3 bg-gray-500 hover:bg-gray-600 text-white 
                           rounded-lg font-medium transition-colors duration-200
                           flex items-center gap-2">
            📄 Back to All Pastes
          </button>
        </a>
      </div>
    </div>
  )
}

export default ViewPaste