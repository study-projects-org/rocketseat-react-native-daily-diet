import styled, { css } from "styled-components/native";

export const Title = styled.Text`
  flex: 1;
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
    color: ${theme.COLORS.GRAY_700};
  `};

  text-align: center;

  padding: 24px 0;
`;