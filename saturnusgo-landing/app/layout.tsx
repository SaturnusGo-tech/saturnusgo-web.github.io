import './globals.css';
import { Inter } from 'next/font/google';
import ParallaxBG from './components/ParallaxBG';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata = {
  metadataBase: new URL('https://saturnusgo.com'),
  title: 'SaturnusGo — Urban Mobility & Travel Intelligence',
  description: 'One app for rides, hotel bookings, and smart mobility tools.',
  openGraph: {
    title: 'SaturnusGo — Urban Mobility & Travel Intelligence',
    description: 'One app for rides, hotel bookings, and smart mobility tools.',
    url: 'https://saturnusgo.com',
    siteName: 'SaturnusGo'
    // images удалены — никаких PNG
  },
  twitter: { card: 'summary' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {/* background layers */}
        <div className="bg-base" aria-hidden />
        <div className="bg-grad bg-grad--1" aria-hidden />
        <div className="bg-grad bg-grad--2" aria-hidden />
        <div className="bg-noise" aria-hidden />
        <ParallaxBG />
        {children}
      </body>
    </html>
  );
}