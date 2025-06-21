import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from "react-router-dom"
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParam, setSerchParam] = useSearchParams();
  const pasteId = searchParam.get("pasteId");
  const dispatch = useDispatch();
  const allPaste = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPaste.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId])

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    }

    if (pasteId) {
      // update existing paste
      dispatch(updateToPastes(paste));
    } else {
      // create new paste
      dispatch(addToPastes(paste));
    }

    // clear form after creation/update
    setTitle('');
    setValue('');
    setSerchParam({}); // clear URL params
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white min-h-screen">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          {pasteId ? 'Edit Your Paste' : 'Create New Paste'}
        </h1>
        <p className="text-gray-600 text-center mt-2">
          {pasteId ? 'Update your existing paste' : 'Write your content and save it for later'}
        </p>
      </div>

      {/* Title Input and Button Row */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        {/* Title Input - takes 70% width on larger screens */}
        <input
          className="flex-grow border-2 border-gray-300 rounded-lg px-4 py-3 text-lg
                     focus:border-blue-500 focus:outline-none
                     placeholder-gray-500"
          type="text"
          placeholder="Enter your paste title here..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Create/Update Button */}
        <button
          onClick={createPaste}
          className="px-6 py-3 rounded-lg font-semibold text-white
                     bg-blue-500 hover:bg-blue-600
                     transition-colors duration-200
                     min-w-[140px]"
        >
          {pasteId ? '📝 Update Paste' : '✨ Create Paste'}
        </button>
      </div>

      {/* Content Textarea */}
      <div className="mb-6">
        <label className="block text-gray-700 font-medium mb-2">
          Paste Content
        </label>
        <textarea
          className="w-full border-2 border-gray-300 rounded-lg p-4 text-base
                     focus:border-blue-500 focus:outline-none
                     placeholder-gray-500 resize-none"
          value={value}
          placeholder="Enter your content here... 

You can paste code, notes, or any text you want to save!"
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        />
      </div>

      {/* Helper Text */}
      <div className="text-center text-gray-500 text-sm">
        💡 Tip: You can edit this paste later by clicking the "Edit" button from your pastes list
      </div>
    </div>
  )
}

export default Home