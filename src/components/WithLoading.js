import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getLoadingSelector } from 'selectors/loading';

function WithLoading(WrappedComponent, actionTypes) {
  function HOC({ isLoading, ...props }) {
    return (
      <View style={styles.container}>
        <WrappedComponent {...props} />
        {isLoading && <ActivityIndicator />}
      </View>
    );
  }
  const mapStateToProps = state => ({
    isLoading: getLoadingSelector(state, actionTypes),
  });
  return connect(mapStateToProps, null)(HOC);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default WithLoading;
