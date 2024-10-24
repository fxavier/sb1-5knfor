import { notFound } from "next/navigation";
import { ProductGrid } from "@/components/product-grid";

const categories = {
  "womens-fashion": {
    title: "Women's Fashion",
    description: "Discover the latest trends in women's clothing and accessories",
  },
  "mens-fashion": {
    title: "Men's Fashion",
    description: "Shop the newest styles in men's apparel and accessories",
  },
  "accessories": {
    title: "Accessories",
    description: "Complete your look with our curated collection of accessories",
  },
};

export async function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({
    slug,
  }));
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories[params.slug as keyof typeof categories];

  if (!category) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">{category.title}</h1>
        <p className="mt-2 text-muted-foreground">{category.description}</p>
      </div>
      <ProductGrid category={params.slug} />
    </div>
  );
}