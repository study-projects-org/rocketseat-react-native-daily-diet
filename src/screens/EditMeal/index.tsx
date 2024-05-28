import { Header } from "@components/Header";
import { ButtonContainer, Container, Form, InputRow, Scroll, SelectContainer, SelectRow } from "./styles";
import { HeaderTitle } from "@components/HeaderTitle";
import { InputText } from "@components/InputText";
import { MaskedInputText } from "@components/MaskedInputText";
import { SelectButton } from "@components/SelectButton";
import { Label } from "@components/Label";
import { Button } from "@components/Button";

export function EditMeal() {
  return (
    <Container>
      <Header type="DEFAULT">
        <HeaderTitle title="Editar refeição" />
      </Header>

      <Scroll
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}
      >
        <Form>
          <InputText
            label="Nome"
          />

          <InputText
            label="Descrição"
            numberOfLines={6}
            textAlignVertical="top"
          />

          <InputRow>
            <MaskedInputText
              label="Data"
              type="date"
              options={{
                dateFormat: 'DD/MM/YYYY'
              }}
              onChangeText={() => { }}
              keyboardType="numeric"
              isFlex
            />
            <MaskedInputText
              label="Hora"
              type="time"
              options={{
                timeFormat: 'HH:mm'
              }}
              onChangeText={() => { }}
              keyboardType="numeric"
              isFlex
            />
          </InputRow>

          <SelectContainer>
            <Label text="Está dentro da dieta?" />
            <SelectRow>
              <SelectButton
                label="Sim"
                type="POSITIVE"
                isSelected={false}
              />

              <SelectButton
                label="Não"
                type="NEGATIVE"
                isSelected={true}
              />
            </SelectRow>
          </SelectContainer>

          <ButtonContainer>
            <Button 
              title="Salvar alterações"
            />
          </ButtonContainer>

        </Form>
      </Scroll>

    </Container>
  );
}