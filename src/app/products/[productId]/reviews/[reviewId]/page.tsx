import { 
  // notFound, 
  redirect
} from "next/navigation";

// function getRandomInt(count: number) {
//   return Math.floor(Math.random() * count);
// }

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>
}
) {
  const { productId, reviewId } = await params;
  // const random = getRandomInt(2);

  // console.log("Random Number: ", random);

  // if (random === 1) {
  //   throw new Error("Error loading review");
  // }

  if (parseInt(reviewId) > 1000) {
    redirect("/products ");
    // notFound();
  }
  
  return (
    <h1>Review { reviewId } for product { productId }</h1>
  )
}
