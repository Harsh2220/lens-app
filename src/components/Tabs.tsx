import { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";

export default function Tabs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <div className="flex justify-center">
        <Tab.List className="max-[480px]:max-w-[180px] inline-flex flex-wrap justify-center bg-slate-200 rounded-[20px] p-1 mb-8 min-[480px]:mb-12">
          <Tab>
            <button
              className={`flex-1 text-sm font-medium h-8 px-4 rounded-2xl whitespace-nowrap focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out ${
                selectedIndex === 0
                  ? "bg-purple-500 text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
              }}`}
            >
              iOS
            </button>
          </Tab>
          <Tab>
            <button
              className={`flex-1 text-sm font-medium h-8 px-4 rounded-2xl whitespace-nowrap focus-visible:outline-none ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-indigo-300 transition-colors duration-150 ease-in-out ${
                selectedIndex === 1
                  ? "bg-purple-500 text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
              }}`}
            >
              Android
            </button>
          </Tab>
        </Tab.List>
      </div>
      <Tab.Panels>
        <Tab.Panel>
          <img src="/qr-code-ios.svg" alt="ios-qrcode" />
        </Tab.Panel>
        <Tab.Panel>
          <img src="/qr-code-android.svg" alt="android-qrcode" />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
