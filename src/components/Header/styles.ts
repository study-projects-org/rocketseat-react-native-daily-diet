import { ViewStatus } from "@utils/view-status";
import { css, styled } from "styled-components/native";

type Props = {
  type: ViewStatus;
}

export const Container = styled.View<Props>`
  padding: 24px 0 36px 0;
  flex-direction: row;
  justify-content: center;

  position: relative;

  background-color: ${({ type, theme }) => {
    switch (type) {
      case 'POSITIVE':
        return theme.COLORS.GREEN_LIGHT;
      case 'NEGATIVE':
        return theme.COLORS.RED_LIGHT;
      default:
        return theme.COLORS.GRAY_300;
    }
  }};
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