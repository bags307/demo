'use client';

import { useState, useCallback } from 'react';

interface Toast {
  title: string;
  description?: string;
}

export function useToast() {
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = useCallback((newToast: Toast) => {
    setToast(newToast);
    setTimeout(() => setToast(null), 3000);
  }, []);

  return {
    toast: showToast,
    activeToast: toast,
  };
}