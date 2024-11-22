'use client';

import { Button } from '@/components/ui/button';
import { Maximize2 } from 'lucide-react';

export function TimelineHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-semibold text-[#0F172A]">Project Timeline</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#22C55E]" />
            <span className="text-sm text-[#64748B]">In progress</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#EF4444]" />
            <span className="text-sm text-[#64748B]">Overdue</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#F59E0B]" />
            <span className="text-sm text-[#64748B]">Pending</span>
          </div>
        </div>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        className="h-8 w-8 hover:bg-[#F1F5F9]"
      >
        <Maximize2 className="h-4 w-4 text-[#64748B]" />
      </Button>
    </div>
  );
}