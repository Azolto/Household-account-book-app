import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class Appbar extends React.Component {
  render() {
    return (
      <View style={styles.appbar}>
        {/* 年月 */}
        <View style={styles.appbarLeft}>
          <Text style={styles.appbarLeftText}>2019年10月</Text>
        </View>
        <View style={styles.appbarRight}>
          <Text style={styles.appbarRightText}>メニュー</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
    zIndex: 30,
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
});

export default Appbar;
