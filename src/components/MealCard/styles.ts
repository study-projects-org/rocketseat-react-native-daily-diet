import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type CircleTypeStyleProps = 'POSITIVE' | 'NEGATIVE';

type CircleTypeProps = {
  type: CircleTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  width: 100%;

  padding: 16px;

  margin-top: 12px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  flex: 1;
`;

export const HourText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XSM}px;
  `};
`;

export const Pipe = styled.View`
  width: 1px;
  height: 14px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`;


export const MealText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `};

  max-width: 80%;
`;

export const Circle = styled.View<CircleTypeProps>`
  width: 14px;
  height: 14px;
  border-radius: 7px;

  ${({ type, theme }) => css`
    background-color: ${type === 'POSITIVE' ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
  `};
`;


