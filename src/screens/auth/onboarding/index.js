import { CUSTOM_COLOR } from "constants/colors";
import SCREENS_NAME from "constants/screens";
import { DEVICE_HEIGHT, SIZE } from "constants/size";
import React, { useCallback, useEffect } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { scale } from "utils/responsive";
import TextRow from "../components/TextRow";

const OnboardingScreen = props => {
  const { navigation } = props;

  const onTransitLogin = useCallback(() => {
    setTimeout(() => {
      navigation?.navigate(SCREENS_NAME.LOGIN_SCREEN);
    }, 800);
  }, [navigation]);

  useEffect(() => {
    onTransitLogin();
  }, [onTransitLogin]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: SIZE.Size16 }}>
        <TextRow uppercase value={`SimpleInvoice`} />

        <TextRow style={styles.appName} value={"SimpleInvoice"} uppercase />
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.White,
    flex: 1,
  },
  appName: {
    color: CUSTOM_COLOR.Pink01,
    marginTop: scale(56 * 4 + 24),
  },
});
