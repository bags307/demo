'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Maximize2 } from 'lucide-react';

const documents = [
  { name: 'File name.pdf', type: 'PDF' },
  { name: 'File name.pdf', type: 'PDF' },
  { name: 'File name.pdf', type: 'PDF' },
  { name: 'File name.pdf', type: 'PDF' },
];

export function ProjectDocuments() {
  return (
    <Card className="p-6 bg-white border-[#E2E8F0]">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-[#0F172A]">Documents</h2>
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
      <div className="space-y-2">
        {documents.map((doc, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-2 hover:bg-[#F8FAFC] rounded-lg transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#F1F5F9] rounded-lg">
                <FileText className="h-4 w-4 text-[#64748B]" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#0F172A]">{doc.name}</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#F1F5F9]"
            >
              <Download className="h-4 w-4 text-[#64748B]" />
            </Button>
          </div>
        ))}
      </div>
    </Card>
  );
}