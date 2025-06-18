
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { DashboardHeader } from '@/components/DashboardHeader';
import { Search, Filter, Plus, Star, Eye } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: '$299.99',
    category: 'Electronics',
    rating: 4.5,
    views: 1234,
    image: '/placeholder.svg'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: '$199.99',
    category: 'Electronics',
    rating: 4.2,
    views: 987,
    image: '/placeholder.svg'
  },
  {
    id: 3,
    name: 'Running Shoes',
    price: '$129.99',
    category: 'Sports',
    rating: 4.8,
    views: 2456,
    image: '/placeholder.svg'
  },
  {
    id: 4,
    name: 'Coffee Maker',
    price: '$89.99',
    category: 'Home',
    rating: 4.3,
    views: 567,
    image: '/placeholder.svg'
  }
];

const Marketplace = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 p-6">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Marketplace</h1>
              <p className="text-gray-600">Manage your products and marketplace listings</p>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search products..."
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
                <span>Add Product</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="aspect-square bg-gray-100 rounded-t-lg mb-4"></div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-bold text-green-600">{product.price}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm text-gray-500">
                        <Eye className="w-4 h-4" />
                        <span>{product.views} views</span>
                      </div>
                      <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                        Edit
                      </button>
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

export default Marketplace;
