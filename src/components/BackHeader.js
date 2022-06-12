import { ICBack } from 'assets/icons';
import { FONT_FAMILY_NOTO, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';
import { CUSTOM_COLOR } from 'constants/colors';
import { Shadow } from 'constants/customStyles';
import { HEADER_HEIGHT, SPACING, STATUS_BAR_HEIGHT } from 'constants/size';
import { hexToRgbA } from 'helpers/colorTransform';
import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const BackHeader = props => {
  const { route, navigation, options } = props;

  const title = options?.title ?? route?.name;

  const leftComponent =
    options.leftComponent !== undefined ? options.leftComponent : undefined;

  const leftRouteName =
    options.leftRouteName !== undefined ? options.leftRouteName : undefined;

  const { hasShadow, hasBorder } = options;

  const containerStyle = [
    styles.container,
    hasShadow ? styles.shadow : {},
    hasBorder
      ? {
          borderBottomColor: hexToRgbA(CUSTOM_COLOR.White, 0.1),
          borderBottomWidth: 1,
        }
      : {},
    options?.headerBackground
      ? { backgroundColor: options?.headerBackground }
      : {},
    options?.headerStyle ? options?.headerStyle : {},
    Platform.OS === 'ios' ? {} : { paddingTop: SPACING.Normal },
  ];

  return (
    <View style={containerStyle}>
      <View style={[styles.wrapper]}>
        {!options.hideLeftHeader ? (
          <View style={styles.leftButton}>
            <View style={styles.rowContainer}>
              <TouchableOpacity
                onPress={
                  options.backAction
                    ? options.backAction
                    : leftRouteName
                    ? () => navigation.navigate(leftRouteName)
                    : navigation.goBack
                }>
                {leftComponent ? leftComponent : <ICBack />}
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View />
        )}
        <Text style={[styles.title, options?.titleStyle]}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    height: HEADER_HEIGHT,
    backgroundColor: CUSTOM_COLOR.Navy08,
  },
  shadow: {
    ...Shadow,
  },
  wrapper: {
    width: '100%',
    marginTop: STATUS_BAR_HEIGHT,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftButton: {
    zIndex: 1,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: SPACING.Medium,
  },
  right: {
    right: SPACING.Medium,
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
  },
  title: {
    alignSelf: 'center',
    textAlign: 'center',
    color: CUSTOM_COLOR.White,
    fontFamily: FONT_FAMILY_NOTO.Bold,
    fontSize: FONT_SIZE.Size16,
    lineHeight: LINE_HEIGHT.Size16,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  left: {
    marginLeft: SPACING.Normal,
  },
});

export default BackHeader;
