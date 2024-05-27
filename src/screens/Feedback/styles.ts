import { ViewStatus } from "@utils/view-status";
import styled, { css } from "styled-components/native";

type MessageStyleTypeProps = Omit<ViewStatus, 'DEFAULT'>;

export type FeedbackMessageStyleProps = {
  type: MessageStyleTypeProps;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const Title = styled.Text<FeedbackMessageStyleProps>`
  ${({ theme, type }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${type === 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `};
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `};
    
  text-align: center;
  margin-top: 8px;
`;

export const BoldText = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const Image = styled.Image`
  height: 288px;
  object-fit: contain;

  margin: 48px 0 32px 0;
`;