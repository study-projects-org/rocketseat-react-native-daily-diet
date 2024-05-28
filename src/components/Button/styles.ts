import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons';

export type ButtonStyleType = 'PRIMARY' | 'SECONDARY';

export type ButtonStyleTypeProps = {
  type?: ButtonStyleType;
  widthStyle?: 'CENTERED' | 'FULL_WIDTH' | 'FLEX_GROW';
}

// flex-shrink: 0; - Não deixa o botão diminuir de tamanho
export const Container = styled(TouchableOpacity) <ButtonStyleTypeProps>`
  ${({ theme, widthStyle, type }) => css`
    ${widthStyle === 'CENTERED' ? 'align-self: center;' : ''}
    ${widthStyle === 'FULL_WIDTH' ? 'width: 100%;' : ''}
    ${widthStyle === 'FLEX_GROW' ? 'flex: 1;' : ''}

    background-color: ${type === 'PRIMARY' ? theme.COLORS.GRAY_700 : 'transparent'};

    border: 1px solid ${theme.COLORS.GRAY_700};
  `};
  
  min-height: 56px;
  max-height: 56px;

  padding: 0 24px;

  border-radius: 6px;
  align-items: center;
  justify-content: center;

  flex-direction: row;
  gap: 12px;
`;

export const Title = styled.Text<ButtonStyleTypeProps>`
  ${({ theme, type }) => css`
    color: ${type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `};
`;

export const Icon = styled(MaterialIcons).attrs<ButtonStyleTypeProps>(({ theme, type }) => ({
  size: 24,
  color: type === 'PRIMARY' ? theme.COLORS.WHITE : theme.COLORS.GRAY_700,
}))``;