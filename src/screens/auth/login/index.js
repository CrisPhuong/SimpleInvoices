import React, { useCallback, useEffect } from "react";
import { getUserProfileHandle, loginHandle } from "actions/auth";
import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomInput";
import { CUSTOM_COLOR } from "constants/colors";
import { SIZE } from "constants/size";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { useDispatch } from "react-redux";
import { useFormInput } from "src/hooks/useFormInput";
import { scale } from "utils/responsive";
import TextRow from "../components/TextRow";

const Login = props => {
  const {} = props;

  const dispatch = useDispatch();
  const userNameInput = useFormInput("");
  const passwordInput = useFormInput("");

  const onGoogleLogin = useCallback(() => {
    dispatch(
      loginHandle({
        params: {
          username: userNameInput?.value,
          password: passwordInput?.value,
          client_id: "oO8BMTesSg9Vl3_jAyKpbOd2fIEa",
          client_secret: "0Exp4dwqmpON_ezyhfm0o_Xkowka",
          grant_type: "password",
          scope: "openid",
        },
        success: () => {},
        failure: () => {
          alert("Login Fail");
        },
      })
    );
  }, [dispatch, userNameInput, passwordInput]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ padding: SIZE.Size16 }}>
        <TextRow
          uppercase
          border={["top-left", "top-right"]}
          value={`SimpleInvoice`}
        />
        <CustomInput
          multiple
          label={"Username"}
          placeholder={"Username"}
          style={styles.inputContainer}
          customInputContainerStyle={styles.questionInput}
          {...userNameInput}
        />
        <CustomInput
          multiple
          label={"Password"}
          placeholder={"Password"}
          style={styles.inputContainer}
          customInputContainerStyle={styles.questionInput}
          {...passwordInput}
        />
        <CustomButton
          style={styles.createButton}
          title={"Login"}
          titleStyle={styles.buttonTitle}
          onPress={() => {
            onGoogleLogin();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.White,
    flex: 1,
  },
  appName: {
    color: CUSTOM_COLOR.Pink01,
    marginTop: SIZE.Size16,
  },
  content: {
    color: CUSTOM_COLOR.Blue01,
    marginLeft: scale(70),
  },
  content1: {
    color: CUSTOM_COLOR.Yellow07,
    marginLeft: scale(70),
  },
  loginContainer: {
    height: 100,
    position: "absolute",
    bottom: 70,
    left: 0,
    right: 0,
    paddingHorizontal: SIZE.Size16,
  },
  buttonTitle: {
    fontSize: 20,
    padding: 10,
  },
  createButton: {
    marginTop: 30,
  },
});
