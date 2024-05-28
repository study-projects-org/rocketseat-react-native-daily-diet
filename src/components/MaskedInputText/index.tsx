import React, { useState } from "react";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";
import { Container, Input } from "./style";
import { Label } from "@components/Label";
import { maskDate, maskTime } from "@utils/masks";

type Props = TextInputProps & {
  label: string;
  mask: 'date' | 'time';
  isFlex?: boolean;
  maskedTextChange: (value: string) => void;
}

export function MaskedInputText({ label, mask, isFlex, maskedTextChange, ...rest }: Props) {
  const { COLORS } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  function handleChange(text: string) {
    if (mask === 'date') {
      const value = maskDate(text)
      maskedTextChange(value)
    }
    if (mask === 'time') {
      const value = maskTime(text)
      maskedTextChange(value)
    }
  }

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
        onChangeText={handleChange}
      />
    </Container>
  );
}