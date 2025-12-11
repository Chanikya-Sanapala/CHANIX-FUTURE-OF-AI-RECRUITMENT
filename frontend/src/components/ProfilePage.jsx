"use client";

import React from "react";

export default function ProfilePage({ user, userType }) {
  const name =
    [user?.firstName, user?.lastName].filter(Boolean).join(" ") ||
    user?.user_name ||
    user?.username ||
    user?.name ||
    (user?.email ? user.email.split("@")[0] : "User");

  return (
    <div className="space-y-4">
      <div className="mb-4 p-4 bg-gray-50 rounded shadow">
        <div className="flex items-center mb-2">
          <div className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
            {(name || "U").charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="font-bold text-lg text-gray-900">{name}</div>
            <div className="text-sm text-gray-600">{(userType || "jobseeker").toString().replace(/^[a-z]/, c => c.toUpperCase())}</div>
            <div className="text-sm text-gray-600">{user?.email || ""}</div>
          </div>
        </div>
      </div>

      <div className="mb-4 p-4 bg-white rounded shadow">
        <div className="font-semibold mb-2 text-gray-900">Profile Information</div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <span className="font-medium">Phone</span>
            <br />
            {user?.phone || "Not provided"}
          </div>
          <div>
            <span className="font-medium">Date of Birth</span>
            <br />
            {user?.dob || user?.dateOfBirth || "Not provided"}
          </div>
          <div>
            <span className="font-medium">Gender</span>
            <br />
            {user?.gender || "Not provided"}
          </div>
          <div>
            <span className="font-medium">Address</span>
            <br />
            {user?.address || "Not provided"}
          </div>
        </div>
      </div>
    </div>
  );
}
