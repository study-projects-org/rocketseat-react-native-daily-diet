import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

import { MealDTO } from "./dto/meal.dto";
import { mealsGetAll } from "./meals-get-all";
import { MEALS_COLLECTION } from "@storage/storage.config";
import { AppError } from "@utils/app.error";
import { isValidDate, isValidHour, isValidString } from "@utils/validations";

export type MealAddProps = Omit<MealDTO, 'id'>;

export async function mealCreate(meal: MealAddProps): Promise<void> {

  try {

    mealValidate(meal);
    
    const storedMeals = await mealsGetAll();
    
    const newMeal: MealDTO = {
      ...meal,
      id: uuid.v4().toString(),
    };
    
    const updatedMeals = [...storedMeals, newMeal];

    await AsyncStorage.setItem(MEALS_COLLECTION, JSON.stringify(updatedMeals));

  } catch (error) {
    throw error;
  }
}

function mealValidate(meal: MealAddProps) {
  if (!isValidString(meal.name)) {
    throw new AppError('O nome da refeição é obrigatório');
  }

  if (!isValidString(meal.description)) {
    throw new AppError('A descrição é obrigatória');
  }

  if (!isValidString(meal.date)) {
    throw new AppError('A data é obrigatória');
  } else if (!isValidDate(meal.date)) { 
    throw new AppError('A data é inválida');
  }

  if (!isValidString(meal.hour)) {
    throw new AppError('A hora é obrigatória');
  } else if (!isValidHour(meal.hour)) { 
    throw new AppError('A hora é inválida');
  }
}