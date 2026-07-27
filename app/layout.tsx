import '@/styles/globals.css';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

// TODO: Install Geist fonts (npm install geist)
// import { GeistSans } from 'geist/font/sans';
// import { GeistMono } from 'geist/font/mono';
// Then update font configuration below

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zain Mirza | Senior Software Engineer',
  description: 'Senior Software Engineer specializing in AI/ML systems, cloud architecture, and full-stack development. 3+ years building production AI applications, leading engineering teams, and delivering scalable solutions.',
  keywords: ['Software Engineer', 'AI Engineer', 'ML Engineer', 'Full Stack Developer', 'Cloud Architecture', 'RAG Systems', 'Python', 'React', 'Next.js', 'FastAPI', 'AWS'],
  authors: [{ name: 'Zain Mirza' }],
  openGraph: {
    title: 'Zain Mirza | Senior Software Engineer',
    description: 'Senior Software Engineer specializing in AI/ML systems, cloud architecture, and full-stack development',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover', // Handle notches and safe areas
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Skip to main content for accessibility */}
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
} 