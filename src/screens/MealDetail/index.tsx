import { Header } from "@components/Header";
import { Badge, BadgeCircle, BadgeText, ButtonGroup, Container, Content, Description, Group, Label, Title } from "./styles";
import { HeaderTitle } from "@components/HeaderTitle";
import { Button } from "@components/Button";

export function MealDetail() {

  const inTheDiet = true;

  return (
    <Container>
      <Header
        type={inTheDiet ? 'POSITIVE' : 'NEGATIVE'}
      >
        <HeaderTitle title="Refeição" />
      </Header>

      <Content>

        <Group>
          <Title>X-tudo</Title>
          <Description>Descrição da refeição</Description>
        </Group>

        <Group>
          <Label>Data e hora</Label>
          <Description>DD/MM/AAAA às HH:MM</Description>
        </Group>

        <Badge>
          <BadgeCircle type={inTheDiet ? 'POSITIVE' : 'NEGATIVE'} />
          <BadgeText>{inTheDiet ? 'dentro da dieta' : 'fora da dieta'}</BadgeText>
        </Badge>

        <ButtonGroup>
          <Button
            title="Editar refeição"
            icon="edit-square"
          />
          <Button
            type="SECONDARY"
            title="Excluir refeição"
            icon="delete-outline"
          />
        </ButtonGroup>

      </Content>
    </Container>
  );
}