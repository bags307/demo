import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Sidebar } from '@/components/navigation/sidebar';
import { RightSidebar } from '@/components/navigation/right-sidebar';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Remodl - Project Management',
  description: 'Modern project management for construction and remodeling',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'antialiased')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          <div className="flex h-screen bg-[#1E293B]">
            {/* Left Sidebar - Fixed width */}
            <div className="w-[250px] flex-shrink-0">
              <Sidebar />
            </div>

            {/* Main Content - Scrollable */}
            <main className="flex-1 overflow-y-auto bg-[#FAFAFA] rounded-tl-[32px]">
              {children}
            </main>

            {/* Right Sidebar - Fixed width, independent scroll */}
            <div className="w-[350px] flex-shrink-0">
              <RightSidebar />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}