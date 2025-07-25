"use client";
import { ThemeProvider } from 'next-themes';
import React from 'react';

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
  return (
      /* eslint-disable @typescript-eslint/no-explicit-any */
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} {...({} as any)}>
      {children}
    </ThemeProvider>
  );
} 