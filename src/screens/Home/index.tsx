import { StatisticInfo } from "@components/StatisticInfo";
import { Avatar, Container, DetailButton, Header, Icon, Label, LabelButtonGroup, Logo, SectionHeader, StatisticInfoContainer } from "./styles";

import logo from '@assets/logo.png';
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";
import { SectionList } from "react-native";
import { ListEmpty } from "@components/ListEmpty";

export function Home() {

  const meals = [
    {
      date: "2021-09-01",
      data: [
        {
          hour: "08:00",
          mealTitle: "Café da manhã",
          inTheDiet: false
        },
        {
          hour: "12:00",
          mealTitle: "Almoço",
          inTheDiet: true
        },
        {
          hour: "15:00",
          mealTitle: "Lanche da tarde",
          inTheDiet: false
        },
        {
          hour: "19:00",
          mealTitle: "Jantar",
          inTheDiet: true
        }
      ]
    },
    {
      date: "2021-09-02",
      data: [
        {
          hour: "08:00",
          mealTitle: "Café da manhã",
          inTheDiet: false
        },
        {
          hour: "12:00",
          mealTitle: "Almoço",
          inTheDiet: true
        },
        {
          hour: "15:00",
          mealTitle: "Lanche da tarde",
          inTheDiet: false
        },
        {
          hour: "19:00",
          mealTitle: "Jantar",
          inTheDiet: true
        }
      ]
    }
  ];

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString().slice(-2);

    return `${day}.${month}.${year}`;
  }


  return (
    <Container>

      <Header>
        <Logo source={logo} />
        <Avatar source={{ uri: "https://randomuser.me/api/portraits/med/men/75.jpg" }} />
      </Header>

      <StatisticInfoContainer type="POSITIVE">
        <StatisticInfo title="90,86%" />

        <DetailButton>
          <Icon
            name="arrow-outward"
            type="POSITIVE"
          />
        </DetailButton>
      </StatisticInfoContainer>

      <LabelButtonGroup>
        <Label>Refeições</Label>

        <Button
          title="Nova refeição"
          showIcon
        />
      </LabelButtonGroup>

      <SectionList
        sections={meals}
        keyExtractor={meals => meals.hour + meals.mealTitle}
        renderItem={({ item }) => (
          <MealCard
            hour={item.hour}
            mealTitle={item.mealTitle}
            inTheDiet={item.inTheDiet}
          />
        )}
        renderSectionHeader={({ section: { date } }) => (
          <SectionHeader>
            {formatDate(date)}
          </SectionHeader>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={meals.length === 0 ? { flex: 1 } : { paddingBottom: 24 }}
        ListEmptyComponent={(
          <ListEmpty 
            message="Que tal cadastrar sua primeira refeição?"
          />
        )}
      />


    </Container>
  );
}