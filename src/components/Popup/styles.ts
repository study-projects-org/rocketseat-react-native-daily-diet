import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex:1;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.5);

  padding: 0 24px;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  z-index: 999;
`;

export const Content = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 24px;
  border-radius: 8px;

  gap: 32px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_600};
  `};

  text-align: center;
  margin-top: 24px;
`;

export const ButtonGroup = styled.View`
  flex-direction: row;
  gap: 12px;
`;