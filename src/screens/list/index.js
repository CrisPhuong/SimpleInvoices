import { getListInvoicesHandler } from "actions/listInvoices";
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from "constants/appFonts";
import { CUSTOM_COLOR } from "constants/colors";
import { SIZE } from "constants/size";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, RefreshControl } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import InvoicesItem from "./components/InvoicesItem";

const QuizScreen = props => {
  const { navigation } = props;

  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.auth);
  const [dataListInvoices, setDataListInvoices] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getListDataInvoices();
    });

    return unsubscribe;
  }, [getListDataInvoices, navigation]);

  const getListDataInvoices = React.useCallback(() => {
    dispatch(
      getListInvoicesHandler({
        params: {
          pageNum: 1,
          pageSize: 10,
          dateType: "INVOICE_DATE",
          sortBy: "CREATED_DATE",
          ordering: "ASCENDING",
          org_token: userInfo?.data?.memberships?.[0]?.token,
        },
        success: res => {
          setDataListInvoices(res?.data);
        },
        failure: () => {},
      })
    );
  }, [dispatch, userInfo?.data?.memberships]);

  const renderItem = ({ item }) => {
    return <InvoicesItem data={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screenName}>List Invoices</Text>
      <FlatList
        keyExtractor={(item, index) => `ListInvoices${item?.invoiceId}`}
        data={dataListInvoices}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
            removeClippedSubviews={true}
            tintColor={CUSTOM_COLOR.Red07}
            title={"Pull to refresh"}
            refreshing={false}
            onRefresh={getListDataInvoices}
          />
        }
      />
    </SafeAreaView>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
  },
  headerContainer: {
    marginHorizontal: SIZE.Size16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  screenTitle: {
    fontSize: FONT_SIZE.Size36,
    lineHeight: LINE_HEIGHT.Size36,
    fontFamily: FONT_FAMILY.Medium,
    color: CUSTOM_COLOR.Green06,
  },
  questionContainer: {
    margin: SIZE.Size16,
  },
  screenName: {
    fontSize: FONT_SIZE.Size36,
    lineHeight: LINE_HEIGHT.Size36,
    fontFamily: FONT_FAMILY.Medium,
    color: CUSTOM_COLOR.Green06,
    marginHorizontal: SIZE.Size16,
  },
});
