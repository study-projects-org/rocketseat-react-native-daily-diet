import { StatisticInfo } from "@components/StatisticInfo";
import { CardGroup, Container, Content, Title } from "./style";
import { StatisticCard } from "@components/StatisticCard";
import { Header } from "@components/Header";
import { useDietStatus } from "hooks/use-diet-status";
import { useCallback, useState } from "react";
import { showAlert } from "@utils/show-alert";
import { mealsGetGeneralStats } from "@storage/meals/meals-get-general-stats";
import { useFocusEffect } from "@react-navigation/native";

export function Statistics() {

  const { dietRate, dietStatus } = useDietStatus();
  const [bestSequence, setBestSequence] = useState(0);
  const [totalMeals, setTotalMeals] = useState(0);
  const [totalMealsInTheDiet, setTotalMealsInTheDiet] = useState(0);
  const [totalMealsNotInTheDiet, setTotalMealsNotInTheDiet] = useState(0);

  async function fetchStatistics() {
    try {

      const { totalMeals,
        totalMealsInTheDiet,
        totalMealsNotInTheDiet,
        totalSequentialDaysOnDiet } = await mealsGetGeneralStats();

      setTotalMeals(totalMeals);
      setTotalMealsInTheDiet(totalMealsInTheDiet);
      setTotalMealsNotInTheDiet(totalMealsNotInTheDiet);
      setBestSequence(totalSequentialDaysOnDiet);

    } catch (error) {
      showAlert('Estatísticas', 'Erro ao buscar estatísticas');
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchStatistics();
    }, [])
  );

  return (
    <Container type={dietStatus}>

      <Header type={dietStatus}>
        <StatisticInfo
          title={dietRate}
        />
      </Header>

      <Content>
        <Title>Estatísticas gerais</Title>

        <StatisticCard
          type="DEFAULT"
          title={bestSequence.toString()}
          subtitle="melhor sequência de pratos dentro da dieta"
        />

        <StatisticCard
          type="DEFAULT"
          title={totalMeals.toString()}
          subtitle="refeições registradas"
        />

        <CardGroup>
          <StatisticCard
            type="POSITIVE"
            title={totalMealsInTheDiet.toString()}
            subtitle="refeições dentro da dieta"
            isFlex
          />

          <StatisticCard
            type="NEGATIVE"
            title={totalMealsNotInTheDiet.toString()}
            subtitle="refeições fora da dieta"
            isFlex
          />
        </CardGroup>
      </Content>
    </Container>
  );
}