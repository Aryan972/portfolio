import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/app-components/navbar/navbar";
import ThemeProvider from "@/providers/theme-provider";
import { Toaster } from "@/app-components/ui/sonner";
// import UserCommandBox from "@/components/command-box";

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Abhishek Nigam - Portfolio Website",
  description: "Portfolio website of Abhishek Nigam, a Frontend Developer.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script defer src="https://cloud.umami.is/script.js" data-website-id="220ca3c2-4de5-4186-aa89-e2ba0425b199"></script>
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Cursor removed */}
          <Navbar/>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
