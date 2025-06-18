
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { DashboardHeader } from '@/components/DashboardHeader';
import { Package, Truck, MapPin, Clock, CheckCircle } from 'lucide-react';

const trackingData = [
  {
    id: '#12345',
    customer: 'John Doe',
    status: 'delivered',
    location: 'New York, NY',
    lastUpdate: '2 hours ago',
    estimatedDelivery: 'Delivered',
    progress: 100
  },
  {
    id: '#12346',
    customer: 'Jane Smith',
    status: 'in-transit',
    location: 'Chicago, IL',
    lastUpdate: '4 hours ago',
    estimatedDelivery: 'Today, 6:00 PM',
    progress: 75
  },
  {
    id: '#12347',
    customer: 'Mike Johnson',
    status: 'picked-up',
    location: 'Warehouse A',
    lastUpdate: '1 day ago',
    estimatedDelivery: 'Tomorrow, 2:00 PM',
    progress: 25
  }
];

const Tracking = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'text-green-600';
      case 'in-transit': return 'text-blue-600';
      case 'picked-up': return 'text-yellow-600';
      default: return 'text-gray-600';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="w-5 h-5" />;
      case 'in-transit': return <Truck className="w-5 h-5" />;
      case 'picked-up': return <Package className="w-5 h-5" />;
      default: return <Package className="w-5 h-5" />;
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Tracking</h1>
              <p className="text-gray-600">Monitor shipment status and delivery progress</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <Package className="w-8 h-8 text-blue-600" />
                  <span className="text-2xl font-bold text-gray-900">156</span>
                </div>
                <p className="text-sm text-gray-600">Total Shipments</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <Truck className="w-8 h-8 text-green-600" />
                  <span className="text-2xl font-bold text-gray-900">89</span>
                </div>
                <p className="text-sm text-gray-600">In Transit</p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                  <span className="text-2xl font-bold text-gray-900">67</span>
                </div>
                <p className="text-sm text-gray-600">Delivered</p>
              </div>
              <div className="bg-white rounde d-lg p-6 shadow-sm border">
                <div className="flex items-center justify-between mb-2">
                  <Clock className="w-8 h-8 text-yellow-600" />
                  <span className="text-2xl font-bold text-gray-900">12</span>
                </div>
                <p className="text-sm text-gray-600">Pending</p>
              </div>
            </div>

            <div className="space-y-4">
              {trackingData.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-sm border p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className={`${getStatusColor(item.status)}`}>
                        {getStatusIcon(item.status)}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Order {item.id}</h3>
                        <p className="text-sm text-gray-600">{item.customer}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900 capitalize">{item.status.replace('-', ' ')}</p>
                      <p className="text-xs text-gray-500">{item.lastUpdate}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">Current Location: {item.location}</span>
                      </div>
                      <span className="text-sm text-gray-600">ETA: {item.estimatedDelivery}</span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <div className="flex space-x-6">
                      <div className="flex items-center space-x-1">
                        <div className={`w-2 h-2 rounded-full ${item.progress >= 25 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                        <span className="text-gray-600">Picked Up</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className={`w-2 h-2 rounded-full ${item.progress >= 75 ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                        <span className="text-gray-600">In Transit</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className={`w-2 h-2 rounded-full ${item.progress >= 100 ? 'bg-green-600' : 'bg-gray-300'}`}></div>
                        <span className="text-gray-600">Delivered</span>
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium">View Details</button>
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

export default Tracking;
