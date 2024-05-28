import { StatisticInfo } from "@components/StatisticInfo";
import { CardGroup, Container, Content, Title } from "./style";
import { StatisticCard } from "@components/StatisticCard";
import { Header } from "@components/Header";
import { AppStatusBar } from "@components/AppStatusBar";

export function Statistics() {
  return (
    <Container type="POSITIVE">

      {/* <AppStatusBar type="POSITIVE"/> */}

      <Header type="POSITIVE">
        <StatisticInfo
          title="90,86%"
        />
      </Header>

      <Content>
        <Title>Estatísticas gerais</Title>

        <StatisticCard
          type="DEFAULT"
          title="22"
          subtitle="melhor sequência de pratos dentro da dieta"
        />

        <StatisticCard
          type="DEFAULT"
          title="109"
          subtitle="refeições registradas"
        />

        <CardGroup>
          <StatisticCard
            type="POSITIVE"
            title="99"
            subtitle="refeições dentro da dieta"
            isFlex
          />

          <StatisticCard
            type="NEGATIVE"
            title="10"
            subtitle="refeições fora da dieta"
            isFlex
          />
        </CardGroup>
      </Content>
    </Container>
  );
}