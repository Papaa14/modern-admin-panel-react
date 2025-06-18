
import React from 'react';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  Users, 
  BarChart3, 
  Settings, 
  CreditCard,
  Tag,
  TrendingUp,
  Globe,
  Menu
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';

const marketingItems = [
  { title: 'Dashboard', url: '/', icon: LayoutDashboard },
  { title: 'Marketplace', url: '/marketplace', icon: ShoppingCart },
  { title: 'Orders', url: '/orders', icon: Package },
  { title: 'Tracking', url: '/tracking', icon: TrendingUp },
  { title: 'Customers', url: '/customers', icon: Users },
  { title: 'Discounts', url: '/discounts', icon: Tag },
];

const paymentsItems = [
  { title: 'Ledger', url: '/ledger', icon: CreditCard },
  { title: 'Taxes', url: '/taxes', icon: BarChart3 },
];

const systemItems = [
  { title: 'Settings', url: '/settings', icon: Settings },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === 'collapsed';

  const getNavClass = (isActive: boolean) =>
    `w-full justify-start transition-colors ${
      isActive 
        ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' 
        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
    }`;

  return (
    <Sidebar className={`border-r bg-white ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-4 border-b">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
            <Globe className="w-5 h-5 text-white" />
          </div>
          {!isCollapsed && (
            <div>
              <h2 className="font-semibold text-gray-900">Flup</h2>
              <p className="text-xs text-gray-500">Admin Manager</p>
            </div>
          )}
        </div>
        <div className="mt-4 flex justify-center">
          <SidebarTrigger />
        </div>
      </div>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider px-2 py-2">
            {!isCollapsed ? 'Marketing' : ''}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {marketingItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => getNavClass(isActive)}
                      title={isCollapsed ? item.title : undefined}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!isCollapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider px-2 py-2">
            {!isCollapsed ? 'Payments' : ''}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {paymentsItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => getNavClass(isActive)}
                      title={isCollapsed ? item.title : undefined}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!isCollapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-gray-500 uppercase tracking-wider px-2 py-2">
            {!isCollapsed ? 'System' : ''}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {systemItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={({ isActive }) => getNavClass(isActive)}
                      title={isCollapsed ? item.title : undefined}
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!isCollapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <div className="p-4 border-t mt-auto">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
            <Users className="w-4 h-4 text-gray-600" />
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">Harper Nelson</p>
              <p className="text-xs text-gray-500 truncate">Admin Manager</p>
            </div>
          )}
        </div>
      </div>
    </Sidebar>
  );
}
