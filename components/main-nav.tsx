import Link from "next/link";
import { Button } from "@/components/ui/button";

export function MainNav() {
  return (
    <nav className="flex items-center space-x-6 lg:space-x-8">
      <Link href="/" className="font-bold text-xl">
        StyleHub
      </Link>
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/category/womens-fashion">
          <Button variant="ghost">Women</Button>
        </Link>
        <Link href="/category/mens-fashion">
          <Button variant="ghost">Men</Button>
        </Link>
        <Link href="/category/accessories">
          <Button variant="ghost">Accessories</Button>
        </Link>
      </div>
    </nav>
  );
}