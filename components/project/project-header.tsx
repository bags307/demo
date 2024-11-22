'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, Pencil, Share2 } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export function ProjectHeader() {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("Floor Replacement_10/2024_3 Elizabeth Street #104");
  const [inputWidth, setInputWidth] = useState('auto');
  const spanRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (spanRef.current && containerRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const buttonsWidth = 280; // Approximate width of buttons + padding
      const maxWidth = containerWidth - buttonsWidth;
      const contentWidth = spanRef.current.offsetWidth;
      setInputWidth(`${Math.min(contentWidth, maxWidth)}px`);
    }
  }, [title]);

  return (
    <div className="flex items-center justify-between py-6">
      <div className="flex items-center space-x-4 flex-1 min-w-0 mr-4" ref={containerRef}>
        <ChevronLeft className="h-5 w-5 text-[#64748B] cursor-pointer hover:text-[#334155] transition-colors flex-shrink-0" />
        <div className="flex items-center gap-2 min-w-0 max-w-[calc(100%-3rem)]">
          {isEditing ? (
            <>
              <span
                ref={spanRef}
                className="text-[22px] invisible absolute whitespace-nowrap"
                aria-hidden="true"
              >
                {title}
              </span>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={() => setIsEditing(false)}
                className="text-[22px] font-semibold text-[#0F172A] bg-transparent border-b border-[#2563EB] focus:outline-none"
                style={{ width: inputWidth }}
                autoFocus
              />
            </>
          ) : (
            <h1 className="text-[22px] font-semibold text-[#0F172A] flex items-center gap-2 truncate">
              <span className="truncate">{title}</span>
              <button 
                onClick={() => setIsEditing(true)}
                className="flex-shrink-0"
              >
                <Pencil className="h-4 w-4 text-[#64748B] hover:text-[#334155] transition-colors" />
              </button>
            </h1>
          )}
        </div>
      </div>
      <div className="flex items-center space-x-3 flex-shrink-0">
        <Button 
          variant="outline" 
          size="sm"
          className="h-9 px-4 text-[#64748B] border-[#E2E8F0] hover:bg-[#F1F5F9] hover:text-[#334155]"
        >
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
        <Button 
          size="sm"
          className="h-9 px-4 bg-[#0F172A] hover:bg-[#1E293B] text-white"
        >
          <Pencil className="h-4 w-4 mr-2" />
          Edit Project
        </Button>
      </div>
    </div>
  );
}