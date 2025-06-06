import React from "react";

export default function NavAdmin() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="/admin/dashboard" className="hover:underline">
            Dashboard
          </a>
        </li>
        <li>
          <a href="/admin/users" className="hover:underline">
            Users
          </a>
        </li>
        <li>
          <a href="/admin/settings" className="hover:underline">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
}
