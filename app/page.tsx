import { ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070"
            alt="Hero background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <div className="container mx-auto relative z-10 px-4">
          <div className="max-w-2xl text-white">
            <h1 className="text-5xl font-bold mb-6">Discover Your Style</h1>
            <p className="text-xl mb-8">
              Explore our curated collection of premium fashion and accessories.
            </p>
            <Button size="lg" asChild>
              <Link href="/products">
                Shop Now <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={`/category/${category.slug}`}
                className="group relative h-[400px] overflow-hidden rounded-lg"
              >
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-sm opacity-90">{category.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trending Now</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group">
                <div className="relative aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  <Button
                    size="icon"
                    variant="secondary"
                    className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ShoppingBag className="h-4 w-4" />
                  </Button>
                </div>
                <h3 className="font-semibold mb-1">{product.name}</h3>
                <p className="text-muted-foreground">${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const categories = [
  {
    name: "Women's Fashion",
    slug: "womens-fashion",
    description: "Discover the latest trends in women's clothing",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070",
  },
  {
    name: "Men's Collection",
    slug: "mens-collection",
    description: "Elevate your style with our men's collection",
    image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?q=80&w=2071",
  },
  {
    name: "Accessories",
    slug: "accessories",
    description: "Complete your look with premium accessories",
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?q=80&w=2065",
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "Classic White Sneakers",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2012",
  },
  {
    id: 2,
    name: "Leather Crossbody Bag",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=2069",
  },
  {
    id: 3,
    name: "Minimalist Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?q=80&w=2099",
  },
  {
    id: 4,
    name: "Denim Jacket",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?q=80&w=1974",
  },
];