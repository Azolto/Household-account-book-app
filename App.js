import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
} from 'react-native';

import Appbar from './src/components/Appbar';
import MemoList from './src/components/MemoList';
import CircleButton from './src/elements/CircleButton';


export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />

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

      <MemoList />
      <CircleButton>+</CircleButton>
      
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

});
