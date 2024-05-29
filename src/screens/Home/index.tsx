import { useCallback, useState } from 'react';
import { Alert, SectionList } from "react-native";
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import logo from '@assets/logo.png';
import { StatisticInfo } from "@components/StatisticInfo";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";
import { ListEmpty } from "@components/ListEmpty";

import { Avatar, Container, DetailButton, Header, Icon, Label, LabelButtonGroup, Logo, SectionHeader, StatisticInfoContainer } from "./styles";

import { GroupedMealsDTO } from '@storage/meals/dto/meal-group.dto';
import { mealsGetGrouped } from '@storage/meals/meals-get-grouped';
import { AppError } from '@utils/app.error';
import { Loading } from '@components/Loading';
import { useDietStatus } from 'hooks/use-diet-status';
import { showAlert } from '@utils/show-alert';

export function Home() {
  const navigation = useNavigation();
  const { dietRate, dietStatus } = useDietStatus();

  const [isLoading, setIsLoading] = useState(false);
  const [meals, setMeals] = useState<GroupedMealsDTO[]>([]);

  function formatDate(dateString: string) {
    const day = dateString.substring(0, 2);
    const month = dateString.substring(3, 5);
    const year = dateString.substring(8, 10);

    return `${day}.${month}.${year}`;
  }

  function handleNavToNewMeal() {
    navigation.navigate('newMeal');
  }

  function handleNavToMealStats() {
    navigation.navigate('statistics');
  }

  function handleNavToMealDetail(id: string) {
    navigation.navigate('mealDetail', { mealId: id });
  }

  async function fetchMeals() {
    setIsLoading(true);

    try {

      const meals = await mealsGetGrouped();
      setMeals(meals);

    } catch (error) {
      if (error instanceof AppError) {
        showAlert('Refeições', error.message);
      } else {
        Alert.alert('Refeições', 'Erro ao buscar refeições');
        console.log(error);
      }

    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeals();
    }, [])
  );

  return (
    <Container>

      <Header>
        <Logo source={logo} />
        <Avatar source={{ uri: "https://randomuser.me/api/portraits/med/men/75.jpg" }} />
      </Header>

      <StatisticInfoContainer type={dietStatus}>
        <StatisticInfo title={dietRate} />

        <DetailButton>
          <Icon
            name="arrow-outward"
            type={dietStatus}
            onPress={handleNavToMealStats}
          />
        </DetailButton>
      </StatisticInfoContainer>

      <LabelButtonGroup>
        <Label>Refeições</Label>

        <Button
          title="Nova refeição"
          icon="add"
          onPress={handleNavToNewMeal}
        />
      </LabelButtonGroup>

      {isLoading ? <Loading /> : (
        <SectionList
          sections={meals.map((item) => ({
            date: item.date,
            data: item.meals
          }))}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <MealCard
              hour={item.hour}
              mealTitle={item.name}
              inTheDiet={item.inTheDiet}
              onPress={() => handleNavToMealDetail(item.id)}
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
      )}
    </Container>
  );
}