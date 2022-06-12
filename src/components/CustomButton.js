import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CUSTOM_COLOR } from 'constants/colors';
import { scale } from 'utils/responsive';
import { BORDER_RADIUS, SIZE } from 'constants/size';
import { FONT_FAMILY_NOTO, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';

const CustomButton = props => {
  const {
    style,
    onPress = () => {},
    title,
    leftComponent,
    rightComponent,
    primary = false,
    titleStyle,
    disabled = false,
  } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      style={[
        styles.container,
        style,
        primary && { backgroundColor: CUSTOM_COLOR.Yellow07 },
        disabled && { backgroundColor: CUSTOM_COLOR.Navy07 },
      ]}
      onPress={typeof onPress === 'function' ? onPress : () => {}}>
      {React.isValidElement(leftComponent) ? (
        leftComponent
      ) : (
        <View style={styles.blank} />
      )}
      <Text
        style={[
          styles.title,
          titleStyle,
          disabled && { color: CUSTOM_COLOR.Navy05 },
        ]}>
        {title}
      </Text>
      {React.isValidElement(rightComponent) ? (
        rightComponent
      ) : (
        <View style={styles.blank} />
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.White,
    height: scale(52),
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    paddingHorizontal: SIZE.Size8,
    paddingVertical: SIZE.Size6,
  },
  title: {
    fontFamily: FONT_FAMILY_NOTO.Regular,
    color: CUSTOM_COLOR.Gray33,
    fontSize: FONT_SIZE.Size14,
    lineHeight: LINE_HEIGHT.Size14,
    flex: 1,
    textAlign: 'center',
  },
  blank: {
    width: scale(24),
  },
});
