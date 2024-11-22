'use client';

import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const currentDate = new Date();

export function ProjectCalendar() {
  return (
    <div className="p-6 bg-white border-b border-[#E2E8F0]">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-lg font-semibold">October 2024</h2>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {days.map((day) => (
          <div key={day} className="text-sm text-[#64748B]">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => {
          const hasEvent = [6, 7, 13, 14, 21].includes(date);
          const isSelected = date === 2;
          return (
            <Button
              key={date}
              variant="ghost"
              className={cn(
                "h-8 w-8 p-0 relative",
                isSelected && "bg-[#EFF6FF] text-[#2563EB]",
                date === currentDate.getDate() && "text-[#2563EB]"
              )}
            >
              {date}
              {hasEvent && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
                </div>
              )}
            </Button>
          );
        })}
      </div>
    </div>
  );
}