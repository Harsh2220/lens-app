import React, { useState } from "react";
import Modal from "./UI/Modal";
import { Tabs } from "./UI/Tabs";

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g id="Menu / Close_MD">
          {" "}
          <path
            id="Vector"
            d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}

export default function DownloadApp() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen ? (
        <Modal>
          <div className="px-4 pt-4">
            <div
              className="cursor-pointer h-6 w-6 ml-auto"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <CloseIcon />
            </div>
            <div className="text-center mt-4">
              <h1 className="text-3xl font-bold">Get the full experience</h1>
              <h3 className="text-lg font-semibold mt-2 text-gray-400">
                Download app Now
              </h3>
            </div>
            <div className="mt-8">
              <Tabs />
            </div>
          </div>
        </Modal>
      ) : null}
    </>
  );
}
