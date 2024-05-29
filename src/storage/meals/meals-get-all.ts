import AsyncStorage from "@react-native-async-storage/async-storage";
import { MEALS_COLLECTION } from "@storage/storage.config";
import { MealDTO } from "./dto/meal.dto";
import { parseDateTime } from "@utils/datetime.utils";


export async function mealsGetAll() {
  const storage = await AsyncStorage.getItem(MEALS_COLLECTION);

  const meals: MealDTO[] = storage ? JSON.parse(storage) : [];

  if (meals.length > 0) {
    return meals.sort((a, b) => parseDateTime(b.date, b.hour).getTime() - parseDateTime(a.date, a.hour).getTime());
  }
  
  return meals;
}