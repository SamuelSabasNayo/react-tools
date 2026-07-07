interface Recipes  {
  id: string,
  title: string,
  image: string,
  time: number,
  description: string,
  photographer: string,
  location: string,
  vegan: boolean
}

export default async function getRecipes(): Promise<Recipes[]> {
  const recipes = await fetch("http://localhost:4000/recipes");

  await new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });

  return recipes.json();
}