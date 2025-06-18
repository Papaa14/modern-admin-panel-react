
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { DashboardHeader } from '@/components/DashboardHeader';
import { Search, Filter, Download, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const transactions = [
  {
    id: 'TXN-001',
    date: '2024-01-15',
    description: 'Payment received - Order #12345',
    type: 'credit',
    amount: 299.99,
    balance: 15750.50,
    category: 'Sales'
  },
  {
    id: 'TXN-002',
    date: '2024-01-15',
    description: 'Refund processed - Order #12340',
    type: 'debit',
    amount: 89.99,
    balance: 15450.51,
    category: 'Refunds'
  },
  {
    id: 'TXN-003',
    date: '2024-01-14',
    description: 'Payment received - Order #12344',
    type: 'credit',
    amount: 199.99,
    balance: 15540.50,
    category: 'Sales'
  }
];

const Ledger = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Ledger</h1>
              <p className="text-gray-600">Financial transactions and account balance</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <DollarSign className="w-8 h-8 text-green-600" />
                  <TrendingUp className="w-5 h-5 text-green-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900">$15,750.50</p>
                <p className="text-sm text-gray-600">Current Balance</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                  <span className="text-sm text-green-600">+12.5%</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">$3,450.75</p>
                <p className="text-sm text-gray-600">This Month</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <TrendingDown className="w-8 h-8 text-red-600" />
                  <span className="text-sm text-red-600">-2.1%</span>
                </div>
                <p className="text-2xl font-bold text-gray-900">$245.30</p>
                <p className="text-sm text-gray-600">Refunds</p>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search transactions..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  <Filter className="w-4 h-4" />
                  <span>Filter</span>
                </button>
              </div>
              <button className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>

            <div className="bg-white rounded-lg shadow-sm border">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Balance</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {transactions.map((transaction) => (
                      <tr key={transaction.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{transaction.id}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.date}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{transaction.description}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                            {transaction.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <span className={transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}>
                            {transaction.type === 'credit' ? '+' : '-'}${transaction.amount.toFixed(2)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          ${transaction.balance.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Ledger;
