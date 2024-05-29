import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EditMeal } from '@screens/EditMeal';
import { Feedback } from '@screens/Feedback';
import { Home } from '@screens/Home';
import { MealDetail } from '@screens/MealDetail';
import { NewMeal } from '@screens/NewMeal';
import { Statistics } from '@screens/Statistics';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false
      }}>

      <Screen name="home" component={Home} />
      <Screen name="statistics" component={Statistics} />
      <Screen name="newMeal" component={NewMeal} />
      <Screen name="feedback" component={Feedback} />
      <Screen name="mealDetail" component={MealDetail} />
      <Screen name="editMeal" component={EditMeal} />

    </Navigator>
  );
}
