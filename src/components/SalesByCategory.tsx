
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Living room', value: 26, color: '#8b5cf6' },
  { name: 'Kids', value: 17, color: '#06b6d4' },
  { name: 'Office', value: 13, color: '#3b82f6' },
  { name: 'Bedroom', value: 12, color: '#10b981' },
  { name: 'Kitchen', value: 9, color: '#f59e0b' },
  { name: 'Bathroom', value: 8, color: '#ef4444' },
  { name: 'Dining room', value: 6, color: '#ec4899' },
  { name: 'Decor', value: 5, color: '#84cc16' },
  { name: 'Lighting', value: 3, color: '#06b6d4' },
  { name: 'Outdoor', value: 2, color: '#14b8a6' },
];

export function SalesByCategory() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales by product category</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="space-y-2 mt-4">
        {data.slice(0, 6).map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              ></div>
              <span className="text-gray-600">{item.name}</span>
            </div>
            <span className="font-medium text-gray-900">{item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
