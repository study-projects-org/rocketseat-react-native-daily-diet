import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import MaterialIcon from '@expo/vector-icons/MaterialIcons';

export type BackButtonTypeStyleProps = 'DEFAULT' | 'POSITIVE' | 'NEGATIVE';

type BackButtonTypeProps = {
  type: BackButtonTypeStyleProps;
}

export const Container = styled(TouchableOpacity)`
  padding: 8px;
  position: absolute;
  left: 16px;
  top: 16px;
`; 

export const Icon = styled(MaterialIcon).attrs<BackButtonTypeProps>(({ theme, type }) => ({
  size: 24,
  color: type === 'DEFAULT' ? theme.COLORS.GRAY_700 : type === 'POSITIVE' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK
}))
``;