import { css, styled } from "styled-components/native";

export type StatisticCardTypeStyleProps = 'NEUTRAL' | 'POSITIVE' | 'NEGATIVE';

type StatisticCardTypeProps = {
  type: StatisticCardTypeStyleProps;
  isFlex?: boolean;
}

export const Container = styled.View<StatisticCardTypeProps>`
  padding: 24px 16px;
  border-radius: 8px;

  justify-content: center;
  align-items: center;
  gap: 12px;

  background-color: ${({ type, theme }) => {
    if (type === 'POSITIVE') return theme.COLORS.GREEN_LIGHT;
    if (type === 'NEGATIVE') return theme.COLORS.RED_LIGHT;
    return theme.COLORS.GRAY_200;
  }};

  ${({ isFlex }) => isFlex && 'flex: 1;'}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_700};
  `};

  text-align: center;
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_600};
  `};

  text-align: center;
`;