// app/(main)/product/[slug]/page.tsx
import { useRouter } from 'next/router';

// Example product data (Replace with actual data fetching logic)
const products = [
  {
    id: '1',
    name: 'Fusion',
    price: '$49',
    rating: 4,
    images: [
      {
        id: 1,
        name: 'Product Image',
        src: 'https://tailwindui.starxg.com/img/ecommerce-images/product-page-05-related-product-01.jpg',
        alt: 'Product Image',
      },
    ],
    colors: [
      { name: 'Color 1', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    ],
    description: `
      <p>This is a description for Fusion.</p>
    `,
    details: [
      {
        name: 'Features',
        items: ['Feature 1', 'Feature 2'],
      },
    ],
  },
  // More products...
];

export default function ProductPage() {
  const router = useRouter();
  const { slug } = router.query;

  // Find the product based on slug
  const product = products.find((p) => p.id === slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="bg-white">
      {/* Product details layout */}
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          {/* Similar code as before to display images */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-gray-900">{product.price}</p>
            </div>
            {/* Rest of the product details */}
          </div>
        </div>
      </div>
    </div>
  );
}
