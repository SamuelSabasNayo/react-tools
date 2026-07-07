function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const random = getRandomInt(2);
  
  console.log("Random Number: ", random);
  if (random === 1) {
    throw new Error("Error loading product");
  }
  return (
    <>
      {children}
      <p>Featured products</p>
    </>
  )
}