import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brooklyn's Portfolio",
  description: "My personal portfolio made with Next.js, typescript and Tailwind CSS along with some other cool stuff.",
  icons:[
      {
        url:"/favicon.png",
      }
    ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>

      </body>
    </html>
  );
}