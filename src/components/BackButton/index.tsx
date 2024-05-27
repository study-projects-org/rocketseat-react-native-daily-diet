import { TouchableOpacityProps } from "react-native";
import { BackButtonTypeStyleProps, Container, Icon } from "./styles";

type Props = TouchableOpacityProps & {
  type: BackButtonTypeStyleProps
}

export function BackButton({ type, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Icon name="arrow-back" type={type} />
    </Container>
  );
}