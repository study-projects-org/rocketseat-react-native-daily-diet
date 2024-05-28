import { Button } from "@components/Button";
import { ButtonGroup, Container, Content, Title } from "./styles";

export function Popup() {
  return (
    <Container>
      <Content>
        <Title>
          Deseja realmente excluir o registro da refeição?
        </Title>

        <ButtonGroup>
          <Button
            title="Cancelar"
            type="SECONDARY"
            widthStyle="FLEX_GROW"
          />
          <Button
            title="Sim, excluir"
            widthStyle="FLEX_GROW"
          />
        </ButtonGroup>
      </Content>
    </Container>
  );
}