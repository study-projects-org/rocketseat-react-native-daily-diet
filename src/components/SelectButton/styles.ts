import { ViewStatus } from "@utils/view-status";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

type SelectStyleType = {
  type: Omit<ViewStatus, 'DEFAULT'>;
}

export type SelectButtonTypeStyleProps = {
  isSelected?: boolean;
  type: Omit<ViewStatus, 'DEFAULT'>;
}

export const Container = styled(TouchableOpacity)<SelectButtonTypeStyleProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 16px;
  border-radius: 6px;
  
  ${({ theme, isSelected, type }) => css`
    background-color: ${(isSelected && type === 'POSITIVE') ? theme.COLORS.GREEN_LIGHT : (isSelected && type === 'NEGATIVE') ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_200};

    border-width: 1px;
    border-style: solid;
    border-color: ${(isSelected && type === 'POSITIVE') ? theme.COLORS.GREEN_DARK : (isSelected && type === 'NEGATIVE') ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_200}; 
  `};
`;

export const Label = styled.Text`
  ${({ theme}) => css`
    color: ${theme.COLORS.GRAY_700};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Icon = styled.View<SelectStyleType>`
  width: 8px;
  height: 8px;
  border-radius: 4px;

  ${({ theme, type }) => css`
    background-color: ${type === 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `};
`;