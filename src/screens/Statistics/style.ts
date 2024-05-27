import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

export type StatisticTypeStyleProps = 'POSITIVE' | 'NEGATIVE';

type StatisticTypeProps = {
  type: StatisticTypeStyleProps;
}

export const Container = styled(SafeAreaView) <StatisticTypeProps>`
  background-color: ${({ type, theme }) => type === 'POSITIVE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 20px 20px 0 0;

  padding: 24px;
  margin-top: -20px;

  gap: 16px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `};

  text-align: center;
  padding: 24px 0 16px 0;
`;

export const CardGroup = styled.View`
  flex-direction: row;
  width: 100%;
  gap: 16px;

  justify-content: space-between;
`;

