import { useCallback, useState } from "react";

import { Header } from "@components/Header";
import { HeaderTitle } from "@components/HeaderTitle";
import { Button } from "@components/Button";
import { Popup } from "@components/Popup";

import { Badge, BadgeCircle, BadgeText, ButtonGroup, Container, Content, Description, Group, Label, Title } from "./styles";
import { MealDTO } from "@storage/meals/dto/meal.dto";
import { useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import { Loading } from "@components/Loading";
import { AppError } from "@utils/app.error";
import { showAlert } from "@utils/show-alert";
import { mealGetById } from "@storage/meals/meal-get-by-id";
import { mealDelete } from "@storage/meals/meal-delete";

export function MealDetail() {
  const route = useRoute();
  const navigation = useNavigation();

  const [meal, setMeal] = useState<MealDTO>();
  const [isLoading, setIsLoading] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const { mealId } = route.params as { mealId: string };
  const dietStatus = meal?.inTheDiet ? 'POSITIVE' : 'NEGATIVE';

  function handleNavToHome() {
    navigation.navigate('home');
  }

  function handleNavToEdit() {
    navigation.navigate('editMeal', { mealId });
  }

  async function fetchMeal() {
    try {
      setIsLoading(true);

      const meal = await mealGetById(mealId);
      setMeal(meal);

    } catch (error) {
      if (error instanceof AppError) {
        showAlert('Refeição', error.message);
      } else {
        showAlert('Refeição', 'Erro ao buscar refeição');
        console.log(error);
      }

    } finally {
      setIsLoading(false);
    }
  }

  async function handleDeleteMeal() {
    try {
      setIsPopupVisible(false);
      await mealDelete(mealId);
      showAlert('Refeição', 'Refeição excluída com sucesso');
      handleNavToHome();
      
    } catch (error) {
      if (error instanceof AppError) {
        showAlert('Refeição', error.message);
      } else {
        showAlert('Refeição', 'Erro ao excluir refeição');
        console.log(error);
      }
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [])
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container>
      <Header
        type={dietStatus}
      >
        <HeaderTitle title="Refeição" />
      </Header>

      <Content>

        <Group>
          <Title>{meal?.name}</Title>
          <Description>{meal?.description}</Description>
        </Group>

        <Group>
          <Label>Data e hora</Label>
          <Description>{`${meal?.date} às ${meal?.hour}`}</Description>
        </Group>

        <Badge>
          <BadgeCircle type={dietStatus} />
          <BadgeText>{meal?.inTheDiet ? 'dentro da dieta' : 'fora da dieta'}</BadgeText>
        </Badge>

        <ButtonGroup>
          <Button
            title="Editar refeição"
            icon="edit-square"
            onPress={handleNavToEdit}
          />
          <Button
            type="SECONDARY"
            title="Excluir refeição"
            icon="delete-outline"
            onPress={() => setIsPopupVisible(true)}
          />
        </ButtonGroup>

      </Content>

      {isPopupVisible && <Popup
        title="Deseja realmente excluir o registro da refeição?"
        onConfirm={handleDeleteMeal}
        onCancel={() => setIsPopupVisible(false)}
      />}
    </Container>
  );
}