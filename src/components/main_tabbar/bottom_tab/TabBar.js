import { CUSTOM_COLOR } from 'constants/colors';
import { SIZE } from 'constants/size';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import StaticTabBar, { tabHeight as height } from './StaticTabBar';

const { width } = Dimensions.get('window');

const tabs = [{ name: 'rank' }, { name: 'quiz' }, { name: 'my' }];

const TabBar = props => {
  return (
    <>
      <View {...{ width, height }}>
        <View
          style={[
            StyleSheet.absoluteFill,
            {
              elevation: 5,
              backgroundColor: CUSTOM_COLOR.Navy06,
              paddingTop: SIZE.Size16,
            },
          ]}>
          <StaticTabBar {...props} />
        </View>
      </View>
    </>
  );
};

export default React.memo(TabBar);
