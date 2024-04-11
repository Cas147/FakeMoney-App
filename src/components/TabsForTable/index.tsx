"use client";

import { useCallback } from "react";

interface TabsProps {
  tabs: Tab[];
  activeTab: string;
  setActiveTab: (id: string) => void;
  isLoading?: boolean;
}

const TabsTable = ({
  tabs,
  activeTab,
  setActiveTab,
  isLoading,
}: TabsProps): JSX.Element => {
  return (
    <div>
      <div className="flex mb-4">
        {tabs.map((tab) => (
          <button
            disabled={isLoading}
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

export default TabsTable;
