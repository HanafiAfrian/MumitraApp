import React, {Component} from 'react';
import {Text, StyleSheet, View, ImageBackground} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

import {Bgadzan} from '../../assets';

export default class Saldo extends Component {
	 constructor(props) {
    super(props);
    this.state = {
      nama: '',
      telepon: '',
      saldo: '',
      listData: [],
      idEdit: null,
    };

    this.url = 'https://mutawif.co.id/api/muapi/saldomitra.php';
  }
  componentDidMount() {
    this.ambilListData();
  }

  async ambilListData() {
    var telepon = this.props.route.params.telepon;
    await fetch(this.url + '/?op=ambildata&telepon=' + telepon)
      .then(response => response.json())
      .then(json => {
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }
	
  render() {
	    var telepon = this.props.route.params.telepon;
    return (
      <SafeAreaView>
        <View style={styles.card}>
          {/* <ImageBackground
            source={Bgadzan}
            // resizeMode="cover"
            style={styles.image}> */}
          <View>
		  <Text style={{color: 'red', fontSize: 19, }}>
		  Untuk Melakukan Top Up Saldo Silahkan melakukan Transfer ke nomor Rekening dibawah ini:</Text>
		   <Text style={{color: 'black', fontSize: 18, }}></Text>
		      <Text style={{color: 'black', fontSize: 18, }}>Bank Mandiri</Text>
            <Text style={{color: 'black', fontSize: 18, }}>Nomor Rekening : 1060073767777 </Text>
            <Text style={{color: 'black', fontSize: 17, }}>A/N : PT. Pelopor Mutawif Indonesia </Text>
          </View>
          <View>
           
          </View>
          {/* </ImageBackground> */}
        </View>

        <View style={styles.riwayat}>
         
          

     

        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    // opacity: 0.2,
    zIndex: 0,
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    marginLeft: 100,
  },
  lasttx: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    // fontWeight: 'bold',
  },
  card: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ff9d47',
    margin: 20,
    paddingTop: 20,
    padding: 15,
    height: 250,
    borderRadius: 5,
  },

  riwayat: {
    backgroundColor: 'white',
  },
});
