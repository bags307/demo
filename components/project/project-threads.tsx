'use client';

import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { MessageSquarePlus, Maximize2 } from 'lucide-react';

const threads = [
  {
    id: '1',
    author: {
      name: 'Ryan Denman',
      initials: 'RD',
    },
    title: 'Need SOW docs reup',
    preview: 'Hi @kevin, it seems the SOW docs are missing for some reason. Please reup them, and review others if you have time...',
    time: 'yesterday',
    comments: 2,
  },
  {
    id: '2',
    author: {
      name: 'Matthew Jonas',
      initials: 'MJ',
    },
    title: 'Topic',
    preview: 'Description',
    time: '3d ago',
    comments: 10,
  },
];

export function ProjectThreads() {
  return (
    <Card className="p-6 bg-white border-[#E2E8F0]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-[#0F172A]">Threads in this project</h2>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 hover:bg-[#F1F5F9]"
        >
          <Maximize2 className="h-4 w-4 text-[#64748B]" />
        </Button>
      </div>
      <div className="space-y-4">
        {threads.map((thread) => (
          <div
            key={thread.id}
            className="space-y-4 pb-4 border-b border-[#E2E8F0] last:border-0 last:pb-0"
          >
            <div className="flex items-start gap-3">
              <Avatar className="h-8 w-8">
                <div className="w-full h-full bg-[#F1F5F9] flex items-center justify-center text-xs font-medium text-[#64748B]">
                  {thread.author.initials}
                </div>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-medium text-[#0F172A]">{thread.title}</h3>
                  <span className="text-sm text-[#64748B] whitespace-nowrap">{thread.time}</span>
                </div>
                <p className="text-sm text-[#64748B] mt-1 line-clamp-2">{thread.preview}</p>
                <div className="flex items-center gap-2 mt-2">
                  <MessageSquarePlus className="h-4 w-4 text-[#64748B]" />
                  <span className="text-sm text-[#64748B]">{thread.comments}</span>
                  <Button 
                    variant="link" 
                    className="text-[#2563EB] p-0 h-auto text-sm hover:no-underline"
                  >
                    Post a comment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}