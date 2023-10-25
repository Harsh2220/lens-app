"use client";

import React from "react";

export default function Navbar() {
  return (
    <div className="px-6 py-4 mx-auto border-b border-white border-opacity-10 sticky top-0 z-50 bg-black">
      <div className="flex items-center justify-between">
        <div className="w-auto p-2">
          <div className="flex flex-wrap items-center">
            <div className="w-auto">
              <p className="font-semibold text-xl">🌿 Lens App</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
