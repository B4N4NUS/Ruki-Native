import React from "react";
import { useState } from "react";
import { TextInput } from "react-native";

export const FancyTextInput = (props) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
      <TextInput
        {...props}
        style={[props.style, !isFocused && {opacity:0.2}]}
        onBlur={() => setIsFocused(false)}
        onFocus={() => setIsFocused(true)}
      />
    );
  };