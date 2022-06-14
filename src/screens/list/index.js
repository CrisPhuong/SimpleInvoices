import { getUserProfileHandle } from "actions/auth";
import { getListInvoicesHandler } from "actions/listInvoices";
import CustomInput from "components/CustomInput";
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from "constants/appFonts";
import { CUSTOM_COLOR } from "constants/colors";
import { SIZE } from "constants/size";
import moment from "moment";
import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
} from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  RefreshControl,
  View,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useFormInput } from "src/hooks/useFormInput";
import InvoicesItem from "./components/InvoicesItem";

const ListInvoices = props => {
  const { navigation } = props;

  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.auth);
  const [dataListInvoices, setDataListInvoices] = useState([]);
  const [totalRecords, setTotalRecords] = useState(null);
  const [pageNumber, setPageNumber] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const refInput = useRef({ timeout: 0 });
  const searchInput = useFormInput("");
  const [dataSearch, setDataSearch] = useState([]);
  useLayoutEffect(() => {
    dispatch(
      getUserProfileHandle({
        success: () => {},
        failure: () => {},
      })
    );
  }, []);

  useEffect(() => {
    if (!!userInfo?.data?.memberships?.[0]?.token) {
      getListDataInvoices();
    }
  }, [userInfo?.data?.memberships?.[0]?.token]);

  const getListDataInvoices = React.useCallback(
    (pageNum = 1, pageSize = 10) => {
      dispatch(
        getListInvoicesHandler({
          params: {
            pageNum: pageNum,
            pageSize: pageSize,
            dateType: "INVOICE_DATE",
            sortBy: "CREATED_DATE",
            ordering: "ASCENDING",
            org_token: userInfo?.data?.memberships?.[0]?.token,
          },
          success: res => {
            setDataListInvoices(res?.data);
            setTotalRecords(res?.paging?.totalRecords);
            setPageNumber(res?.paging?.pageNumber);
            setIsLoading(false);
          },
          failure: () => {
            setIsLoading(false);
            Alert.alert("An error has occurred");
          },
        })
      );
    },
    [dispatch, userInfo?.data?.memberships?.[0]?.token]
  );

  const renderItem = ({ item }) => {
    return <InvoicesItem data={item} navigation={navigation} />;
  };

  const handelLoadMore = useCallback(() => {
    if (
      !isLoading &&
      dataListInvoices &&
      dataListInvoices?.length < totalRecords
    ) {
      dispatch(
        getListInvoicesHandler({
          params: {
            pageNum: pageNumber + 1,
            pageSize: 10,
            dateType: "INVOICE_DATE",
            sortBy: "CREATED_DATE",
            ordering: "ASCENDING",
            org_token: userInfo?.data?.memberships?.[0]?.token,
          },
          success: res => {
            setDataListInvoices(dataListInvoices?.concat(res?.data));
            setTotalRecords(res?.paging?.totalRecords);
            setPageNumber(res?.paging?.pageNumber);
          },
          failure: () => {
            Alert.alert("An error has occurred");
          },
        })
      );
    }
  }, [pageNumber, isLoading, dataListInvoices, totalRecords]);

  const renderEmptyComponent = useCallback(() => {
    return (
      <View style={styles.containerEmptyComponent}>
        {isLoading ? (
          <ActivityIndicator
            style={{ paddingTop: 100 }}
            size="large"
            color="#0000ff"
          />
        ) : (
          <Text>Empty Data</Text>
        )}
      </View>
    );
  }, [isLoading]);

  const handleSearch = useCallback(
    text => {
      clearTimeout(refInput.current.timeout);
      searchInput.onChangeText(text);
      refInput.current.timeout = setTimeout(() => {
        handleSearchData(text);
      }, 1000);
    },
    [refInput, searchInput]
  );

  const handleSearchData = useCallback(
    text => {
      setDataSearch(
        dataListInvoices.filter(ele => ele?.description.includes(text))
      );
    },
    [dataListInvoices]
  );

  const handelSortByAmount = useCallback(() => {
    if (!!searchInput?.value) {
      const dataSortSearch = dataSearch.sort((a, b) => {
        return a?.totalAmount - b?.totalAmount;
      });
      setDataSearch([...dataSortSearch]);
    } else {
      const arraySort = dataListInvoices.sort((a, b) => {
        return a?.totalAmount - b?.totalAmount;
      });
      setDataListInvoices([...arraySort]);
    }
  }, [dataListInvoices, searchInput?.value, dataSearch]);

  const handelSortByCreateAt = useCallback(() => {
    if (!!searchInput?.value) {
      const dataSortSearch = dataSearch.sort((a, b) => {
        return moment(a?.createdAt) - moment(b?.createdAt);
      });
      setDataSearch([...dataSortSearch]);
    } else {
      const arraySort = dataListInvoices.sort((a, b) => {
        return moment(a?.createdAt) - moment(b?.createdAt);
      });
      setDataListInvoices([...arraySort]);
    }
  }, [dataListInvoices, searchInput?.value, dataSearch]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.screenName}>List Invoices</Text>
      <TouchableOpacity style={styles.buttonSort} onPress={handelSortByAmount}>
        <Text>Sort By Total Amount</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonSortByCreateAt}
        onPress={handelSortByCreateAt}
      >
        <Text>Sort By CreateAt</Text>
      </TouchableOpacity>

      <CustomInput
        ref={refInput}
        multiple
        placeholder={"Search With Description"}
        style={styles.inputContainer}
        customInputContainerStyle={styles.questionInput}
        {...searchInput}
        onChangeText={handleSearch}
      />
      <FlatList
        keyExtractor={(item, index) => `ListInvoices${item?.invoiceId}`}
        data={!!searchInput?.value ? dataSearch : dataListInvoices}
        renderItem={renderItem}
        onEndReachedThreshold={0.4}
        onEndReached={() => handelLoadMore()}
        ListEmptyComponent={renderEmptyComponent}
        removeClippedSubviews={false}
        windowSize={50}
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

export default ListInvoices;

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
  containerEmptyComponent: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 100,
  },
  inputContainer: {},
  questionInput: {
    height: 30,
  },
  buttonSort: {
    backgroundColor: CUSTOM_COLOR.Yellow07,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    borderRadius: 30,
  },
  buttonSortByCreateAt: {
    marginTop: 15,
    backgroundColor: CUSTOM_COLOR.Blue01,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    height: 30,
    borderRadius: 30,
  },
});
