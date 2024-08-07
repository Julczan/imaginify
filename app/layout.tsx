import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/nextjs'

const IMBPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Logowanie",
  description: "Aplikacja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: {colorPrimary: '#624cf5'}
    }}>
      <html lang='en'>
        <body className={cn("font-IBMPlex antialiased", IMBPlex.variable)}>
        <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
            </SignedIn>
          </header>
          <main>
        {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  )
};

