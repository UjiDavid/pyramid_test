import './globals.css';

export const metadata = {
  title: 'Pyramid Test',
  description: 'Done by Owoicho David Uji',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
