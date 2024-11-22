'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar } from '@/components/ui/avatar';
import { Calendar } from 'lucide-react';
import { format } from 'date-fns';

interface TaskEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  task: any;
  onSave: (task: any) => void;
}

export function TaskEditModal({ isOpen, onClose, task, onSave }: TaskEditModalProps) {
  const [formData, setFormData] = useState({
    title: task?.title || '',
    assignee: task?.assignee || '',
    status: task?.status || 'in-progress',
    startDate: task?.startDate || new Date(),
    duration: task?.duration || 1,
    details: task?.details || '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...task,
      ...formData,
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        <DialogHeader className="px-6 py-4 border-b border-[#E2E8F0]">
          <DialogTitle className="text-lg font-semibold text-[#0F172A]">Edit Task</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 px-6 py-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Task Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="border-[#E2E8F0]"
              />
            </div>

            <div className="space-y-2">
              <Label>Assignee</Label>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <div className="w-full h-full bg-[#F1F5F9] flex items-center justify-center text-xs font-medium text-[#64748B]">
                    RD
                  </div>
                </Avatar>
                <span className="text-sm text-[#0F172A]">Ryan Denman</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Start Date</Label>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full justify-start text-left font-normal border-[#E2E8F0]"
                >
                  <Calendar className="mr-2 h-4 w-4" />
                  {format(formData.startDate, 'MMM dd, yyyy')}
                </Button>
              </div>
              <div className="space-y-2">
                <Label>Duration (days)</Label>
                <Input
                  type="number"
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: parseInt(e.target.value) })}
                  min="1"
                  className="border-[#E2E8F0]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="details">Details</Label>
              <textarea
                id="details"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                rows={4}
                className="w-full rounded-lg border border-[#E2E8F0] p-3 text-sm"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-[#E2E8F0]"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-[#0F172A] hover:bg-[#1E293B]">
              Save Changes
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}