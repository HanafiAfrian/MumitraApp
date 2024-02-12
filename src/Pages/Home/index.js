import {bold} from 'chalk';
import React, {Component , useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MapView , {Marker} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Sound from 'react-native-sound';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import Firebase  from "@react-native-firebase/app";
import {
  View,
  Button,
  StyleSheet,
  PermissionsAndroid,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  DrawerLayoutAndroid,
  ImageBackground,
} from 'react-native';
import CustomButton from './CustomButton';
import GlobalStyle from './GlobalStyle';
import Beranda from './../../assets/icons/home.png';
import Notifikasi from './../../assets/icons/notifikasi.png';
import {notifikasi} from './Notifikasi'

import {Doa, Pesanan, Saldo, Chat, Jadwal, Profil, IconHomeNew, } from '../../assets';

import 'react-native-gesture-handler';
import {Directions} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  IconHamburger,
  Panic,
  IconWallet,
  IconScan,
  IconTf,
  BannerOne,
  BannerTwo,
  BannerThree,
  PromoOne,
  PromoTwo,
  PromoThree,
  
} from '../../assets';
import {
  IconNasibox,
  IconAirport,
  IconMutawif,
  IconMutawifah,
  IconSim,
  IconMoney,
  IconCheckin,
  IconZiarah,
  IconKursiroda,
  IconHospital,
  IconMarried,
  IconIbadah,
  IconDam,
  IconHajaswad,
  IconMufood,
  IconMassage,
  IconTaxi,
  IconLaundry,
  BgMesjid,
 

} from '../../assets';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ToggleSwitch from 'toggle-switch-react-native';

 function Jam() {
	  const date= new Date()
  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds()
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <View className="App">
      <Text style={{
                      color: 'white',
                      marginLeft: 8,
                      fontSize: 25,
                      fontWeight: 'bold',
                    }}>
        {dateTime.hours}:{dateTime.minutes}:{dateTime.seconds}
      </Text>
    </View>
  );
}
  class Lokasi extends Component {
   constructor(props) {
    super(props);
    this.state = {
	userLocation :{
	 coords: {
	 accuracy: 0,
	 altitude: 0,
	 heading: 0,
	 latitude: 0,
	 longitude: 0, 
	 speed: 0 
	 },
	 
	 mocked: false, 
	 timestamp: 0,
  }
 
 };
 
   }
 componentDidMount()  {
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
  render() {
 
 return (
       
 <View style={styles.containermap}>
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
     
  
   </MapView>
    </View>
           
 )
 
 }
 }

 class Online extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {
    isOnDefaultToggleSwitch: true,
    isOnLargeToggleSwitch: false,
    isOnBlueToggleSwitch: false,
  };

  onToggle(isOn) {
    console.log('Changed to ' + isOn);
  }

  render() {
	  
 return (
  <View>
                  {/* <Text
                    style={{
                      color: 'white',
                      marginLeft: 8,
                      fontSize: 12,
                      fontWeight: 'bold',
                      textDecorationLine: 'underline',
                    }}>
                    10 Desember 2021 M
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      marginLeft: 8,
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    10 Dzulhijjah 1442 H
                  </Text> */}

                  <ToggleSwitch
                    size="large"
                    onColor="red"
                    offColor="green"
                    isOn={this.state.isOnBlueToggleSwitch}
                    onToggle={isOnBlueToggleSwitch => {
                      this.setState({isOnBlueToggleSwitch});
                      this.onToggle(isOnBlueToggleSwitch);
                    }}
                    style={{marginLeft: 20}}
                  />
                </View>
 )
 
 }
 }


 function Audio() {

 
  let control_Local, control_Online;
  let onlineSound = 'https://mutawif.co.id/api/sound.mp3';

  useEffect(() => {
    Sound.setCategory('Playback', true); // true = mixWithOthers
    return () => {
      if (control_Local) control_Local.release();
      if (control_Online) control_Online.release();
    };
  }, []);


  const playSound_onLine = () => {

    control_Online = new Sound(onlineSound, '', (error, _sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      control_Online.play(() => {
        control_Online.release();
      });
    });

  }

  


  return (

    <View>

      <View  />

      <View>

        <TouchableOpacity activeOpacity={0.7}  onPress={playSound_onLine}>

          <Text > Play </Text>

        </TouchableOpacity>

       
      </View>

    </View>

  );
}



