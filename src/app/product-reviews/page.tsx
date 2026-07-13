import { Suspense } from "react";

import { Product } from "@/components/product";
import { Review } from "@/components/review";

export default function ProductReviews() {
  return (
    <div>
      <h1>Product Reviews</h1>
      <Suspense fallback={<p>loading product details...</p>}>
        <Product />
      </Suspense>
      <Suspense fallback={<p>Loading reviews...</p>}>
        <Review />
      </Suspense>
    </div>
  )
}