
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { month: '1 Jul', grossMargin: 35, revenue: 38 },
  { month: '2 Jul', grossMargin: 42, revenue: 35 },
  { month: '3 Jul', grossMargin: 28, revenue: 50 },
  { month: '4 Jul', grossMargin: 45, revenue: 48 },
  { month: '5 Jul', grossMargin: 55, revenue: 60 },
  { month: '6 Jul', grossMargin: 38, revenue: 65 },
  { month: '7 Jul', grossMargin: 25, revenue: 35 },
  { month: '8 Jul', grossMargin: 35, revenue: 45 },
  { month: '9 Jul', grossMargin: 42, revenue: 40 },
  { month: '10 Jul', grossMargin: 48, revenue: 55 },
  { month: '11 Jul', grossMargin: 35, revenue: 45 },
  { month: '12 Jul', grossMargin: 55, revenue: 62 },
];

export function ProductSalesChart() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">Product sales</h3>
          <div className="flex items-center space-x-4 mt-2">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Gross margin</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Revenue</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-gray-900">$52,187</p>
          <p className="text-sm text-green-600 font-medium">+2.5%</p>
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6b7280' }}
            />
            <Bar dataKey="grossMargin" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="revenue" fill="#f97316" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
