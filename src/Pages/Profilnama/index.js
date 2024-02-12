import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default class Profilnama extends Component {
  render() {
    return (
      <View>
        <TextInput style={styles.input} placeholder="Nama" />
        <TouchableOpacity>
          <Text style={styles.roundButton1}>Simpan</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: 'white',
  },

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
