import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity,PermissionsAndroid,Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapView , {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import call from 'react-native-phone-call';
export default class Diperjalanan extends Component {
		constructor(props) {
    super(props);
    this.state = {
		   nama: '',
      telepon: '',
      alamat: '',
	  metode_pembayaran :'',
      listData: [],
      idEdit: null,
	userLocation :{
	 coords: {
	 accuracy: 0,
	 altitude: 0,
	 heading: 0,
	 latitude: 0,
	 longitude: 0, 
	 speed: 0 ,
	  inputValue: '',
	 },
	 
	 mocked: false, 
	 timestamp: 0,
  }
 
 };
  this.url = 'https://mutawif.co.id/api/muapi/pesananmitra.php';
   }
	
	componentDidMount()  {
	   this.ambilListData();
	 this.requestLocationPermission();
	 Geolocation.getCurrentPosition(info => this.setState({userLocation: info}));
	  Geolocation.getCurrentPosition(info => console.log(info));
 }

requestLocationPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Izinkan Aplikasi Mengakses Lokasi",
        message:
          "Tes " +
          "so you can take awesome pictures.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Di izinkan");
	   Geolocation.getCurrentPosition(info => this.setState({userLocation: info}));
    } else {
      console.log("Tidak Di Izinkan");
    }
  } catch (err) {
    console.warn(err);
  }
};
 
  async ambilListData() {
  var nama =	this.props.route.params.nama; 

	
    await fetch(this.url + '/?op=ambildata&nama=' + nama)
      .then(response => response.json())
      .then(json => {

        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
		
      })
      .catch(error => {
        console.log(error);
      });
  }
 klikSimpan() {
     if (
      invoice == '') {
      alert('Masukkan Username');
    } 

	
	
	
	 else {
      if (this.state.idEdit) {
		var invoice = this.props.route.params.invoice; 
        var urlAksi = this.url + '/?op=updatekirim&invoice=' + invoice;
      } else {
		  var invoice =	this.props.route.params.invoice; 
       var urlAksi = this.url + '/?op=updatekirim&invoice=' + invoice;
  	   var invoice =	this.props.route.params.invoice; 
	     var username =	this.props.route.params.nama; 
		    var telepon =	this.props.route.params.telepon; 
		   var nama =	this.props.route.params.username; 
	   var latitudecostumer =	+ this.props.route.params.latitudecostumer; 
	    var longitudecostumer =	+ this.props.route.params.longitudecostumer; 
	      var nama_produk =	this.props.route.params.nama_produk; 
	  
      }

    
      fetch(urlAksi, {
        method: 'post',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body:
          'invoice=' + invoice 
      })
        .then(response => response.json())
        .then(responseJson => {

			 if (responseJson == 'ok') {
				 this.props.navigation.replace('SudahSampai',{username:nama, nama:username, nama_produk : nama_produk, latitudecostumer:latitudecostumer,longitudecostumer:longitudecostumer,invoice:invoice,telepon:telepon});
			 }
		
			 
			
			else
			{
				
		alert('Username Salah');
          
        }
	}
		);
    }
  }
	
	  triggerCall = () => {
	  
	   var  inputValue = this.props.route.params.telepon;
    
    const args = {
      number: inputValue,
      prompt: true,
    };

    call(args).catch(console.error);
  };
  render() {
	   var invoice =	this.props.route.params.invoice; 
	     var username =	this.props.route.params.nama; 
		  var nama =	this.props.route.params.username; 
	   var latitudecostumer =	+ this.props.route.params.latitudecostumer; 
	    var longitudecostumer =	+ this.props.route.params.longitudecostumer; 
	      var nama_produk =	this.props.route.params.nama_produk; 
		    var telepon =	this.props.route.params.telepon; 
			
			  
 const location = `${latitudecostumer},${longitudecostumer}`
    const url = Platform.select({
      ios: `maps:${location}`,
      android: `geo:${location}?center=${location}&q=${location}&z=16`,
    });
    return (
      <View style={{height: '100%'}}>
        <View style={styles.headerbg}>
          <Text style={styles.nama}> {username}</Text> 
		  <Text style={styles.telepon}> {telepon}</Text>
  <Text style={styles.resto}> {nama_produk}</Text>
        </View>
            
   <MapView style={styles.map}//window pake Dimensions
   region={{
      latitude: this.state.userLocation.coords.latitude,
      longitude: this.state.userLocation.coords.longitude,
      latitudeDelta: 0.099,
      longitudeDelta: 0.099 
   }} >
   
   <Marker
	coordinate={{
      latitude: this.state.userLocation.coords.latitude,
      longitude: this.state.userLocation.coords.longitude,
   }}
   key ={'user'}
   title={"Lokasi Saya"}
   description={""}   
   pinColor={"#FF0000"}
   />
     
   <Marker
   coordinate={{
      latitude: latitudecostumer,
      longitude: longitudecostumer,
   }}
   key ={'userpelanggan'}
   title="Lokasi Custamer"
   pinColor={"#0000ff"}/>
   </MapView>

        <View style={styles.rowkotak}   onPress={this.triggerCall}>
          <TouchableOpacity style={styles.kotak}   onPress={this.triggerCall}>
            <Icon
              name="phone"
              size={30}
              color="orange"
              style={{
                alignSelf: 'center',
                marginTop: 5,
              }}
			    onPress={this.triggerCall}
            />
            <Text style={styles.textbtn}>Telepon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.kotak}>
            <Icon
              name="comments-o"
              size={30}
              color="orange"
              style={{alignSelf: 'center', marginTop: 5}}
			    onPress={() => this.props.navigation.navigate('ChatDetail',{nama :username,username:nama})}
            />
            <Text style={styles.textbtn}
			  onPress={() => this.props.navigation.navigate('ChatDetail',{nama :username,username:nama})}
			>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.kotak}
            onPress={() => this.props.navigation.navigate('PesananAktif',{nama :username,username:nama})}>
            <Icon
              name="shopping-basket"
              size={30}
              color="orange"
              style={{alignSelf: 'center', marginTop: 5}}
            />
            <Text style={styles.textbtn}>Pesanan</Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: '#222a32', height: '20%'}}>
          <TouchableOpacity
            style={styles.buttonorder}
           onPress={() => this.klikSimpan()}>
            <Text style={styles.btntext}>Pesanan di Antar</Text>
          </TouchableOpacity>
		    <TouchableOpacity
              onPress={() => Linking.openURL(url)}>

              <View style={{
                width: '100%', height: 50, backgroundColor: 'green', borderBottomEndRadius: 10,
                borderBottomStartRadius: 10, marginTop: -7
              }}>
                <Text style={styles.mapbtn}>Lihat Lokasi</Text>
              </View>
            </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btntext: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'orange',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 80,
  },
  buttonorder: {
    alignItems: 'center',
    marginVertical: 10,
  },
  rowkotak: {
    display: 'flex',
    flexDirection: 'row',
  },
  textbtn: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
  kotak: {
    width: '34%',
    height: 70,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#222a32',
  },
  map: {
    backgroundColor: 'yellow',
    height: '70%',
  },

  headerbg: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#222a32',
  },
  nama: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  
    telepon: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
  resto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});
