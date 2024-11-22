'use client';

import { Avatar } from '@/components/ui/avatar';
import { Camera, ChevronRight } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  assignee: {
    initials: string;
    avatar?: string;
  };
  startDate: Date;
  endDate: Date;
  status: 'done' | 'overdue' | 'in-progress';
  hasCamera?: boolean;
  hasChevron?: boolean;
}

interface TimelineGanttProps {
  tasks: Task[];
  startDate: Date;
  days: number;
  onTaskClick: (task: Task) => void;
}

export function TimelineGantt({ tasks, startDate, days, onTaskClick }: TimelineGanttProps) {
  const getStatusStyles = (status: Task['status']) => {
    switch (status) {
      case 'done':
        return {
          bg: '#BBF7D0',
          text: '#166534',
          border: '#86EFAC'
        };
      case 'overdue':
        return {
          bg: '#FECDD3',
          text: '#9F1239',
          border: '#FDA4AF'
        };
      case 'in-progress':
        return {
          bg: '#FDE68A',
          text: '#854D0E',
          border: '#FCD34D'
        };
    }
  };

  const calculatePosition = (task: Task) => {
    const startDiff = task.startDate.getTime() - startDate.getTime();
    const duration = task.endDate.getTime() - task.startDate.getTime();
    const dayInMs = 24 * 60 * 60 * 1000;
    
    const startCol = Math.floor(startDiff / dayInMs);
    const durationDays = Math.ceil(duration / dayInMs);
    
    return {
      left: `${(startCol / days) * 100}%`,
      width: `${(durationDays / days) * 100}%`
    };
  };

  return (
    <div className="relative min-h-[500px]">
      {/* Grid lines */}
      <div className="absolute inset-0 grid" style={{ gridTemplateColumns: `repeat(${days}, 1fr)` }}>
        {Array.from({ length: days }).map((_, i) => (
          <div key={i} className="border-r border-[#E2E8F0] last:border-r-0 h-full" />
        ))}
      </div>

      {/* Tasks */}
      {tasks.map((task, index) => {
        const position = calculatePosition(task);
        const styles = getStatusStyles(task.status);
        const rowHeight = 72;
        const top = index * rowHeight;

        return (
          <div
            key={task.id}
            className="absolute h-14 rounded-[32px] flex items-center group transition-all cursor-pointer"
            style={{
              ...position,
              top: `${top}px`,
              backgroundColor: styles.bg,
              borderColor: styles.border,
            }}
            onClick={() => onTaskClick(task)}
          >
            <div className="flex items-center gap-2 px-2 w-full min-w-0">
              <Avatar className="h-8 w-8 border-2 border-white flex-shrink-0">
                {task.assignee.avatar ? (
                  <img src={task.assignee.avatar} alt={task.assignee.initials} />
                ) : (
                  <div 
                    className="w-full h-full flex items-center justify-center text-xs font-medium"
                    style={{ backgroundColor: styles.text, color: styles.bg }}
                  >
                    {task.assignee.initials}
                  </div>
                )}
              </Avatar>
              
              <span 
                className="text-sm font-medium truncate"
                style={{ color: styles.text }}
              >
                {task.title}
              </span>

              <div className="ml-auto flex items-center gap-2 flex-shrink-0">
                {task.hasCamera && (
                  <div className="bg-white rounded-full p-1">
                    <Camera className="h-3.5 w-3.5" style={{ color: styles.text }} />
                  </div>
                )}
                {task.hasChevron && (
                  <div className="bg-white rounded-full p-1">
                    <ChevronRight className="h-3.5 w-3.5" style={{ color: styles.text }} />
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}