import React, { useState } from "react";
import { useTheme } from "styled-components/native";
import { Container, Input } from "./style";
import { Label } from "@components/Label";
import { MaskedTextInputProps } from "react-native-mask-text";

type Props = MaskedTextInputProps & {
  label: string;
  isFlex?: boolean;
}

export function MaskedInputText({ label, isFlex, ...rest }: Props) {
  const { COLORS } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container
      isFlex={isFlex}
    >
      <Label text={label} />

      <Input
        {...rest}
        selectionColor={COLORS.GRAY_500}
        cursorColor={COLORS.GRAY_500}
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </Container>
  );
}