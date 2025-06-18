
import React from 'react';

const countries = [
  { name: 'Poland', percentage: 19, flag: '🇵🇱' },
  { name: 'Austria', percentage: 15, flag: '🇦🇹' },
  { name: 'Spain', percentage: 13, flag: '🇪🇸' },
  { name: 'Romania', percentage: 12, flag: '🇷🇴' },
  { name: 'France', percentage: 11, flag: '🇫🇷' },
  { name: 'Italy', percentage: 11, flag: '🇮🇹' },
  { name: 'Germany', percentage: 10, flag: '🇩🇪' },
  { name: 'Ukraine', percentage: 9, flag: '🇺🇦' },
];

export function SalesByCountries() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales by countries</h3>
      <div className="space-y-3">
        {countries.map((country, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-lg">{country.flag}</span>
              <span className="text-sm font-medium text-gray-700">{country.name}</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-16 bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${country.percentage * 5}%` }}
                ></div>
              </div>
              <span className="text-sm font-medium text-gray-900 w-8 text-right">
                {country.percentage}%
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-gray-50 rounded-lg">
        <div className="w-24 h-16 bg-green-100 rounded-lg mx-auto flex items-center justify-center">
          <span className="text-2xl">🗺️</span>
        </div>
      </div>
    </div>
  );
}
