import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import OTPInputView from '@twotalltotems/react-native-otp-input';

export default class Otp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{backgroundColor: '#eaeaea', flex: 1}}>
          {/* tengah */}
          <View style={styles.welcomebg}>
            <TouchableOpacity
              style={styles.iconbackstyle}
              onPress={() => this.props.navigation.navigate('Formlogin')}>
              <Icon name="chevron-left" size={20} color="#fff" />
            </TouchableOpacity>
            <Text style={styles.welcome}>Verification Code (OTP)</Text>
            <View></View>
          </View>

          <View style={styles.container}>
            <Text style={styles.sub1}>Masukkan Kode Verifikasi</Text>
            <Text style={{textAlign: 'center'}}>
              Kode Verifikasi telah dikirimkan melalui SMS ke No 0812 **** ****
            </Text>

            <OTPInputView
              pinCount={4}
              style={{width: '80%', height: 100}}
              autoFocusOnLoad
              codeInputFieldStyle={styles.underlineStyleBase}
              codeInputHighlightStyle={styles.underlineStyleHighLighted}
            />
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <TouchableOpacity
                style={styles.roundButton1}
                onPress={() => this.props.navigation.navigate('MainApp')}>
                <Text style={styles.btntext}>Verifikasi</Text>
              </TouchableOpacity>
            </View>
            <Text>Mohon menunggu 12 detik untuk mengirim ulang</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  iconbackstyle: {
    marginLeft: 20,

    marginTop: 30,
  },

  btnback: {
    width: 20,
    height: 20,
    marginTop: 20,
    marginLeft: 20,
  },

  sub1: {
    fontWeight: 'bold',
    marginBottom: 20,
  },

  midtext: {
    color: '#828487',
    paddingTop: 10,
    paddingBottom: 10,
    marginHorizontal: 5,
  },

  line: {
    height: 1,
    width: 30,
    backgroundColor: '#828487',
  },

  container: {
    height: 300,
    justifyContent: 'center',
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#eaeaea',
    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: 22,
    fontWeight: 'bold',
    marginLeft: -10,
  },
  welcomebg: {
    height: 80,
    backgroundColor: '#1b2333',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  btnsos: {
    height: 50,
    width: 300,
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    borderColor: 'grey',
  },

  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: 'black',
    fontSize: 20,
    color: 'grey',
  },

  underlineStyleHighLighted: {
    borderColor: '#da9203',
  },

  roundButton1: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 40,
    backgroundColor: 'orange',
  },

  btntext: {
    fontSize: 16,
    color: '#eaeaea',
    fontWeight: 'bold',
  },

  bottext: {
    fontSize: 14,
    // color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  bottext3: {
    fontSize: 12,
    // color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },

  bottext2: {
    fontSize: 14,
    textDecorationLine: 'underline',

    textAlign: 'center',
  },

  input: {
    height: 40,
    width: 250,
    margin: 10,
    marginLeft: 30,
    // borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'grey',
    padding: 10,
  },
});
