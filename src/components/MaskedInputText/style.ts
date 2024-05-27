import { MaskedTextInput } from "react-native-mask-text";
import styled, { css } from "styled-components/native";

export type InputStyleTypeProps = {
  isFlex?: boolean;
}

type InputTextProps = {
  isFocused?: boolean;
}

export const Container = styled.View<InputStyleTypeProps>`
  gap: 4px;

  ${({ isFlex }) => isFlex && 'flex: 1;'}
`;

export const Input = styled(MaskedTextInput)<InputTextProps>`
  ${({ theme, isFocused }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};

    border-width: 1px;
    border-style: solid;
    border-color: ${isFocused ? theme.COLORS.GRAY_500: theme.COLORS.GRAY_300};
  `};

  padding: 14px;
  border-radius: 6px;
`;