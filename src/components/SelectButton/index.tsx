import { ViewStatus } from "@utils/view-status";
import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Label } from "./styles";

type Props = TouchableOpacityProps & {
  label: string;
  isSelected: boolean;
  type: Omit<ViewStatus, 'DEFAULT'>;
}

export function SelectButton({ label, isSelected, type, ...rest }: Props) {
  return (
    <Container
      isSelected={isSelected}
      type={type}
      {...rest}
    >
      <Icon type={type} />
      <Label>{label}</Label>
    </Container>
  );
}