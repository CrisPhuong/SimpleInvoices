import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from 'constants/appFonts';
import { CUSTOM_COLOR } from 'constants/colors';
import { Shadow } from 'constants/customStyles';
import {
  BORDER_RADIUS,
  BOTTOM_TAB_HEIGHT,
  SIZE,
  SPACING,
} from 'constants/size';
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { scale } from 'utils/responsive';

export const tabHeight = BOTTOM_TAB_HEIGHT;

const { width } = Dimensions.get('window');

const StaticTabBar = props => {
  const { state, descriptors, navigation } = props;

  const tabWidth = width / state?.routes?.length;
  return (
    <View style={styles.container}>
      {state?.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel;

        const key = options.key;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <React.Fragment key={key}>
            <TouchableOpacity
              accessibilityRole='button'
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[
                styles.tab,
                {
                  left: index * tabWidth,
                  width: tabWidth,
                },
              ]}
              activeOpacity={1}>
              <View
                style={[
                  styles.rowContainer,
                  isFocused ? styles.activeTab : styles.inactiveTab,
                ]}>
                <Text
                  style={{
                    ...styles.tabTitle,
                    color: isFocused
                      ? CUSTOM_COLOR.Green06
                      : CUSTOM_COLOR.Navy04,
                  }}>
                  {label}
                </Text>
              </View>
            </TouchableOpacity>
          </React.Fragment>
        );
      })}
    </View>
  );
};

export default React.memo(StaticTabBar);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    height: tabHeight,
    position: 'absolute',
    paddingBottom: SPACING.Small,
  },
  inactiveTab: {
    backgroundColor: CUSTOM_COLOR.Transparent,
    paddingHorizontal: SIZE.Size14,
    paddingVertical: SIZE.Size8,
    borderRadius: BORDER_RADIUS,
    minWidth: scale(80),
    minHeight: scale(40),
  },
  activeTab: {
    backgroundColor: CUSTOM_COLOR.Navy07,
    paddingHorizontal: SIZE.Size14,
    paddingVertical: SIZE.Size8,
    borderRadius: BORDER_RADIUS,
    ...Shadow,
    minWidth: scale(80),
    minHeight: scale(40),
  },
  iconContainer: {
    height: 40,
    width: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leadWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
    paddingBottom: SPACING.Small,
  },
  leadBtn: {
    zIndex: 8,
    bottom: SPACING.XNormal,
    alignSelf: 'center',
    borderRadius: scale(30),
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    // paddingTop: 5,
  },
  tabTitle: {
    textAlign: 'center',
    fontSize: FONT_SIZE.Size20,
    color: CUSTOM_COLOR.Blue01,
    lineHeight: LINE_HEIGHT.Size20,
    fontFamily: FONT_FAMILY.SemiBold,
  },
  ios: {
    height: BOTTOM_TAB_HEIGHT + scale(25),
  },
  android: {
    height: BOTTOM_TAB_HEIGHT + scale(25),
  },
  focusBar: {
    backgroundColor: CUSTOM_COLOR.ScienceBlue,
    height: scale(4),
    width: scale(35),
    position: 'absolute',
    borderBottomLeftRadius: scale(4),
    borderBottomRightRadius: scale(4),
    top: 0,
  },
  notiIcon: {
    width: scale(15),
    height: scale(15),
    borderRadius: 50,
    backgroundColor: 'red',
    position: 'absolute',
    top: scale(10),
    right: scale(32),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
