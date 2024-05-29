import { mealsGetAll } from "./meals-get-all";

export async function mealsGetDietRate() {
  const meals = await mealsGetAll();

  const inDietMeals = meals.filter(meal => meal.inTheDiet);

  const inDietMealsCount = inDietMeals.length;
  const mealsCount = meals.length;

  const dietRate = mealsCount === 0 ? 0 : (inDietMealsCount / mealsCount);

  return dietRate * 100;
}