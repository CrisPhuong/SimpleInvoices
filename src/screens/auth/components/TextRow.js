import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { CUSTOM_COLOR } from 'constants/colors';
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';
import { BORDER_RADIUS, SIZE } from 'constants/size';
import { scale } from 'utils/responsive';

const TextRow = ({ value, border = [], style, uppercase = false }) => {
  const customStyles = {
    ...(border?.includes('top-left') && {
      borderTopLeftRadius: BORDER_RADIUS,
    }),
    ...(border?.includes('top-right') && {
      borderTopRightRadius: BORDER_RADIUS,
    }),
    ...(border?.includes('bottom-left') && {
      borderBottomLeftRadius: BORDER_RADIUS,
    }),
    ...(border?.includes('bottom-right') && {
      borderBottomRightRadius: BORDER_RADIUS,
    }),
    ...(border?.includes('all') && {
      borderRadius: BORDER_RADIUS,
    }),
  };

  return (
    <>
      <View style={styles.rowContainer}>
        <TextInput
          style={[
            styles.header,
            customStyles,
            style,
            !!value
              ? {
                  padding: SIZE.Size16,
                }
              : {
                  width: SIZE.Size10,
                },
          ]}
          value={uppercase ? value?.toUpperCase() : value}
          editable={false}
        />
      </View>
    </>
  );
};

export default TextRow;

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
  },
  header: {
    color: CUSTOM_COLOR.Green06,
    fontSize: FONT_SIZE.Size36,
    lineHeight: LINE_HEIGHT.Size36,
    fontFamily: FONT_FAMILY.Medium,
    backgroundColor: CUSTOM_COLOR.Navy06,
    minHeight: scale(56),
  },
});
