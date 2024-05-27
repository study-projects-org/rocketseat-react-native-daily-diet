import { ViewStatus } from "@utils/view-status";
import { Content } from "./styles";

type Props = {
  type?: ViewStatus;
}

export function AppStatusBar({ type = 'DEFAULT' }: Props) {
  return (
    <Content
      type={type}
    />
  );
}