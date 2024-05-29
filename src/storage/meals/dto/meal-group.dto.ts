import { MealDTO } from "./meal.dto";

export type GroupedMealsDTO = {
  date: string;
  meals: MealDTO[];
}

export type MealsGrouped = {
  [date: string]: GroupedMealsDTO;
}
