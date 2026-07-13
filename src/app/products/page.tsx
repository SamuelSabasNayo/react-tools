import Link from "next/link";

export default function ProductsPage() {
  return (
    <>
      <h1>Featured Products</h1>
      <div>
        <Link href="/products/1">Product 1</Link>
      </div>
      <div>
        <Link href="/products/2">Product 2</Link>
      </div>
      <div>
        <Link href="/products/3">Product 3</Link>
      </div>
    </>
  )
}