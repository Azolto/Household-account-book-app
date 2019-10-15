import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* タイトル */}
      <View style={styles.appbar}>
        {/* 年月 */}
        <View style={styles.appbarLeft}>
          <Text style={styles.appbarLeftText}>2019年10月</Text>
        </View>
        <View style={styles.appbarRight}>
          <Text style={styles.appbarRightText}>メニュー</Text>
        </View>
      </View>
      
      {/* 収入＆支出計 */}
      <View style={styles.incomeAndOutgo}>
        {/* 収入計 */}
        <View style={styles.incomeContainer}>
          <View>
            <Text>収入</Text>
          </View>
          <View>
            <Text>￥0</Text>
          </View>
        </View>

        {/* 支出計 */}
        <View style={styles.outgoContainer}>
          <View>
            <Text>支出</Text>
          </View>
          <View>
            <Text>￥0</Text>
          </View>
        </View>
      </View>
      
      {/* 家計簿リスト */}
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
        {/* ボタン */}
        <View style={styles.memoAddButton}>
          <Text style={styles.memoAddButtonTitle}>
            +
          </Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFDF6',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 70,
  },

  memoAddButton: {
    position: 'absolute',
    bottom: 32,
    right: 32,
    width: 48,
    height: 48,
    backgroundColor: '#E3607F',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },

  memoAddButtonTitle: {
    fontSize: 32,
    lineHeight: 32,
    color: '#fff',
  },

  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 70,
    paddingTop: 25,
    backgroundColor: '#20b2aa',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  appbarLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 15,
    color: '#fff',
  },

  appbarLeftText: {
    color: '#fff',
  },

  appbarRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    paddingRight: 15,
  },

  appbarRightText: {
    color: '#fff',
  },

  incomeAndOutgo: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ddd',
    // justifyContent: 'space-around',
  },

  incomeContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },

  outgoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },

  memoList: {
    flex: 1,
    width: '100%',
    // backgroundColor: '#fff',
    // alignSelf: 'center',
    // justifyContent: 'flex-start',
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
