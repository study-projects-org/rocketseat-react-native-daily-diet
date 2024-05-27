import { TouchableOpacityProps } from "react-native";
import { BackButtonTypeStyleProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  type: BackButtonTypeStyleProps
}

export function BackButton({ type }: Props) {
  return (
    <Container>
      <Icon name="arrow-back" type={type} />
    </Container>
  );
}