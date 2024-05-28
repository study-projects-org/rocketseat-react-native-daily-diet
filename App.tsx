import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';

import theme from '@theme/index';

import { Home } from '@screens/Home';
import { Loading } from '@components/Loading';
import { Statistics } from '@screens/Statistics';
import { NewMeal } from '@screens/NewMeal';
import { Feedback } from '@screens/Feedback';
import { MealDetail } from '@screens/MealDetail';
import { Popup } from '@components/Popup';

export default function App() {

  const [fontLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontLoaded ? <MealDetail /> : <Loading />}
    </ThemeProvider>
  );
}

