import { MealDTO } from "./dto/meal.dto";
import { mealsGetAll } from "./meals-get-all";

export async function mealsGetGeneralStats() {

  try {

    const meals = await mealsGetAll();

    const totalMeals = meals.length;
    const totalMealsInTheDiet = meals.filter(meal => meal.inTheDiet).length;
    const totalMealsNotInTheDiet = meals.filter(meal => !meal.inTheDiet).length;

    const totalSequentialDaysOnDiet = countMaxSequentialTrues(meals);

    return {
      totalMeals,
      totalMealsInTheDiet,
      totalMealsNotInTheDiet,
      totalSequentialDaysOnDiet
    }
    
  } catch (error) {
    throw error;
  }
}

function countMaxSequentialTrues(meals: MealDTO[]) {
  let maxStreak = 0;
  let currentStreak = 0;

  meals.forEach(meal => {
    if (meal.inTheDiet) {
      currentStreak++;
      maxStreak = Math.max(maxStreak, currentStreak);
    } else {
      currentStreak = 0;
    }
  });

  return maxStreak;
}