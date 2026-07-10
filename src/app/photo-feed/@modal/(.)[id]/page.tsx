import Image from "next/image";
import getRecipes from "../../recipes";
import Modal from "@/components/modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const recipe = (await getRecipes()).find((oneRecipe) => oneRecipe.id === id)!;

  return (
    <Modal>
      <div
        className="container mx-auto my-10"
      >
        <div
          className="w-1/2 mx-auto"
        >
          <div>
            <h1
              className="text-center text-3xl font-bold my-4"
            >
              {recipe.title}
            </h1>
          </div>
          <Image
            src={`/img/${recipe.image}`}
            alt={`${recipe.title}`}
            className="w-full object-cover aspect-square"
            width={800}
            height={580}
            loading="eager"
          />
          <div
            className="bg-white py-4"
          >
            <h3>{recipe.photographer} in {recipe.location}</h3>
            <h3>{recipe.description} It takes {recipe.time} minutes to cook.</h3>
          </div>
        </div>
      </div>
  </Modal>
  )
}