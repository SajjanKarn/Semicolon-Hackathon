import { DM_Serif_Text, Poppins } from "next/font/google";

import { ScreenIndicator } from "@/components/screen-indicator";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";
import Navbar from "./navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  fallback: ["sans-serif"],
  variable: "--font-poppins",
});

const dm_serif = DM_Serif_Text({
  weight: ["400"],
  fallback: ["serif"],
  variable: "--font-dm-serif",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📦</text></svg>"
        />
      </head>
      <body className={`${poppins.variable} ${dm_serif.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main> {children}</main>

          <ScreenIndicator />
        </ThemeProvider>
      </body>
    </html>
  );
}
