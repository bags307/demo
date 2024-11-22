'use client';

import { useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { TimelineHeader } from './timeline/timeline-header';
import { TimelineGantt } from './timeline/timeline-gantt';
import { TaskEditModal } from './timeline/task-edit-modal';
import { useToast } from '@/components/ui/use-toast';
import { format, addDays, startOfWeek } from 'date-fns';

// Generate 7 days worth of dates starting from current week's Sunday
const generateDates = () => {
  const startDate = startOfWeek(new Date());
  return Array.from({ length: 7 }, (_, i) => {
    const date = addDays(startDate, i);
    return {
      date,
      day: format(date, 'EEE'),
      dayOfMonth: format(date, 'dd'),
      isCurrentDay: format(new Date(), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
    };
  });
};

const dates = generateDates();

// Mock tasks data with proper dates
const initialTasks = [
  {
    id: '1',
    title: 'Task title',
    assignee: {
      initials: 'RD',
      avatar: null,
    },
    startDate: addDays(startOfWeek(new Date()), 1),
    endDate: addDays(startOfWeek(new Date()), 3),
    status: 'in-progress' as const,
    hasCamera: true,
    hasChevron: true,
    details: 'Task details here',
  },
  // ... other tasks remain the same
];

export function ProjectTimeline() {
  const [tasks, setTasks] = useState(initialTasks);
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const handleTaskClick = (task: any) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };

  const handleTaskUpdate = (updatedTask: any) => {
    setTasks(currentTasks => 
      currentTasks.map(task => 
        task.id === updatedTask.id ? updatedTask : task
      )
    );
    
    toast({
      title: "Task updated",
      description: "The task has been successfully updated.",
    });
    
    setIsModalOpen(false);
  };

  return (
    <Card className="p-6 bg-white border-[#E2E8F0]">
      <TimelineHeader />
      
      <div className="relative border border-[#E2E8F0] rounded-lg overflow-hidden">
        {/* Header - Fixed */}
        <div className="grid grid-cols-7 border-b border-[#E2E8F0]">
          {dates.map((date, i) => (
            <div 
              key={i} 
              className={`py-3 px-4 ${date.isCurrentDay ? 'bg-[#EFF6FF]' : ''} border-r border-[#E2E8F0] last:border-r-0`}
            >
              <div className="text-sm text-[#64748B] mb-1">{date.day}</div>
              <div className="text-base font-medium text-[#0F172A]">{date.dayOfMonth}</div>
            </div>
          ))}
        </div>

        {/* Timeline with Tasks - Scrollable */}
        <div className="overflow-y-auto max-h-[400px] scrollbar-hide">
          <TimelineGantt 
            tasks={tasks}
            startDate={dates[0].date}
            days={7}
            onTaskClick={handleTaskClick}
          />
        </div>
      </div>

      <TaskEditModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        task={selectedTask}
        onSave={handleTaskUpdate}
      />
    </Card>
  );
}