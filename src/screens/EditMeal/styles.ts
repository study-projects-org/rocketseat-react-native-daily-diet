import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Scroll = styled(ScrollView)`
  flex: 1;
  border-radius: 20px 20px 0 0;
  margin-top: -20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Form = styled.View`
  flex: 1;

  padding: 24px;
  gap: 24px;
`;

export const InputRow = styled.View`
  flex-direction: row;
  gap: 16px;
  width: 100%;
`;

export const SelectContainer = styled.View`
  flex: 1;
  gap: 8px;
`;

export const SelectRow = styled.View`
  width: 100%;
  flex-direction: row;
  gap: 8px;
`;

export const ButtonContainer = styled.View`
  flex: 1;
  justify-content: flex-end;

  padding-top: 24px;
`;