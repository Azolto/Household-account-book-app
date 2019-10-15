import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class MemoList extends React.Component {
  render() {
    return (
      <View style={styles.memoList}>
        {/* 日付 支出計 */}
        <View style={styles.memoHeader}>
          {/* 日付(曜日) */}
          <View style={styles.memoHeaderLeft}>
            <Text>14日(月)</Text>
          </View>

          {/* 支出計 */}
          <View style={styles.memoHeaderRight}>
            <Text>￥5000</Text>
          </View>
        </View>

        <View style={styles.memoListitem}>
          <View style={styles.memoListItemLeft}>
            <Text style={styles.memoTitle}>今日買ったもの</Text>
          </View>
          <View style={styles.memoListitemRight}>
            <Text style={styles.memoDate}>￥1000</Text>
          </View>
        </View>

        <View style={styles.memoListitem}>
          <View style={styles.memoListItemLeft}>
            <Text style={styles.memoTitle}>今日買ったもの</Text>
          </View>
          <View style={styles.memoListitemRight}>
            <Text style={styles.memoDate}>￥1000</Text>
          </View>
        </View>

        <View style={styles.memoListitem}>
          <View style={styles.memoListItemLeft}>
            <Text style={styles.memoTitle}>今日買ったもの</Text>
          </View>
          <View style={styles.memoListitemRight}>
            <Text style={styles.memoDate}>￥1000</Text>
          </View>
        </View>

        <View style={styles.memoListitem}>
          <View style={styles.memoListItemLeft}>
            <Text style={styles.memoTitle}>今日買ったもの</Text>
          </View>
          <View style={styles.memoListitemRight}>
            <Text style={styles.memoDate}>￥1000</Text>
          </View>
        </View>

        <View style={styles.memoListitem}>
          <View style={styles.memoListItemLeft}>
            <Text style={styles.memoTitle}>今日買ったもの</Text>
          </View>
          <View style={styles.memoListitemRight}>
            <Text style={styles.memoDate}>￥1000</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  memoList: {
    flex: 1,
    width: '100%',
    // alignItems: 'center',
  },

  memoHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
    backgroundColor: '#fff',
  },

  memoHeaderLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 15,
  },

  memoHeaderRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15,
  },

  memoListitem: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
  },

  memoListItemLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 15,
  },

  memoListitemRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15,
  },
});

export default MemoList;
