import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { ButtonStyleTypeProps, Container, Icon, Title } from "./styles";

type Props = TouchableOpacityProps & ButtonStyleTypeProps & {
  title: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
}

export function Button({
  title,
  icon,
  widthStyle = 'FULL_WIDTH',
  type = 'PRIMARY',
  ...rest }: Props) {

  const showIcon = icon !== undefined;

  return (
    <Container
      type={type}
      widthStyle={widthStyle}
      {...rest}
    >

      {showIcon && <Icon type={type} name={icon} />}

      <Title type={type}>
        {title}
      </Title>

    </Container>
  );
}