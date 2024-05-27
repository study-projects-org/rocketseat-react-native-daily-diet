import { BackButton } from "@components/BackButton";

import { Container } from "./styles";
import { ViewStatus } from "@utils/view-status";

type Props = {
  type?: ViewStatus;
  children?: React.ReactNode;
}

export function NavBar({ type = 'NEUTRAL', children }: Props) {
  return (
    <Container>
      <BackButton
        type={type}
      />

      {children}

    </Container>
  );
}