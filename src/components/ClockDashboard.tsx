import { useState } from 'react';
import { LayoutGrid, Clock, Watch } from 'lucide-react';
import DigitalClock from './DigitalClock';
import AnalogClock from './AnalogClock';
import CustomClocks from './CustomClocks';

export default function ClockDashboard() {
  const [activeTab, setActiveTab] = useState('digital');

  const tabs = [
    { id: 'digital', label: 'Digital Clock', icon: Clock },
    { id: 'analog', label: 'Analog Clock', icon: Watch },
    { id: 'custom', label: 'Custom Clocks', icon: LayoutGrid },
  ];

  return (
    <div className="bg-gray-50">
      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex gap-8">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-4 font-medium flex items-center gap-2 transition-all duration-300 border-b-2 ${
                    isActive
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        {activeTab === 'digital' && <DigitalClock />}
        {activeTab === 'analog' && <AnalogClock />}
        {activeTab === 'custom' && <CustomClocks />}
      </div>
    </div>
  );
}
