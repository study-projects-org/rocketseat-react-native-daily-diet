import { parseDate, parseTime } from "@utils/datetime.utils";
import { GroupedMealsDTO } from "./dto/meal-group.dto";
import { mealsGetAll } from "./meals-get-all";

export async function mealsGetGrouped() {

  try {
    const meals = await mealsGetAll();

    const groupedMeals: GroupedMealsDTO[] = [];

    meals.forEach(meal => {
      const date = meal.date;

      const mealGroup = groupedMeals.find(group => group.date === date);

      if (mealGroup) {
        mealGroup.meals.push(meal);
      } else {
        groupedMeals.push({
          date,
          meals: [meal],
        });
      }
    });

    groupedMeals.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

    // Ordena as refeições dentro de cada grupo por hora, do mais recente para o mais antigo
    groupedMeals.forEach(group => {
      group.meals.sort((a, b) => parseTime(b.date).getTime() - parseTime(a.date).getTime());
    });

    return groupedMeals;
    
  } catch (error) {
    throw error;
  }
}