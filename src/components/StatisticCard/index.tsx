import { Container, StatisticCardTypeStyleProps, Subtitle, Title } from "./style";

type Props = {
  type: StatisticCardTypeStyleProps;
  isFlex?: boolean;
  title: string;
  subtitle: string;
}

export function StatisticCard({ type, title, isFlex = false, subtitle }: Props) {
  return (
    <Container
      type={type}
      isFlex={isFlex}
    >
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </Container>
  );
}