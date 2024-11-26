import React, { useState } from 'react';

interface TabsProps {
  children: React.ReactNode;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
  };

  return (
    <div>
      <div className="flex border-b border-gray-200">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type.name === 'TabsTrigger') {
            return (
              <button
                key={child.props.value}
                className={`px-4 py-2 font-medium ${
                  child.props.value === activeTab
                    ? 'border-b-2 border-blue-500 text-blue-500'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => handleTabClick(child.props.value)}
              >
                {child.props.children}
              </button>
            );
          }
          return null;
        })}
      </div>
      <div className="mt-4">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.type.name === 'TabsContent') {
            return child.props.value === activeTab && child;
          }
          return null;
        })}
      </div>
    </div>
  );
};

interface TabsTriggerProps {
  value: string;
  children: React.ReactNode;
}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ value, children }) => children;

interface TabsContentProps {
  value: string;
  children: React.ReactNode;
}

export const TabsContent: React.FC<TabsContentProps> = ({ value, children }) => children;

export default Tabs;