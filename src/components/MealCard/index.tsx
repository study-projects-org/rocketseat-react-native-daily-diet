import { TouchableOpacityProps } from "react-native";
import { Circle, Container, HourText, MealText, Pipe, TextContainer } from "./styles";

type Props = TouchableOpacityProps & {
  hour: string;
  mealTitle: string;
  inTheDiet: boolean;
}

export function MealCard({ hour, mealTitle, inTheDiet, ...rest }: Props) {
  return (
    <Container {...rest}>
      <TextContainer>

        <HourText>{hour}</HourText>

        <Pipe />

        <MealText
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          {mealTitle}
        </MealText>

      </TextContainer>

      <Circle type={inTheDiet ? 'POSITIVE' : 'NEGATIVE'} />
    </Container>
  );
}