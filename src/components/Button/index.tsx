import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  isContentWidth?: boolean;
  showIcon?: boolean;
}

export function Button({ title, isContentWidth = false, showIcon = false, ...rest }: Props) {
  return (
    <Container
      isContentWidth={isContentWidth}
      {...rest}
    >

      {showIcon && <Icon name="add" />}

      <Title>
        {title}
      </Title>

    </Container>
  );
}