import React, {Component} from 'react';
import {
    Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Button,
  TextInput,
  ScrollView,
} from 'react-native';
import PhoneInput from 'react-native-phone-number-input';
import {
  Logomail,
  Logouser,
  Logokey,
  Logocal,
  Logogen,
  Logorek,
  Logoloc,
  Logoktp,
  Locimg,
  Genimg,
  Rekimg,
} from '../../assets';

import { WebView } from 'react-native-webview';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class FrmDaftar extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }

  showLoader() {
    this.setState({ isVisible: true });
  }

  hideLoader() {
    this.setState({ isVisible: false });
  }

  render() {
	
    return (
      
        <View style={{flex: 1}}>
          <View style={{backgroundColor: '#eaeaea', flex: 1}}
		    onPress={() => this.props.navigation.replace('FrmLogin')}
		  
		  >
       <View style={styles.welcomebg}>
            <TouchableOpacity
			  onPress={() => this.props.navigation.replace('FrmLogin')}
              style={styles.iconbackstyle}
              >
              {/* <Image source={IconBack} /> */}
              <Icon
                name="chevron-left"
                size={20}
                color="#fff"
                style={{
                  marginTop: 20,
                  marginLeft: 10,
                  padding: 5,

                }}
              />
            </TouchableOpacity>
            <Text style={styles.welcome}>
              Unggah <Text style={{color: 'orange'}}
			  
			     onPress={() => this.props.navigation.replace('FrmLogin')}
			  > Dokumen</Text>
            </Text>
          </View>
 <View
 style={
   this.state.isVisible === true ? styles.stylBefore : styles.styleAfter
 }>
 {this.state.isVisible ? (
   <ActivityIndicator
     color="blue"
     size="large"
     style={styles.activityIndicatorStyle}
   />
 ) : null}

 <WebView
   style={styles.webViewStyle}
   source={{ uri: 'https://mutawif.co.id/api/daftarb2b/daftarmitra.php?jenis=Rice Box'}}
   javaScriptEnabled={true}
   domStorageEnabled={true}
   onLoadStart={() => this.showLoader()}
   onLoad={() => this.hideLoader()}
 />
</View>
		   
		   
        </View>   
		   
        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  // iconbackstyle: {
  //   marginLeft: 20,
  //   marginTop: 20,
  //   width: 20,
  // },

  btnback: {
    width: 20,
    height: 20,
    marginTop: 20,
    marginLeft: 20,
  },

  aaa: {
    backgroundColor: 'red',
    color: 'yellow',
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
    // height: 300,
    marginBottom: 20,
    justifyContent: 'center',
    marginTop: 20,
    paddingBottom: 20,
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
    marginTop: -30,
    fontWeight: 'bold',
  },
  welcomebg: {
    height: 80,
    backgroundColor: '#1b2333',
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

  //   textinputmain: {
  //     display: 'flex',
  //     flexDirection: 'row',
  //   },

  logoiconuser: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 22,
    position: 'absolute',
    opacity: 0.5,
  },
  logoiconmail: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 82,
    position: 'absolute',
    opacity: 0.5,
  },
  logoiconkey: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 142,
    position: 'absolute',
    opacity: 0.5,
  },

  logolokasi: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 202,
    position: 'absolute',
    opacity: 0.5,
  },

  logogen: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 322,
    position: 'absolute',
    opacity: 0.5,
  },
  logorek: {
    width: 20,
    height: 20,
    marginLeft: 10,
    marginTop: 382,
    position: 'absolute',
    opacity: 0.5,
  },

  roundButton1: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
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
    input: {
    height: 40,
    width: 200,
    margin: 10,
    marginLeft: 30,
    // borderWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'grey',
    padding: 10,
  },

  stylBefore: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  styleAfter: {
    flex: 1,
  },
  webViewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: -25,
  },
  activityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  
});
