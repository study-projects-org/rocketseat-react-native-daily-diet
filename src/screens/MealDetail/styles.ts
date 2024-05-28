import { ViewStatus } from "@utils/view-status";
import { SafeAreaView } from "react-native-safe-area-context";
import styled, { css } from "styled-components/native";

type StatusStyleType = Omit<ViewStatus, 'DEFAULT'>;

export type BadgeStyleTypeProps = {
  type: StatusStyleType;
};

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  padding: 24px;
  gap: 24px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  border-radius: 20px 20px 0 0;

  margin-top: -20px;
`;

export const Group = styled.View`
  gap: 8px;
`;

export const Title = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const Description = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_600};
  `};
`;

export const BadgeCircle = styled.View<BadgeStyleTypeProps>`
  ${({theme, type}) => css`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${type === 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  `};
`;

export const BadgeText = styled.Text`
  ${({theme}) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const Badge = styled.View`
  ${({theme}) => css`
    background-color: ${theme.COLORS.GRAY_200};
  `};

  border-radius: 1000px;
  padding: 8px 16px;
  gap: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  align-self: flex-start;
`;

export const ButtonGroup = styled.View`
  gap: 8px;
  align-items: stretch;

  position: absolute;
  bottom: 24px;
  left: 24px;
  right: 24px;
`;