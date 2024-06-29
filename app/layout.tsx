import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thoughthub",
  description: "The connected workspace where better faster work happens",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light",
        url: "/logo-light.svg",
        href: "/logo-light.svg",
      },
      {
        media: "(prefers-color-scheme: dark",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ConvexClientProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          enableColorScheme
          storageKey="thoughthub-theme"
        >
          <Toaster position="bottom-center" />
          <ModalProvider />
          <body>{children}</body>
        </ThemeProvider>
      </ConvexClientProvider>
    </html>
  );
}
