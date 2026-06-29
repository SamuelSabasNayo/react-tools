const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = (await params).productId;

  return (
    <div>Details about product { productId }</div>
  )
}

export default ProductDetails