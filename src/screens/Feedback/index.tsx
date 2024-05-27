import { BoldText, Container, Message, Title, Image } from "./styles";
import { Button } from "@components/Button";

import positiveImage from "@assets/images/positive-case/Illustration.png";
import negativeImage from "@assets/images/negative-case/Illustration.png";

export function Feedback() {

  const inTheDiet = false;

  const title = inTheDiet ? 'Continue assim!' : 'Que pena!';
  const image = inTheDiet ? positiveImage : negativeImage;
  const status = inTheDiet ? 'POSITIVE' : 'NEGATIVE';

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
        onPress={() => { }}
        isContentWidth
      />

    </Container>
  );
}