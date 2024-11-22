'use client';

import { ProjectCalendar } from '@/components/project/project-calendar';
import { ProjectThreads } from '@/components/project/project-threads';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

export function RightSidebar() {
  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Ask Sam Button */}
      <div className="p-4">
        <Button 
          className="w-full bg-[#0F172A] hover:bg-[#1E293B] text-white h-[56px] rounded-2xl"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <img src="https://github.com/shadcn.png" alt="Sam" />
              </Avatar>
              <span className="text-base font-semibold">Ask Sam Anything!</span>
            </div>
            <MessageSquare className="h-5 w-5" />
          </div>
        </Button>
      </div>

      {/* Fixed height calendar */}
      <div className="flex-shrink-0">
        <ProjectCalendar />
      </div>
      
      {/* Scrollable threads section */}
      <div className="flex-1 overflow-y-auto scrollbar-hide">
        <ProjectThreads />
      </div>
    </div>
  );
}