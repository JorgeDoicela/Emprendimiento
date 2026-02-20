import { Inter as FontSans } from "next/font/google"
import localFont from "next/font/local"

import "@/styles/globals.css"
import { absoluteUrl, cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@/components/analytics"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { ThemeProvider } from "@/components/theme-provider"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

// Font files can be colocated inside of `pages`
const fontHeading = localFont({
  src: "../assets/fonts/CalSans-SemiBold.woff2",
  variable: "--font-heading",
})

interface RootLayoutProps {
  children: React.ReactNode
}

export const metadata = {
  title: {
    default: "NextGen Solutions",
    template: `%s | NextGen Solutions`,
  },
  description:
    "Portafolio profesional de aplicaciones SaaS de alto rendimiento y soluciones empresariales.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "Karen Mendoza",
    },
    {
      name: "Jorge Doicela",
    },
  ],
  creator: "NextGen Solutions",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://nextgen-solutions.com",
    title: "NextGen Solutions",
    description:
      "Portafolio profesional de aplicaciones SaaS de alto rendimiento y soluciones empresariales.",
    siteName: "NextGen Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "NextGen Solutions",
    description:
      "Portafolio profesional de aplicaciones SaaS de alto rendimiento y soluciones empresariales.",
    images: [`https://nextgen-solutions.com/og.jpg`],
    creator: "@NextGen_Sol",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Analytics />
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
      </body>
    </html>
  )
}
