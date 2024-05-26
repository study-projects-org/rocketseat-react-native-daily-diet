import { ThemeProvider } from 'styled-components/native';

import theme from '@theme/index';
import { Home } from '@screens/Home';
import { NunitoSans_400Regular, NunitoSans_700Bold, useFonts } from '@expo-google-fonts/nunito-sans';
import { Loading } from '@components/Loading';

export default function App() {

  const [fontLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });

  return (
    <ThemeProvider theme={theme}>
      {fontLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}

