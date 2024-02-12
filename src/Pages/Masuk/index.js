import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';

export default class Masuk extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{backgroundColor: '#19232b', flex: 1}}>
        <View style={styles.container}>
          <Image
            source={{uri: 'http://mutawif.co.id/images/logotag.png'}}
            style={styles.logo}
          />

          <View style={{marginTop: 80}}>
            <TouchableOpacity
              style={styles.roundButton1}
              onPress={() => this.props.navigation.navigate('FrmLogin')}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                Masuk
              </Text>
            </TouchableOpacity>
            <Text style={{color: 'white', textAlign: 'center', marginTop: 40}}>
              Sudah memiliki akun?
            </Text>
            <TouchableOpacity
              style={styles.roundButton1}
              onPress={() => this.props.navigation.navigate('ChooseJob')}>
              <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white'}}>
                Daftar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{height: 40}}>
          {/* <Text style={styles.bottext}>
               
                </Text> */}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 250,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 20,
    color: '#eaeaea',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    // backgroundColor: '#19232b',
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcome: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    color: '#c19737',
    fontSize: 24,
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },

  logo: {
    width: 250,
    height: 50,
    marginTop: 5,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },

  roundButton1: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'orange',
  },

  bottext: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  bottext2: {
    fontSize: 14,
    textDecorationLine: 'underline',
    marginTop: 10,
    textAlign: 'center',
  },
});
