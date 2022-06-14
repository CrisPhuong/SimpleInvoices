import { ICPlus } from "assets/icons";
import { FONT_FAMILY_NOTO } from "constants/appFonts";
import { CUSTOM_COLOR } from "constants/colors";
import { SIZE } from "constants/size";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { scale } from "utils/responsive";

const InvoicesItem = props => {
  const { data, navigation } = props;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailInvoices", data)}
      style={styles.container}
    >
      <Text>{data?.description}</Text>
      <Text>TotalAmount:{data?.totalAmount}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(InvoicesItem);

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.Green06,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: SIZE.Size16,
    borderRadius: SIZE.Size24,
    marginVertical: scale(10),
  },
  label: {
    color: CUSTOM_COLOR.Yellow07,
    fontFamily: FONT_FAMILY_NOTO.Bold,
    marginLeft: SIZE.Size4,
  },
});
