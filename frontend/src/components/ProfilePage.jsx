"use client";

import React from "react";

export default function ProfilePage({ user, userType }) {
  const name =
    [user?.firstName, user?.lastName].filter(Boolean).join(" ") ||
    user?.user_name ||
    user?.username ||
    user?.name ||
    (user?.email ? user.email.split("@")[0] : "User");

  const role = (userType || "jobseeker")
    .toString()
    .replace(/^[a-z]/, (c) => c.toUpperCase());

  const fields = [
    {
      label: "Phone",
      value: user?.phone || null,
      icon: "📞",
      color: "bg-green-500",
    },
    {
      label: "Date of Birth",
      value: user?.dob || user?.dateOfBirth
        ? String(user?.dob || user?.dateOfBirth).split("T")[0]
        : null,
      icon: "🎂",
      color: "bg-orange-500",
    },
    {
      label: "Gender",
      value: user?.gender
        ? user.gender.charAt(0).toUpperCase() + user.gender.slice(1)
        : null,
      icon: "👤",
      color: "bg-teal-500",
    },
    {
      label: "Address",
      value: user?.address
        ? typeof user.address === "string"
          ? user.address
          : user.address?.street || null
        : null,
      icon: "📍",
      color: "bg-red-500",
    },
    {
      label: "Email",
      value: user?.email || null,
      icon: "✉️",
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="p-4 space-y-4">

      {/* Profile Header Card */}
      <div className="rounded-3xl bg-white border border-gray-100 shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-50 to-blue-50 px-5 py-5 flex items-center gap-4">
          {/* Avatar */}
          <div className="relative shrink-0">
            {user?.profileImage ? (
              <img
                src={user.profileImage}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-md"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-400 to-blue-600 flex items-center justify-center ring-4 ring-white shadow-md">
                <span className="text-2xl font-bold text-white">
                  {(name || "U").charAt(0).toUpperCase()}
                </span>
              </div>
            )}
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-400 rounded-full border-2 border-white shadow" />
          </div>

          {/* Info */}
          <div className="min-w-0">
            <h2 className="text-lg font-bold text-gray-900 truncate">{name}</h2>
            <p className="text-sm text-indigo-600 font-medium">{role}</p>
            <p className="text-xs text-gray-400 truncate mt-0.5">{user?.email || ""}</p>
          </div>
        </div>
      </div>

      {/* Profile Information Card */}
      <div className="rounded-3xl bg-white border border-gray-100 shadow-md overflow-hidden">
        <div className="px-5 pt-4 pb-1">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            Profile Information
          </p>
        </div>

        {fields.map((field, i) => (
          <div
            key={field.label}
            className={`flex items-center gap-4 px-5 py-3.5 ${i < fields.length - 1 ? "border-b border-gray-100" : ""
              }`}
          >
            {/* Icon Badge */}
            <div
              className={`w-9 h-9 rounded-xl ${field.color} flex items-center justify-center text-white text-base shadow-sm shrink-0`}
            >
              {field.icon}
            </div>

            {/* Label + Value */}
            <div className="min-w-0">
              <p className="text-[11px] text-gray-400 font-medium uppercase tracking-wide">
                {field.label}
              </p>
              <p
                className={`text-sm font-semibold truncate ${field.value ? "text-gray-900" : "text-gray-300 italic"
                  }`}
              >
                {field.value || "Not provided"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
