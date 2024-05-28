
import { TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled, { css } from 'styled-components/native';
import MaterialIcon from '@expo/vector-icons/MaterialIcons';

export type StatisticStyleProps = 'POSITIVE' | 'NEGATIVE';

type StatisticTypeProps = {
  type: StatisticStyleProps;
}

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 32px;
`;

export const Logo = styled.Image`
  width: 82px;
  height: 37px;
`;

// 50% of width and height - O React Native não suporta porcentagem para border-radius
export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  object-fit: cover;

  border-radius: 20px; 

  border: 2px solid ${({ theme }) => theme.COLORS.GRAY_600};
`;

export const StatisticInfoContainer = styled(View) <StatisticTypeProps>`

  ${({ type, theme }) => css`
    background-color: ${type === 'POSITIVE' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  `};
  
  position: relative;

  border-radius: 8px;

  margin-bottom: 40px
`;

export const DetailButton = styled(TouchableOpacity)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 8px;
`;

export const Icon = styled(MaterialIcon).attrs<StatisticTypeProps>(({ theme, type }) => ({
  size: 24,
  color: type === 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))
``;

export const LabelButtonGroup = styled.View`
  width: 100%;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 12px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_700};
  `};
`;

export const SectionHeader = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_700};
  `};

  margin-top: 32px;
`;





