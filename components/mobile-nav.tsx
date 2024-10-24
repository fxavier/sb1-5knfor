"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col space-y-4 mt-4">
          <Link href="/category/womens-fashion">
            <Button variant="ghost" className="w-full justify-start">
              Women
            </Button>
          </Link>
          <Link href="/category/mens-fashion">
            <Button variant="ghost" className="w-full justify-start">
              Men
            </Button>
          </Link>
          <Link href="/category/accessories">
            <Button variant="ghost" className="w-full justify-start">
              Accessories
            </Button>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}