import React from 'react';
import { getAge } from '../utils/ageCalculator';

const UserCard = ({ user }) => (
  <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
    <div className="mb-4">
      <img
        src={user.imageUrl}
        alt={`${user.firstName} ${user.lastName}`}
        className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-gray-200"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/150/6B7280/FFFFFF?text=User';
        }}
      />
    </div>
    <h3 className="text-xl font-bold text-gray-800 mb-2">
      {user.firstName} {user.lastName}
    </h3>
    <div className="space-y-2">
      <div className="flex items-center justify-center gap-2 text-gray-600">
        <span className="material-icons text-base">D.O.B</span>
        <span className="text-sm">{user.dob}</span>
      </div>
      <div className="bg-blue-50 rounded-lg px-3 py-2">
        <p className="text-sm text-gray-600">Age</p>
        <p className="text-xl font-bold text-blue-600">{getAge(user.dob)} years old</p>
      </div>
    </div>
  </div>
);

export default UserCard; 