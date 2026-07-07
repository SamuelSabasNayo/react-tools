import Link from "next/link";
import Image from "next/image";
import getRecipes from "./recipes";

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <main 
      className="container mx-auto"
    >
      <h1 
        className="text-center text-3xl font-bold my-4"
      >
        New Recipes of Kigali
      </h1>
      <div 
        className="grid grid-cols-1 md:grid-cols-4 gap-4"
      >
        {recipes.map((recipe) => (
          <Link key={recipe.id} href={`/photo-feed/${recipe.id}`}>
            <Image 
              src={`/img/${recipe.image}`}
              alt={`${recipe.title}`}
              className="w-full object-cover aspect-square"
              width={240}
              height={200}
              loading="eager"
            />
          </Link>
        ))}
      </div>
    </main>
  )
}