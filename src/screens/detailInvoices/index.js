import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React, { memo } from "react";
import moment from "moment";
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from "constants/appFonts";
import { CUSTOM_COLOR } from "constants/colors";
import { SIZE } from "constants/size";

const DetailInvoices = props => {
  const { navigation, route } = props || {};
  const { params } = route || {};
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation?.goBack()}>
          <Text style={styles.goBack}>{`<`}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Detail Item Invoices</Text>
      </View>
      <Text>Description:{params?.description}</Text>
      <Text>Total Amount: {params?.totalAmount}</Text>
      <Text>Create Date: {moment(params?.createdAt).format("DD/MM/YYYY")}</Text>
    </SafeAreaView>
  );
};

export default memo(DetailInvoices);

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingBottom: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    paddingLeft: 70,
    fontSize: FONT_SIZE.Size20,
    lineHeight: LINE_HEIGHT.Size36,
    fontFamily: FONT_FAMILY.Medium,
    color: CUSTOM_COLOR.Green06,
    marginHorizontal: SIZE.Size16,
  },
  goBack: {
    fontSize: 20,
  },
});
