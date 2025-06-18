
import React from 'react';
import { TrendingUp, TrendingDown, Users, ShoppingBag, DollarSign, Package } from 'lucide-react';

const metrics = [
  {
    title: 'Total customers',
    value: '567,899',
    change: '+2.5%',
    trend: 'up',
    icon: Users,
  },
  {
    title: 'Total revenue',
    value: '$3,465 M',
    change: '+5.8%',
    trend: 'up',
    icon: DollarSign,
  },
  {
    title: 'Total orders',
    value: '1,136 M',
    change: '-0.2%',
    trend: 'down',
    icon: ShoppingBag,
  },
  {
    title: 'Total returns',
    value: '1,789',
    change: '+0.12%',
    trend: 'up',
    icon: Package,
  },
];

export function MetricsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="p-2 bg-gray-50 rounded-lg">
              <metric.icon className="w-5 h-5 text-gray-600" />
            </div>
            <div className={`flex items-center space-x-1 text-sm font-medium ${
              metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
            }`}>
              {metric.trend === 'up' ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span>{metric.change}</span>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">{metric.title}</p>
            <p className="text-2xl font-bold text-gray-900">{metric.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
