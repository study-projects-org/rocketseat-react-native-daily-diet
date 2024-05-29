import { useNavigation, useRoute } from "@react-navigation/native";

import { BoldText, Container, Message, Title, Image } from "./styles";
import { Button } from "@components/Button";

import positiveImage from "@assets/images/positive-case/Illustration.png";
import negativeImage from "@assets/images/negative-case/Illustration.png";
import { AppStatusBar } from "@components/AppStatusBar";
import { StatusBar } from "react-native";

export function Feedback() {

  const route = useRoute();
  const navigation = useNavigation();
  const { inTheDiet } = route.params as { inTheDiet: boolean };

  const title = inTheDiet ? 'Continue assim!' : 'Que pena!';
  const image = inTheDiet ? positiveImage : negativeImage;
  const status = inTheDiet ? 'POSITIVE' : 'NEGATIVE';

  function handleNavToHome() {
    navigation.navigate('home');
  }

  function getMessage() {
    if (inTheDiet) {
      return (
        <>Você continua <BoldText>dentro da dieta</BoldText>. Muito bem!</>
      )
    }
    return (
      <>Você <BoldText>saiu da dieta</BoldText> dessa vez, mas continue se esforçando e não desista!</>
    )
  }

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Title
        type={status}
      >
        {title}
      </Title>

      <Message>
        {getMessage()}
      </Message>

      <Image source={image} />

      <Button
        title="Ir para a página inicial"
        onPress={handleNavToHome}
        widthStyle="CENTERED"
      />

    </Container>
  );
}