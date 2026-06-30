import localFont from 'next/font/local';
import './globals.css';

// Configure the variable font
const satoshi = localFont({
  src: [
    {
      path: './fonts/Satoshi-Variable.woff2',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
  weight: '100 900', 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${satoshi.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}