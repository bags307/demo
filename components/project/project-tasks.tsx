'use client';

import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MoreVertical } from 'lucide-react';

interface Task {
  id: string;
  title: string;
  assignee: {
    initials: string;
  };
  status: 'in-progress' | 'overdue' | 'done';
  timeframe: string;
}

const tasks: Task[] = [
  {
    id: '1',
    title: 'Task title',
    assignee: { initials: 'RD' },
    status: 'in-progress',
    timeframe: '1d'
  },
  {
    id: '2',
    title: 'Task title',
    assignee: { initials: 'RD' },
    status: 'in-progress',
    timeframe: 'today'
  },
  {
    id: '3',
    title: 'Task title',
    assignee: { initials: 'MJ' },
    status: 'overdue',
    timeframe: 'yesterday'
  },
  {
    id: '4',
    title: 'Task title',
    assignee: { initials: 'MJ' },
    status: 'done',
    timeframe: '2d ago'
  },
  {
    id: '5',
    title: 'Task title',
    assignee: { initials: 'KH' },
    status: 'done',
    timeframe: '3d ago'
  }
];

export function ProjectTasks() {
  const getStatusStyles = (status: Task['status']) => {
    switch (status) {
      case 'done':
        return {
          color: '#22C55E',
          bg: '#F0FDF4'
        };
      case 'overdue':
        return {
          color: '#EF4444',
          bg: '#FEF2F2'
        };
      case 'in-progress':
        return {
          color: '#F59E0B',
          bg: '#FFFBEB'
        };
    }
  };

  return (
    <div className="space-y-2">
      {tasks.map((task) => {
        const statusStyles = getStatusStyles(task.status);
        
        return (
          <div
            key={task.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg border border-[#E2E8F0] hover:bg-[#F8FAFC] transition-colors"
          >
            <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <div className="w-full h-full bg-[#F1F5F9] flex items-center justify-center text-xs font-medium text-[#64748B]">
                  {task.assignee.initials}
                </div>
              </Avatar>
              <span className="text-sm font-medium text-[#0F172A]">
                {task.title}
              </span>
            </div>

            <div className="flex items-center gap-6">
              <div 
                className="flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-medium"
                style={{ 
                  backgroundColor: statusStyles.bg,
                  color: statusStyles.color
                }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: statusStyles.color }} />
                {task.status === 'in-progress' ? 'In progress' : 
                 task.status === 'overdue' ? 'Overdue' : 'Done'}
              </div>
              
              <span className="text-sm text-[#64748B]">{task.timeframe}</span>
              
              <Button 
                variant="ghost" 
                size="icon"
                className="h-8 w-8 hover:bg-[#F1F5F9]"
              >
                <MoreVertical className="h-4 w-4 text-[#64748B]" />
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
}