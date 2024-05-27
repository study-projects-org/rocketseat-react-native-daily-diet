import React, { useState } from "react";
import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Input} from "./style";
import { Label } from "@components/Label";

type Props = TextInputProps & {
  label: string;
  isFlex?: boolean;
  inputRef?: React.RefObject<TextInput>;
}

export function InputText({ label, isFlex, inputRef, ...rest }: Props) {
  const { COLORS } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container
      isFlex={isFlex}
    >
      <Label text={label} />

      <Input
        {...rest}
        ref={inputRef}
        selectionColor={COLORS.GRAY_500}
        cursorColor={COLORS.GRAY_500}
        isFocused={isFocused}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </Container>
  );
}