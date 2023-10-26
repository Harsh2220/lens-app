import React from "react";

export default function Modal({ children }: { children: React.ReactNode }) {
  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
    >
      <div className="relative w-full max-w-sm max-h-full">
        <div className="relative rounded-lg shadow bg-gray-950">{children}</div>
      </div>
    </div>
  );
}
