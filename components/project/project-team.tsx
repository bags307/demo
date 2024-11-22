'use client';

import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Maximize2 } from 'lucide-react';

const team = [
  {
    name: 'Ryan Denman',
    role: 'Head of Operations',
    initials: 'RD',
  },
  {
    name: 'Kevin Honsberger',
    role: 'Market Portfolio Manager',
    initials: 'KH',
  },
  {
    name: 'Matthew Jonas',
    role: 'Director Of Asset Management',
    initials: 'MJ',
  },
];

export function ProjectTeam() {
  return (
    <Card className="p-6 bg-white border-[#E2E8F0]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-[#0F172A]">Project Team</h2>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 hover:bg-[#F1F5F9]"
        >
          <Maximize2 className="h-4 w-4 text-[#64748B]" />
        </Button>
      </div>
      <div className="space-y-4">
        {team.map((member) => (
          <div key={member.name} className="flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <div className="w-full h-full bg-[#F1F5F9] flex items-center justify-center text-xs font-medium text-[#64748B]">
                {member.initials}
              </div>
            </Avatar>
            <div>
              <p className="text-sm font-medium text-[#0F172A]">{member.name}</p>
              <p className="text-xs text-[#64748B]">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}