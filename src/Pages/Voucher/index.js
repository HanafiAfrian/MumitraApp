import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class Voucher extends Component {
  render() {
    return (
      <View>
        <Text style={styles.textutama}>
          {' '}
          Voucher Belum tersedia saat ini, silahkan kembali di lain waktu{' '}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textutama: {
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: '50%',
  },
});
