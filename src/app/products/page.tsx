import Link from 'next/link'
import React from 'react'

const ProductsList = () => {
  const productId = 100;

  return (
    <>
      <Link href="/">Home</Link>
      <h1>Products List</h1>
      <Link href="/products/1">Products 1</Link>
      <Link href="/products/2">Products 2</Link>
      <Link href="/products/3">Products 3</Link>
      <Link href={`/products/${productId}`}>Products {productId}</Link>
      </>
  )
}

export default ProductsList