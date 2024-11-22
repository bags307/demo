'use client';

interface TimelineGridProps {
  days: string[];
  dates: string[];
  currentDay: number;
}

export function TimelineGrid({ days, dates, currentDay }: TimelineGridProps) {
  return (
    <div className="border border-[#E2E8F0] rounded-lg overflow-hidden bg-white">
      <div className="grid grid-cols-7 border-b border-[#E2E8F0]">
        {days.map((day, i) => (
          <div 
            key={day} 
            className={`py-3 px-4 ${i === currentDay ? 'bg-[#EFF6FF]' : ''} border-r border-[#E2E8F0] last:border-r-0`}
          >
            <div className="text-sm text-[#64748B] mb-1">{day}</div>
            <div className="text-base font-medium text-[#0F172A]">{dates[i]}</div>
          </div>
        ))}
      </div>
      <div className="relative">
        {currentDay >= 0 && (
          <div 
            className="absolute top-0 bottom-0 w-px bg-[#2563EB]"
            style={{ left: `calc(${(currentDay + 1) * 14.28}% - 1px)` }}
          />
        )}
        <div className="grid grid-cols-7 h-[216px]">
          {Array.from({ length: 7 }).map((_, i) => (
            <div 
              key={i}
              className={`${i === currentDay ? 'bg-[#EFF6FF]' : ''} border-r border-[#E2E8F0] last:border-r-0`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}