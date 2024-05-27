import { Content } from "./styles";

type Props = {
  text: string;
}

export function Label({ text }: Props) {
  return (
    <Content>
      {text}
    </Content>
  );
}