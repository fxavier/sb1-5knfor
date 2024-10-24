"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const products = {
  "womens-fashion": [
    {
      id: 1,
      name: "Floral Summer Dress",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=500&fit=crop",
    },
    {
      id: 2,
      name: "Classic Denim Jacket",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1544642899-f0d6e5f6ed6f?w=500&h=500&fit=crop",
    },
  ],
  "mens-fashion": [
    {
      id: 3,
      name: "Casual Linen Shirt",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=500&h=500&fit=crop",
    },
    {
      id: 4,
      name: "Slim Fit Chinos",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&h=500&fit=crop",
    },
  ],
  "accessories": [
    {
      id: 5,
      name: "Leather Crossbody Bag",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?w=500&h=500&fit=crop",
    },
    {
      id: 6,
      name: "Minimalist Watch",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&h=500&fit=crop",
    },
  ],
};

export function ProductGrid({ category }: { category: string }) {
  const categoryProducts = products[category as keyof typeof products] || [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categoryProducts.map((product) => (
        <Card key={product.id} className="group">
          <CardContent className="p-4">
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2">
            <div className="flex w-full justify-between">
              <h3 className="font-semibold">{product.name}</h3>
              <p className="text-muted-foreground">${product.price}</p>
            </div>
            <Button className="w-full">Add to Cart</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}