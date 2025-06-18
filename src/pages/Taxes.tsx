
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { DashboardHeader } from '@/components/DashboardHeader';
import { Calculator, FileText, Download, Calendar } from 'lucide-react';

const taxData = [
  {
    period: 'Q4 2023',
    status: 'filed',
    dueDate: '2024-01-31',
    taxableIncome: 125000,
    taxOwed: 22500,
    taxPaid: 22500
  },
  {
    period: 'Q3 2023',
    status: 'filed',
    dueDate: '2023-10-31',
    taxableIncome: 98000,
    taxOwed: 17640,
    taxPaid: 17640
  },
  {
    period: 'Q2 2023',
    status: 'pending',
    dueDate: '2024-04-30',
    taxableIncome: 87500,
    taxOwed: 15750,
    taxPaid: 0
  }
];

const Taxes = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'filed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'overdue': return 'bg-red-100 text-red-800';
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Taxes</h1>
              <p className="text-gray-600">Manage tax filings and calculations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <Calculator className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">$310,500</p>
                <p className="text-sm text-gray-600">Total Taxable Income</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <FileText className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">$55,890</p>
                <p className="text-sm text-gray-600">Total Tax Owed</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <Download className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">$40,140</p>
                <p className="text-sm text-gray-600">Tax Paid</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <Calendar className="w-8 h-8 text-red-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">$15,750</p>
                <p className="text-sm text-gray-600">Outstanding</p>
              </div>
            </div>

            <div className="space-y-4">
              {taxData.map((tax, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{tax.period}</h3>
                      <p className="text-sm text-gray-600">Due: {tax.dueDate}</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(tax.status)}`}>
                        {tax.status.charAt(0).toUpperCase() + tax.status.slice(1)}
                      </span>
                      <button className="text-blue-600 hover:text-blue-700 font-medium">View Details</button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-1">Taxable Income</p>
                      <p className="text-xl font-bold text-gray-900">${tax.taxableIncome.toLocaleString()}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-1">Tax Owed</p>
                      <p className="text-xl font-bold text-red-600">${tax.taxOwed.toLocaleString()}</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-500 mb-1">Tax Paid</p>
                      <p className="text-xl font-bold text-green-600">${tax.taxPaid.toLocaleString()}</p>
                    </div>
                  </div>

                  {tax.taxPaid < tax.taxOwed && (
                    <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <p className="text-sm text-yellow-800">
                        Outstanding balance: ${(tax.taxOwed - tax.taxPaid).toLocaleString()}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Taxes;
