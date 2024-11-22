'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Maximize2 } from 'lucide-react';

export function ProjectMedia() {
  return (
    <Card className="p-6 bg-white border-[#E2E8F0]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-[#0F172A]">CompanyCam</h2>
          <Download className="h-4 w-4 text-[#64748B]" />
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8 hover:bg-[#F1F5F9]"
        >
          <Maximize2 className="h-4 w-4 text-[#64748B]" />
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="relative aspect-[4/3] bg-[#F8FAFC] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Project image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative aspect-[4/3] bg-[#F8FAFC] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
            alt="Project image 2"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative col-span-2 aspect-[4/3] bg-[#F8FAFC] rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b"
            alt="Project image 3"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Card>
  );
}