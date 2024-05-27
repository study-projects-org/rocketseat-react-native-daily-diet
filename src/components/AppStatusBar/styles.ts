import { ViewStatus } from "@utils/view-status";
import { StatusBar } from "react-native";
import styled from "styled-components/native";

type Props = {
  type: ViewStatus;
}

export const Content = styled(StatusBar).attrs<Props>(({ theme, type }) => {
  return {
    barStyle: 'dark-content',
    backgroundColor: type === 'POSITIVE' ? theme.COLORS.GREEN_LIGHT : type === 'NEGATIVE' ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_300,
    translucent: true
  }
})``;