'use client';

import { LayoutDashboard, Building2, Settings, Users } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Projects', href: '/projects', icon: Building2 },
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Admin', href: '/admin', icon: Users },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-[240px] flex-col bg-white">
      <div className="flex h-[72px] items-center px-6">
        <Image
          src="https://ppspot.com/projects/demo-o82y47/assets/62eqtqyau5qj/remodL-dark2.png"
          alt="remodL"
          width={100}
          height={24}
          className="h-6 w-auto"
        />
      </div>
      <nav className="flex-1 space-y-1 px-3 py-6">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          const isProjects = item.name === 'Projects';
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "group flex h-10 w-full items-center gap-3 rounded-md px-3 text-[15px] font-medium transition-colors",
                isProjects 
                  ? "bg-[#FCD34D] text-[#0F172A]" 
                  : isActive 
                    ? "bg-[#F1F5F9] text-[#0F172A]" 
                    : "text-[#64748B] hover:bg-[#F8FAFC] hover:text-[#0F172A]"
              )}
            >
              <item.icon
                className={cn(
                  "h-[18px] w-[18px]",
                  isProjects || isActive ? "text-[#0F172A]" : "text-[#94A3B8]"
                )}
                aria-hidden="true"
              />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}