import { css, styled } from "styled-components/native";

export const Container = styled.View`
  padding: 24px 0 36px 0;
  flex-direction: row;
  justify-content: center;

  position: relative;
`;

export const Title = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `};

  text-align: center;
`;