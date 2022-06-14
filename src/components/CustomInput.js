import { FONT_FAMILY_NOTO, FONT_SIZE, LINE_HEIGHT } from "constants/appFonts";
import { CUSTOM_COLOR } from "constants/colors";
import { BORDER_RADIUS, SIZE } from "constants/size";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { scale } from "utils/responsive";

const CustomInput = props => {
  const { style, customInputContainerStyle, label, ...rest } = props;

  return (
    <View style={[styles.container, style]}>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, customInputContainerStyle]}
          placeholderTextColor={CUSTOM_COLOR.Navy03}
          multiline
          autoCapitalize="none"
          autoCorrect={false}
          autoComplete={false}
          {...rest}
        />
      </View>
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {},
  label: {
    color: CUSTOM_COLOR.Navy02,
    fontSize: FONT_SIZE.Body18,
    lineHeight: LINE_HEIGHT.Body18,
    fontFamily: FONT_FAMILY_NOTO.Regular,
  },
  inputContainer: {
    backgroundColor: CUSTOM_COLOR.Navy07,
    marginTop: SIZE.Size10,
    borderRadius: BORDER_RADIUS,
    borderColor: CUSTOM_COLOR.Navy05,
    borderWidth: SIZE.Size1,
    color: CUSTOM_COLOR.White,
    paddingHorizontal: SIZE.Size20,
    paddingVertical: SIZE.Size15,
    minHeight: scale(60),
  },
  input: {
    color: CUSTOM_COLOR.White,
    fontSize: FONT_SIZE.Body18,
    lineHeight: LINE_HEIGHT.Body18,
    fontFamily: FONT_FAMILY_NOTO.Regular,
  },
});
