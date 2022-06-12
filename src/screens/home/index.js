import { getUserProfileHandle } from "actions/auth";
import { createInvoicesHandler } from "actions/listInvoices";
import CustomButton from "components/CustomButton";
import CustomInput from "components/CustomInput";
import { FONT_FAMILY, FONT_SIZE, LINE_HEIGHT } from "constants/appFonts";
import { CUSTOM_COLOR } from "constants/colors";
import { SIZE } from "constants/size";
import moment from "moment";
import React, { useCallback, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useFormInput } from "src/hooks/useFormInput";

const HomeScreen = props => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getUserProfileHandle({ success: () => {}, failure: () => {} }));
  }, [dispatch]);

  const refInput = useFormInput("");
  const descriptionInput = useFormInput("");
  const amountInput = useFormInput("");
  const dateInput = useFormInput(moment().format("DD/MM/YYYY"));

  const onCreate = useCallback(() => {
    dispatch(
      createInvoicesHandler({
        params: {
          listOfInvoices: [
            {
              bankAccount: {
                bankId: "",
                sortCode: "09-01-01",
                accountNumber: "12345678",
                accountName: "John Terry",
              },
              customer: {
                firstName: "Nguyen",
                lastName: "Dung 2",
                contact: {
                  email: "nguyendung2@101digital.io",
                  mobileNumber: "+6597594971",
                },
                addresses: [
                  {
                    premise: "CT11",
                    countryCode: "VN",
                    postcode: "1000",
                    county: "hoangmai",
                    city: "hanoi",
                  },
                ],
              },
              documents: [
                {
                  documentId: "96ea7d60-89ed-4c3b-811c-d2c61f5feab2",
                  documentName: "Bill",
                  documentUrl: "http://url.com/#123",
                },
              ],
              invoiceReference: "#123456",
              invoiceNumber: "INV123456701",
              currency: "GBP",
              invoiceDate: dateInput?.value,
              dueDate: "2021-06-04",
              description: descriptionInput?.value,
              customFields: [
                {
                  key: "invoiceCustomField",
                  value: "value",
                },
              ],
              extensions: [
                {
                  addDeduct: "ADD",
                  value: 10,
                  type: "PERCENTAGE",
                  name: "tax",
                },
                {
                  addDeduct: "DEDUCT",
                  type: "FIXED_VALUE",
                  value: 10.0,
                  name: "discount",
                },
              ],
              items: [
                {
                  itemReference: refInput?.value,
                  description: descriptionInput?.value,
                  quantity: amountInput?.value,
                  rate: 1000,
                  itemName: "Honda Motor",
                  itemUOM: "KG",
                  customFields: [
                    {
                      key: "taxiationAndDiscounts_Name",
                      value: "VAT",
                    },
                  ],
                  extensions: [
                    {
                      addDeduct: "ADD",
                      value: 10,
                      type: "FIXED_VALUE",
                      name: "tax",
                    },
                    {
                      addDeduct: "DEDUCT",
                      value: 10,
                      type: "PERCENTAGE",
                      name: "tax",
                    },
                  ],
                },
              ],
            },
          ],
          operation_Mode: "SYNC",
          org_token: userInfo?.data?.memberships?.[0]?.token,
        },
      })
    );
  }, [
    amountInput?.value,
    dateInput?.value,
    descriptionInput?.value,
    dispatch,
    refInput?.value,
    userInfo?.data?.memberships,
  ]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.headerContainer}>
        <Text style={styles.screenTitle}>{"Create Invoice"}</Text>
      </SafeAreaView>
      <CustomInput
        multiple
        label={"Reference"}
        placeholder={"Reference"}
        style={styles.inputContainer}
        customInputContainerStyle={styles.questionInput}
        {...refInput}
      />
      <CustomInput
        multiple
        label={"Date"}
        placeholder={"Date"}
        style={styles.inputContainer}
        customInputContainerStyle={styles.questionInput}
        editable={false}
        {...dateInput}
      />
      <CustomInput
        multiple
        label={"Description"}
        placeholder={"Description"}
        style={styles.inputContainer}
        customInputContainerStyle={styles.questionInput}
        {...descriptionInput}
      />
      <CustomInput
        multiple
        label={"Amount"}
        placeholder={"Amount"}
        style={styles.inputContainer}
        customInputContainerStyle={styles.questionInput}
        {...amountInput}
      />
      <CustomButton
        style={styles.containerButton}
        title={"Create Invoices"}
        onPress={onCreate}
        titleStyle={styles.createButton}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.White,
  },
  headerContainer: {
    paddingHorizontal: SIZE.Size16,
    justifyContent: "space-between",
    backgroundColor: CUSTOM_COLOR.white,
  },
  screenTitle: {
    fontSize: FONT_SIZE.Size36,
    lineHeight: LINE_HEIGHT.Size36,
    fontFamily: FONT_FAMILY.Medium,
    color: CUSTOM_COLOR.Green06,
    marginHorizontal: SIZE.Size16,
  },
  createButton: {
    fontSize: 20,
    padding: 10,
  },
  containerButton: {
    marginTop: 30,
  },
});
