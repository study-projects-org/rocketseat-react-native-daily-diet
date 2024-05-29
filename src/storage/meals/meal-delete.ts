import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppError } from "@utils/app.error";
import { mealsGetAll } from "./meals-get-all";
import { MEALS_COLLECTION } from "@storage/storage.config";

export async function mealDelete(id: string) {
  try {
    const storedMeals = await mealsGetAll();
    
    const meal = storedMeals.find(meal => meal.id === id); 

    if (!meal) {
      throw new AppError('Refeição não encontrada');
    }

    const updatedMeals = storedMeals.filter(meal => meal.id !== id);

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(updatedMeals));

  } catch (error) {
    throw error;
  }
}