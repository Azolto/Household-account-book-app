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
        <View>
          <Text>
            追加
          </Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 70,
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
    flex: 1,
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
    flex: 11,
    width: '100%',
    paddingLeft: 15,
    paddingRight: 15,
  },

  memoHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },

  memoHeaderLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  memoHeaderRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  memoListitem: {
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
  },

  memoListItemLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  memoListitemRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

});
