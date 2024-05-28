import { BackButton } from "@components/BackButton";

import { Container } from "./styles";
import { ViewStatus } from "@utils/view-status";
import { AppStatusBar } from "@components/AppStatusBar";

type Props = {
  type?: ViewStatus;
  children?: React.ReactNode;
}

export function Header({ type = 'DEFAULT', children }: Props) {
  return (
    <Container type={type}>
      <AppStatusBar type={type}/>
      <BackButton
        type={type}
        onPress={() => {
          console.log('back');
        }}
      />

      {children}

    </Container>
  );
}