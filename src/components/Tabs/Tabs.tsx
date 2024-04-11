'use client'
import { useState } from "react";
interface TabsProps {
  tabs: Tab[];
}

const Tabs = ({ tabs }: TabsProps): JSX.Element => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  return (
    <div>
      <div className="flex mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${
              tab.id === activeTab
                ? "border-b-2 border-amber-500"
                : "border-b border-transparent"
            } mx-1 px-4 py-2 focus:outline-none text-white`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
