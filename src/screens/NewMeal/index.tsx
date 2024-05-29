import { useState } from "react";

import { Header } from "@components/Header";
import { ButtonContainer, Container, Form, InputRow, Scroll, SelectContainer, SelectRow } from "./styles";
import { HeaderTitle } from "@components/HeaderTitle";
import { InputText } from "@components/InputText";
import { MaskedInputText } from "@components/MaskedInputText";
import { SelectButton } from "@components/SelectButton";
import { Label } from "@components/Label";
import { Button } from "@components/Button";
import { MealAddProps, mealCreate } from "@storage/meals/meal-create";
import { getCurrentDate, getCurrentTime } from "@utils/datetime.utils";
import { AppError } from "@utils/app.error";
import { showAlert } from "@utils/show-alert";
import { Loading } from "@components/Loading";
import { useNavigation } from "@react-navigation/native";

type MealProps = keyof MealAddProps;

export function NewMeal() {

  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [meal, setMeal] = useState({
    name: '',
    description: '',
    date: getCurrentDate(),
    hour: getCurrentTime(),
    inTheDiet: undefined
  });

  function handleChangeMeal(prop: MealProps, value: string | boolean) {
    setMeal({
      ...meal,
      [prop]: value
    });
  }

  async function handleCreateMeal() {
    const { name, description, inTheDiet } = meal;
    try {
      if (name === '' || description === '' || inTheDiet === undefined) {
        return showAlert('Nova refeição', 'Preencha todos os campos');
      }

      setIsLoading(true);

      await mealCreate({
        ...meal,
        inTheDiet
      });

      handleNavToFeedback();

    } catch (error) {
      if (error instanceof AppError) {
        showAlert('Nova refeição', error.message);
      } else {
        showAlert('Nova refeição', 'Erro ao cadastrar refeição');
        console.log(error);
      }

    } finally {
      setIsLoading(false);
    }
  }

  function handleNavToFeedback() {
    if (meal.inTheDiet === undefined) {
      return;
    }
    navigation.navigate('feedback', { inTheDiet: meal.inTheDiet });
  }

  return (
    <Container>
      <Header type="DEFAULT">
        <HeaderTitle title="Nova refeição" />
      </Header>

      <Scroll
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Form>
          <InputText
            label="Nome"
            value={meal.name}
            onChangeText={(value) => handleChangeMeal('name', value)}
            returnKeyType="next"
          />

          <InputText
            label="Descrição"
            value={meal.description}
            numberOfLines={6}
            textAlignVertical="top"
            onChangeText={(value) => handleChangeMeal('description', value)}
            returnKeyType="next"
          />

          <InputRow>
            <MaskedInputText
              label="Data"
              value={meal.date}
              mask="date"
              maskedTextChange={(text) => handleChangeMeal('date', text)}
              keyboardType="numeric"
              returnKeyType="next"
              isFlex
            />
            <MaskedInputText
              label="Hora"
              mask="time"
              value={meal.hour}
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
                isSelected={meal.inTheDiet === true}
                onPress={() => handleChangeMeal('inTheDiet', true)}
              />

              <SelectButton
                label="Não"
                type="NEGATIVE"
                isSelected={meal.inTheDiet === false}
                onPress={() => handleChangeMeal('inTheDiet', false)}
              />
            </SelectRow>
          </SelectContainer>

          <ButtonContainer>
            {isLoading ? <Loading /> : (
              <Button
                title="Cadastrar refeição"
                onPress={handleCreateMeal}
              />
            )}
          </ButtonContainer>

        </Form>
      </Scroll>

    </Container>
  );
}