'use client';

import { Avatar } from '@/components/ui/avatar';
import { Camera, ChevronRight } from 'lucide-react';

interface TimelineTaskProps {
  task: {
    title: string;
    assignee: {
      initials: string;
      color: string;
      bgColor: string;
    };
    startColumn: number;
    duration: number;
    attachments: number;
    hasCamera?: boolean;
    hasChevron?: boolean;
  };
}

export function TimelineTask({ task }: TimelineTaskProps) {
  const leftPosition = `${task.startColumn * 14.28}%`;
  const width = `${task.duration * 14.28}%`;

  return (
    <div 
      className="absolute top-2 h-10 rounded-[32px] mx-2 flex items-center group"
      style={{ 
        left: leftPosition,
        width: `calc(${width} - 16px)`,
        backgroundColor: task.assignee.bgColor
      }}
    >
      <div className="flex items-center gap-2 px-1.5 w-full">
        <Avatar className="h-8 w-8 border-2 border-white">
          <div 
            className="w-full h-full flex items-center justify-center text-xs font-medium rounded-full"
            style={{ 
              backgroundColor: task.assignee.color,
              color: task.assignee.bgColor 
            }}
          >
            {task.assignee.initials}
          </div>
        </Avatar>
        <span 
          className="text-sm leading-none font-medium" 
          style={{ color: task.assignee.color }}
        >
          {task.title}
        </span>
        <div className="ml-auto flex items-center gap-2">
          {task.hasCamera && (
            <div className="flex items-center gap-1">
              <div className="bg-white rounded-full p-1">
                <Camera 
                  className="h-3.5 w-3.5" 
                  style={{ color: task.assignee.color }} 
                />
              </div>
            </div>
          )}
          {task.hasChevron && (
            <div className="bg-white rounded-full p-1">
              <ChevronRight 
                className="h-3.5 w-3.5" 
                style={{ color: task.assignee.color }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}