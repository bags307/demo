'use client';

import { MapPin } from 'lucide-react';
import Link from 'next/link';

export function ProjectOverview() {
  return (
    <div className="grid grid-cols-[3fr_1fr] gap-6">
      <div className="grid grid-cols-3 gap-6">
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-[#64748B]">
            Total Estimated Scope
          </h3>
          <div className="flex items-baseline">
            <span className="text-[28px] font-semibold text-[#0F172A]">$123,456</span>
            <span className="text-xl font-semibold text-[#64748B]">.78</span>
          </div>
          <div className="text-sm text-[#64748B]">Last updated 2 days ago</div>
        </div>
        
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-[#64748B]">
            Current Phase
          </h3>
          <p className="text-[28px] font-semibold text-[#0F172A]">Inspection</p>
          <div className="text-sm text-[#64748B]">Started 3 days ago</div>
        </div>
        
        <div className="space-y-1">
          <h3 className="text-sm font-medium text-[#64748B]">
            Estimated End Date
          </h3>
          <p className="text-[28px] font-semibold text-[#0F172A]">10/21/2024</p>
          <div className="text-sm text-[#64748B]">On schedule</div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-sm font-medium text-[#64748B]">Property address</h3>
          <Link 
            href="/projects"
            className="text-sm font-medium text-[#2563EB] hover:text-[#1D4ED8]"
          >
            See all projects
          </Link>
        </div>
        <div className="flex items-start gap-2">
          <MapPin className="h-5 w-5 text-[#EF4444] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-[#0F172A]">
            3 Elizabeth Street #104, Burgettstown Boro, PA 15021, USA
          </p>
        </div>
      </div>
    </div>
  );
}