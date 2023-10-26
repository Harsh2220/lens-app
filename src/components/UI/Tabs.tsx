import { useEffect, useRef, useState } from "react";

const tabsData = [
  {
    label: "iOS",
  },
  {
    label: "Android",
  },
];

export function Tabs() {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const tabsRef = useRef([]);

  useEffect(() => {
    function setTabPosition() {
      const currentTab = tabsRef.current[activeTabIndex];
      setTabUnderlineLeft(currentTab?.offsetLeft ?? 0);
      setTabUnderlineWidth(currentTab?.clientWidth ?? 0);
    }

    setTabPosition();
    window.addEventListener("resize", setTabPosition);

    return () => window.removeEventListener("resize", setTabPosition);
  }, [activeTabIndex]);

  return (
    <div>
      <div className="relative">
        <div className="flex justify-evenly">
          {tabsData.map((tab, id) => {
            return (
              <button
                key={id}
                ref={(el) => (tabsRef.current[id] = el)}
                className="pt-2 pb-3 text-2xl font-semibold"
                onClick={() => setActiveTabIndex(id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <span
          className="absolute bottom-0 block h-1 bg-purple-500 transition-all duration-300 rounded-lg"
          style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
        />
      </div>
      <div className="py-4">
        <img
          src={
            activeTabIndex === 0 ? "/qr-code-ios.svg" : "/qr-code-android.svg"
          }
        />
      </div>
    </div>
  );
}
