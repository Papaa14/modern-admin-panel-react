
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { DashboardHeader } from '@/components/DashboardHeader';
import { MetricsCards } from '@/components/MetricsCards';
import { ProductSalesChart } from '@/components/ProductSalesChart';
import { SalesByCategory } from '@/components/SalesByCategory';
import { SalesByCountries } from '@/components/SalesByCountries';

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-gray-50">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <DashboardHeader />
          <div className="flex-1 p-6 space-y-6">
            <MetricsCards />
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              <div className="xl:col-span-2">
                <ProductSalesChart />
              </div>
              <div className="space-y-6">
                <SalesByCategory />
                <SalesByCountries />
              </div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
