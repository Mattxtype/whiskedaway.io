export async function fetchLatestRecipes() {
  const response = await fetch("http://localhost:80/recipe/get-latest-recipes");

  if (!response.ok) {
    const error = new Error("An Error occured when fetching latest recipes");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const { recipes } = await response.json();

  return recipes;
}

export async function fetchAllRecipes() {
  const response = await fetch("http://localhost:80/recipe/get-all-recipes");

  if (!response.ok) {
    const error = new Error("An Error occured when fetching all recipes");
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }
  const { recipes } = await response.json();

  return recipes;
}
