import { AppError } from "@utils/app.error";
import { mealsGetAll } from "./meals-get-all";

export async function mealGetById(id: string){

  try {
    const storedMeals = await mealsGetAll();
  
    const meal = storedMeals.find(meal => meal.id === id); 

    if (!meal) {
      throw new AppError('Refeição não encontrada');
    }
    
    return meal;

  } catch (error) {
    throw error;
  }
}