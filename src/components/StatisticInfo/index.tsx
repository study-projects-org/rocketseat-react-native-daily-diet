import { Container, Subtitle, Title } from "./styles";

type Props = {
  title: string;
}

export function StatisticInfo({ title }: Props) {
  return (
    <Container>
      <Title>
        {title}
      </Title>

      <Subtitle>
        das refeições dentro da dieta
      </Subtitle>
    </Container>
  );
}