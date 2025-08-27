import React from 'react';

const LogoutDialog = ({ isOpen, onClose, onConfirm }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed z-50 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 transition-opacity">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            <div className="relative bg-white rounded-lg p-8 bg-blend-darken">
              <div className="mb-4 bg-blend-darken">
                <p className="text-lg font-semibold">Are you sure you want to log out?</p>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={onClose}
                  className="mr-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={onConfirm}
                  className="mr-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LogoutDialog;
