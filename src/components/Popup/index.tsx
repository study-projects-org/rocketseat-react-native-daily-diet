import { Button } from "@components/Button";
import { ButtonGroup, Container, Content, Title } from "./styles";

type Props = {
  title: string;
  onConfirm: () => void;
  onCancel: () => void;
};

export function Popup({ title, onConfirm, onCancel }: Props) {
  return (
    <Container>
      <Content>
        <Title>
          {title}
        </Title>

        <ButtonGroup>
          <Button
            title="Cancelar"
            type="SECONDARY"
            widthStyle="FLEX_GROW"
            onPress={onCancel}
          />
          <Button
            title="Sim, excluir"
            widthStyle="FLEX_GROW"
            onPress={onConfirm}
          />
        </ButtonGroup>
      </Content>
    </Container>
  );
}