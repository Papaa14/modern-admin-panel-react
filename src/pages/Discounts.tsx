
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { DashboardHeader } from '@/components/DashboardHeader';
import { Search, Filter, Plus, Percent, Calendar, Users } from 'lucide-react';

const discounts = [
  {
    id: 1,
    code: 'SUMMER2024',
    type: 'percentage',
    value: '25%',
    description: 'Summer Sale - 25% off all items',
    startDate: '2024-06-01',
    endDate: '2024-08-31',
    used: 145,
    limit: 500,
    status: 'active'
  },
  {
    id: 2,
    code: 'NEWUSER',
    type: 'fixed',
    value: '$10',
    description: 'New customer discount',
    startDate: '2024-01-01',
    endDate: '2024-12-31',
    used: 89,
    limit: 1000,
    status: 'active'
  },
  {
    id: 3,
    code: 'SPRING2024',
    type: 'percentage',
    value: '15%',
    description: 'Spring collection discount',
    startDate: '2024-03-01',
    endDate: '2024-05-31',
    used: 234,
    limit: 300,
    status: 'expired'
  }
];

const Discounts = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'expired': return 'bg-red-100 text-red-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Discounts</h1>
              <p className="text-gray-600">Create and manage discount codes and promotions</p>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search discounts..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
              </div>
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                <Plus className="w-4 h-4" />
                <span>Create Discount</span>
              </button>
            </div>

            <div className="space-y-4">
              {discounts.map((discount) => (
                <div key={discount.id} className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Percent className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{discount.code}</h3>
                        <p className="text-sm text-gray-600">{discount.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(discount.status)}`}>
                        {discount.status.charAt(0).toUpperCase() + discount.status.slice(1)}
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">Edit</button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-1">
                        <Percent className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500">Discount Value</span>
                      </div>
                      <p className="text-xl font-bold text-gray-900">{discount.value}</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-1">
                        <Calendar className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500">Valid Period</span>
                      </div>
                      <p className="text-sm font-medium text-gray-900">{discount.startDate}</p>
                      <p className="text-sm text-gray-600">to {discount.endDate}</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-1">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-500">Usage</span>
                      </div>
                      <p className="text-xl font-bold text-gray-900">{discount.used}</p>
                      <p className="text-sm text-gray-600">of {discount.limit}</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="text-sm text-gray-500">Usage Rate</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full"
                            style={{ width: `${(discount.used / discount.limit) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {Math.round((discount.used / discount.limit) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Discounts;
