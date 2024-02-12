import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class Profilrek extends Component {
  render() {
    return (
      <View>
        <TextInput style={styles.input} placeholder="Nomor KTP" />
        <TouchableOpacity>
          <Text style={styles.roundButton1}>Simpan</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  roundButton1: {
    width: '40%',
    alignSelf: 'center',
    textAlign: 'center',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: 'orange',
  },
});