export default class Home extends Component {
	
	 constructor(props) {
    super(props);
    this.state = {
			currentCount: 30,
      nama: '',
      telepon: '',
      alamat: '',
	  metode_pembayaran :'',
      listData: [],
	  listData1: [],
	   listData2: [],
	    listData3: [],
      idEdit: null,
	   idToken :null,
	  
    };

    this.url = 'https://mutawif.co.id/api/muapi/pesananmitra.php';
	 this.url1 = 'https://mutawif.co.id/api/muapi/chat.php';
  }
  
     timer() {
    this.setState({
      currentCount: this.state.currentCount - 1,
    });
    if (this.state.currentCount < 1) {
      clearInterval(this.intervalId);
    }
  }
  
	 componentDidMount() {
	
    this.ambilListData();
	 this.ambilListData1();
	   this.ambilListData2();
	      this.ambilListData3();
		  var firebaseConfig = {
  apiKey: "AIzaSyBDFK2WGhw5P8-Jz6ZoLK9iYVaFFiWDSAo",
  authDomain: "mumitramitmutawif.firebaseapp.com",
  projectId: "mumitramitmutawif",
  storageBucket: "mumitramitmutawif.appspot.com",
  messagingSenderId: "949857878605",
  appId: "1:949857878605:web:cabb06996fa1ecb8bad204"
};

if (!Firebase.apps.length){
	Firebase.initializeApp(firebaseConfig);		
} else {
	Firebase.app();
	
}


 
	 PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  
  onRegister: function (token) {
   console.log("TOKEN:", token);
  },
onRegister:(token) =>this.setState({idToken:token.token}),
  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    console.log("ACTION:", notification.action);
    console.log("NOTIFICATION:", notification);

    // process the action
  },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function(err) {
    console.error(err.message, err);
  },

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */
  requestPermissions: true,
})
  }
 componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  async ambilListData() {
  var nama =	this.props.route.params.name; 

	
    await fetch(this.url + '/?op=ambildata&nama=' + nama)
      .then(response => response.json())
      .then(json => {
		  this.setState({username:json.data.result[0].username});
		 
		     this.setState({jumlahbeli:json.data.result[0].jumlahbeli});
   this.setState({nama_produk:json.data.result[0].nama_produk});
    this.setState({latitudecostumer:json.data.result[0].latitudecostumer});
   this.setState({longitudecostumer:json.data.result[0].longitudecostumer});
      this.setState({invoice:json.data.result[0].invoice});
   this.setState({status:json.data.result[0].status});
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
		this.intervalID = setTimeout(this.ambilListData.bind(this), 1000);
		
		    clearInterval(this.intervalId);
      })
      .catch(error => {
        console.log(error);
      });

	  
  }
	
	  async ambilListData1() {
  var nama =	this.props.route.params.name; 

	
    await fetch(this.url1 + '/?op=hitungpesanmitra&nama=' + nama)
      .then(response => response.json())
      .then(json => {
		 this.setState({jumlahchat:json.data.result[0].jumlahchat});
        console.log('Hasil yang didapat2: ' + JSON.stringify(json.data.result));
        this.setState({listData1: json.data.result});
		 this.intervalID = setTimeout(this.ambilListData1.bind(this), 1000);
		     clearInterval(this.intervalId);
      })
      .catch(error => {
        console.log(error);
      });
  }
	 klikUpdatebunyi(){
		
  var nama =	this.props.route.params.name; 
      if(this.state.nama != ''){
        alert('Silakan masukkan nama dan alamat');
      }else{
          if(this.state.idEdit){
            var urlAksi = this.url1+"/?op=updatebunyimitra";
          }else{
            var urlAksi = this.url1+"/?op=updatebunyimitra";
          }
          

          fetch(urlAksi,{
              method:'post',
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded'
              },
              body:"nama="+nama
          })
          .then((response)=>response.json())
          .then((json)=>{
              
              
          })
      }
  }

  async ambilListData2() {
  var nama =	this.props.route.params.name; 

    await fetch(this.url1 + '/?op=hitungbunyimitra&&nama='+nama)
      .then(response => response.json())
      .then(json => {
this.setState({jumlahbunyi:json.data.result[0].jumlahbunyi});
this.setState({jumlah:json.data.result[0].jumlah});
this.setState({kepada:json.data.result[0].kepada});
this.setState({dari:json.data.result[0].dari});
        console.log('Hasil yang didapatbunyi: ' + JSON.stringify(json.data.result));
        this.setState({listData2: json.data.result});
		 this.intervalID = setTimeout(this.ambilListData2.bind(this), 1000);
		     clearInterval(this.intervalId);
      })
      .catch(error => {
        console.log(error);
      });
	  
	    if (this.state.jumlahchat > this.state.jumlahbunyi )
		
		{
			this.klikUpdatebunyi();
			  let control_Local, control_Online;
	let onlineSound = 'https://mutawif.co.id/api/sound.mp3';
			   control_Online = new Sound(onlineSound, '', (error, _sound) => {
      if (error) {
        alert('error' + error.message);
        return;
      }
      control_Online.play(() => {
        control_Online.release();

      });
    });
	
	  	}
	
	
		  
  } 
  
  klikUpdatebunyipesan(){
		
     var nama =	this.props.route.params.name; 
      if(this.state.nama != ''){
        alert('Silakan masukkan nama dan alamat');
      }else{
          if(this.state.idEdit){
            var urlAksi = this.url+"/?op=updatebunyi";
          }else{
            var urlAksi = this.url+"/?op=updatebunyi";
          }
          

          fetch(urlAksi,{
              method:'post',
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded'
              },
              body:"nama="+nama
          })
          .then((response)=>response.json())
          .then((json)=>{
              
              
          })
      }
  }
 
   async ambilListData3() {
     var nama =	this.props.route.params.name; 
	let control_Local, control_Online;
	let onlineSound = 'https://mutawif.co.id/api/sound.mp3';
	
    await fetch(this.url + '/?op=hitungbunyipesan&&nama='+nama)
      .then(response => response.json())
      .then(json => {
this.setState({jumlahbunyipesan:json.data.result[0].jumlahbunyipesan});

        console.log('Hasil yang didapatbunyi: ' + JSON.stringify(json.data.result));
        this.setState({listData3: json.data.result});
		 this.intervalID = setTimeout(this.ambilListData3.bind(this), 500);
		     clearInterval(this.intervalId);
      })
      .catch(error => {
        console.log(error);
      });

	

		  
  } 
  
  render() {
	  	    var habis = +this.state.currentCount;
	  
     var name =	this.props.route.params.name; 
  var kategori =	this.props.route.params.kategori; 
    var age =	this.props.route.params.age; 
	  var email =	this.props.route.params.email; 
    return (
	
      <SafeAreaView style={{backgroundColor: '#eaeaea', flex: 1}}>
        <View>
          <View style={{backgroundColor: '#222a32', height: 210, opacity: 0.9}}>
            <ImageBackground
              source={BgMesjid}
              resizeMode="cover"
              style={styles.imagebg}>
              <View style={styles.containeruser}>
                <View>
                  {/* <Text
                    style={{
                      color: 'white',
                      marginLeft: 8,
                      fontSize: 12,
                      fontWeight: 'bold',
                      textDecorationLine: 'underline',
                    }}>
                    10 Desember 2021 M
                  </Text>
                  <Text
                    style={{
                      color: 'white',
                      marginLeft: 8,
                      fontSize: 12,
                      fontWeight: 'bold',
                    }}>
                    10 Dzulhijjah 1442 H
                  </Text> */}
<Online />
              
                </View>
	 
                <TouchableOpacity>
                  <Image style={styles.icondrawer} source={Panic} />
                </TouchableOpacity>
              </View>

              <View style={styles.container}>
                <View>
                  <Text style={styles.saldo1}>
  Assalamualaikum {name} 


                  </Text>
			
                  <Text style={styles.saldo2}>
                   <Jam />
                    <Text style={{fontSize: 14, fontWeight: 'normal'}}></Text>
                  </Text>
        
                </View>
              </View>
            </ImageBackground>
          </View>
          <View>
            <View style={styles.logotagicon}>
              <View style={styles.logosub}>
                <Image
                  source={{uri: 'https://mutawif.co.id/images/logoluxury.png'}}
                  style={styles.logo}
                />

              </View>
            </View>
            {/* Button Top */}
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',

                height: 70,
                elevation: 1,
                borderRadius: 27,
                zIndex: 0,
                marginTop: -30,
                backgroundColor: 'white',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Profil',{telepon:age, nama_lengkap:name, email_pribadi: email })}>
                  <Image
                    source={Profil}
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
                  />
                  <Text style={{marginBottom: 20}}>Profil</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
				
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Chat',{nama:name,kategori:kategori})}>
                  <Image
                    source={Chat}
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
                  />
				  
				  	    <View style={{position:'absolute',height:20,width:20,backgroundColor:'green', borderRadius:20, alignItems:'center',right:-15,top:23, zIndex:1}}>
           {this.state.listData1.map((val, index) => (
                      <Text key={index} style={{color:'white', fontWeight:'bold'}}>
                                  
                     
					 {this.state.jumlahchat}
                    
                  
                  </Text>
                ))}
        </View>
				  
                  <Text style={{marginBottom: 20}}>Chat</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                 onPress={() => this.props.navigation.navigate('Saldo',{telepon:name})}>
                  <Image
                    source={Saldo}
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
                  />
                  <Text style={{marginBottom: 20}}>Saldo</Text>
                </TouchableOpacity>
              </View>
            </View>
            {/* End Button Top */}
            <View style={styles.maincontain}>
              <Text>ada</Text>
			  	  			         
<Lokasi />
	
	
	
	
		
		  
            </View>
			
          </View>
		  
        </View>
		
		
		
		
		
		<View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                height: 53,
                elevation: 1,
                borderRadius: 0,
                zIndex: 0,
                //marginTop: -65,
                position :'absolute',
				bottom:0,
				width:'100%',
				backgroundColor: 'white',
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Home',{name:name,kategori:kategori})}>
                  <Image
                  source={Beranda}
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
                  />
                  <Text style={{marginBottom: 20, color:'orange'}}>Beranda</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Muslim' ,{nama:name,kategori:kategori, jumlahbeli:this.state.jumlahbeli})}>
                  <Image
                    source={Doa}
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
                  />
                  <Text style={{marginBottom: 20}}>Muslim</Text>
                </TouchableOpacity>
              </View>
			  
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
		
			    <View style={{position:'absolute',height:20,width:20,backgroundColor:'green', borderRadius:20, alignItems:'center',right:5,top:3, zIndex:1}}>
           {this.state.listData.map((val, index) => (
                      <Text key={index} style={{color:'white', fontWeight:'bold'}}>
                                  
                     
                     {val.jumlahbeli}  
                    
                  
                  </Text>
                ))}
        </View>
		
                <TouchableOpacity
                  onPress={() =>this.props.navigation.replace('Orderan',{nama:name,kategori:kategori , jumlahbeli:this.state.jumlahbeli})}>
                  <Image
                    source={Pesanan}
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
		
                    }}
                  />
				
                  <Text style={{marginBottom: 20}}>Orderan</Text>
                </TouchableOpacity>
              </View>
			  
			  
			   <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() =>this.props.navigation.navigate('Notifikasi',{nama:name,kategori:kategori, jumlahbeli:this.state.jumlahbeli})}>
                  <Image
                    source={Notifikasi}
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
                  />
                  <Text style={{marginBottom: 20}}>Notifikasi</Text>
                </TouchableOpacity>
              </View>
            </View>
		
      </SafeAreaView>
 );
  }
}
const styles = StyleSheet.create({
  imagebg: {
    // width: 200,
    marginBottom: -60,
  },

  bannerstyle: {
    width: 300,
    height: 120,
    borderRadius: 15,
    // marginLeft: 8,
    marginRight: 8,
  },
  maincontainsec: {
    display: 'flex',
    paddingTop: 20,

    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 15,
    paddingLeft: 15,
    backgroundColor: 'white',
  },
  imgads: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 20,
  },

  bordercataktif: {
    fontSize: 14,

    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 50,
    padding: 5,
    margin: 5,
    width: 70,
    alignItems: 'center',
    backgroundColor: 'orange',
  },

  bordercat: {
    fontSize: 14,

    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 10,
    padding: 5,
    margin: 5,
    width: 70,
    textAlign: 'center',
  },

  bordercat: {
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#20232a',
    borderRadius: 50,
    padding: 5,
    margin: 5,
    width: 70,

    alignItems: 'center',
  },

  bordercat1: {
    fontSize: 10,

    borderColor: '#20232a',
    backgroundColor: 'orange',
    borderRadius: 50,
    color: 'white',
    padding: 2,
    margin: 2,
    width: 50,
    textAlign: 'center',
  },

  roundedcat: {
    display: 'flex',
    flexDirection: 'row',
    margin: 10,
  },
  iconservice: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },

  iconmain: {
    width: 70,
    height: 50,
    marginLeft: 15,
    marginTop: 50,
    // backgroundColor: 'red',
  },
  textads: {
    marginLeft: 15,
    marginTop: 20,
    // backgroundColor: 'red',
  },

  maintext: {
    marginLeft: 40,
  },
  saldo1: {
    textAlign: 'center',
    fontSize: 12,
    color: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
  },
  saldo2: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 10,
  },
  iconssaldo: {
    backgroundColor: 'white',
    justifyContent: 'space-between',
    padding: 10,
    borderTopStartRadius: 10,
    borderBottomLeftRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 30,
  },

  containeruser: {
    marginTop: 10,
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  container: {
    alignItems: 'center',
    alignSelf: 'center',
    height: 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  welcome1: {
    marginLeft: 10,

    textAlign: 'center',
    color: 'white',
    fontSize: 18,

    textAlign: 'left',
    fontFamily: 'Lato',
    fontWeight: '400',
  },

  iconstyles: {
    marginRight: 30,
    justifyContent: 'center',

    width: 22,
    height: 22,
  },

  iconsaldotext: {
    textAlign: 'left',
    marginLeft: -2,
    fontSize: 10,
  },

  icondrawer: {
    marginRight: 10,
    width: 50,
    height: 50,
  },

  logo: {
    width: 150,
    height: 30,
    marginLeft: 30,
    marginTop: -10,
  },

  logosub: {
    backgroundColor: 'orange',
    width: 260,
    borderRadius: 40,
    height: 50,
    padding: 20,
    zIndex: 2,
    marginBottom: 20,
  },

  logotagicon: {
    marginTop: -60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
  },
  terima: {
    fontSize: 16,
    fontWeight: 'bold',
	 alignItems:'center', 
	 textAlign: 'center',
	    marginLeft: 24,
	  marginTop: -42,
    padding: 10,
    borderRadius: 50,	
	color:'red'
  },
  maincontain: {
    backgroundColor: 'white',
    height: 400,
    flexDirection: 'row',
    // borderTopStartRadius: 40,
    // borderTopEndRadius: 40,
    marginTop: -30,
    zIndex: 0,
    flexWrap: 'wrap',
    paddingBottom: 20,
  },
  mainarticle: {
    backgroundColor: 'white',
    flex: 1,

    marginTop: 10,

    paddingBottom: 20,
  },

  roundButton1: {
    width: 250,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'orange',
  },

  bottext: {
    fontSize: 14,
    // color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  bottext2: {
    fontSize: 14,
    textDecorationLine: 'underline',
    marginTop: 10,
    textAlign: 'center',
  },
  
   containermap: {
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
	width: '100%',
	height:600,
  },
  map: {

...StyleSheet.absoluteFillObject
  },
  
  marker: {
    paddingVertical: 10,
    paddingHorizontal: 30,
    backgroundColor: "yellow",
    borderColor: "red",
    borderRadius: 50,
    elevation: 10,
  },
  text: {
  color: "#red",   
  },
});
