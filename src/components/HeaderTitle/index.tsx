import { Title } from "./styles";

type Props = {
  title: string;
}

export function HeaderTitle({ title }: Props) {
  return (
    <Title>
      {title}
    </Title>
  );
}