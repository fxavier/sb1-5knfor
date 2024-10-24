import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";
import { CartSheet } from "@/components/cart-sheet";
import { Button } from "@/components/ui/button";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'StyleHub - Premium Fashion Store',
  description: 'Discover the latest trends in fashion and accessories',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center">
              <MainNav />
              <MobileNav />
              <div className="flex flex-1 items-center justify-end space-x-4">
                <CartSheet />
              </div>
            </div>
          </header>
          <main>{children}</main>
          <footer className="border-t bg-muted/50">
            <div className="container mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="font-semibold mb-4">About Us</h3>
                  <p className="text-sm text-muted-foreground">
                    Premium fashion and accessories for the modern lifestyle.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Customer Service</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>Contact Us</li>
                    <li>Shipping Policy</li>
                    <li>Returns & Exchanges</li>
                    <li>FAQ</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Quick Links</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>New Arrivals</li>
                    <li>Best Sellers</li>
                    <li>Sale</li>
                    <li>Gift Cards</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Newsletter</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Subscribe to receive updates, access to exclusive deals, and more.
                  </p>
                  <form className="flex gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    />
                    <Button type="submit">Subscribe</Button>
                  </form>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}