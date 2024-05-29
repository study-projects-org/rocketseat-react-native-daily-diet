import { Header } from "@components/Header";
import { ButtonContainer, Container, Form, InputRow, Scroll, SelectContainer, SelectRow } from "./styles";
import { HeaderTitle } from "@components/HeaderTitle";
import { InputText } from "@components/InputText";
import { MaskedInputText } from "@components/MaskedInputText";
import { SelectButton } from "@components/SelectButton";
import { Label } from "@components/Label";
import { Button } from "@components/Button";
import { useRoute, useNavigation, useFocusEffect } from "@react-navigation/native";
import { MealDTO } from "@storage/meals/dto/meal.dto";
import { mealGetById } from "@storage/meals/meal-get-by-id";
import { AppError } from "@utils/app.error";
import { showAlert } from "@utils/show-alert";
import { useCallback, useState } from "react";
import { MealAddProps } from "@storage/meals/meal-create";
import { Loading } from "@components/Loading";
import { mealEdit } from "@storage/meals/meal-edit";

type MealProps = keyof MealAddProps;

export function EditMeal() {
  const route = useRoute();
  const navigation = useNavigation();

  const [meal, setMeal] = useState<MealDTO>();
  const [isLoading, setIsLoading] = useState(false);

  const { mealId } = route.params as { mealId: string };

  function handleNavToDetail() {
    navigation.navigate('mealDetail', { mealId });
  }

  function handleChangeMeal(prop: MealProps, value: string | boolean) {
    if (!meal) return;

    setMeal({
      ...meal,
      [prop]: value
    });
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

  async function handleUpdateMeal() {
    try {

      if (!meal) return;

      if (meal.name === '' || meal.description === '' || meal.date === '' || meal.hour === '' || meal.inTheDiet === undefined) {
        return showAlert('Editar refeição', 'Preencha todos os campos');
      }

      await mealEdit(meal, mealId);

      showAlert('Editar refeição', 'Refeição atualizada com sucesso');
      handleNavToDetail();    
      
    } catch (error) {
      if (error instanceof AppError) {
        showAlert('Editar refeição', error.message);
      } else {
        showAlert('Editar refeição', 'Erro ao editar refeição');
        console.log(error);
      }
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchMeal();
    }, [])
  );

  if (isLoading) return <Loading />

  return (
    <Container>
      <Header type="DEFAULT">
        <HeaderTitle title="Editar refeição" />
      </Header>

      <Scroll
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Form>
          <InputText
            label="Nome"
            value={meal?.name}
            onChangeText={(value) => handleChangeMeal('name', value)}
            returnKeyType="next"
          />

          <InputText
            label="Descrição"
            value={meal?.description}
            numberOfLines={6}
            multiline 
            textAlignVertical="top"
            onChangeText={(value) => handleChangeMeal('description', value)}
            returnKeyType="next"
          />

          <InputRow>
            <MaskedInputText
              label="Data"
              value={meal?.date}
              mask="date"
              maskedTextChange={(text) => handleChangeMeal('date', text)}
              keyboardType="numeric"
              returnKeyType="next"
              isFlex
            />
            <MaskedInputText
              label="Hora"
              mask="time"
              value={meal?.hour}
              maskedTextChange={(text) => handleChangeMeal('hour', text)}
              keyboardType="numeric"
              returnKeyType="next"
              isFlex
            />
          </InputRow>

          <SelectContainer>
            <Label text="Está dentro da dieta?" />
            <SelectRow>
              <SelectButton
                label="Sim"
                type="POSITIVE"
                isSelected={meal?.inTheDiet === true}
                onPress={() => handleChangeMeal('inTheDiet', true)}
              />

              <SelectButton
                label="Não"
                type="NEGATIVE"
                isSelected={meal?.inTheDiet === false}
                onPress={() => handleChangeMeal('inTheDiet', false)}
              />
            </SelectRow>
          </SelectContainer>

          <ButtonContainer>
            <Button
              title="Salvar alterações"
              onPress={handleUpdateMeal}
            />
          </ButtonContainer>

        </Form>
      </Scroll>

    </Container>
  );
}