import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import styled, { css } from "styled-components/native";
import MaterialIcon from '@expo/vector-icons/MaterialIcons';

type Props = TouchableOpacityProps & {
  isContentWidth?: boolean;
}

export const Container = styled(TouchableOpacity) <Props>`
  ${({ theme, isContentWidth }) => css`
    background-color: ${theme.COLORS.GRAY_700};
    ${isContentWidth ? 'align-self: center;' : 'width: 100%;'}
  `};
  
  min-height: 56px;
  max-height: 56px;

  padding: 0 24px;

  border-radius: 6px;
  align-items: center;
  justify-content: center;

  flex-direction: row;
  gap: 8px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;

export const Icon = styled(MaterialIcon).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.WHITE,
}))``;