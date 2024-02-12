import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
ImgDoa;
import {ImgAdzan, ImgDoa} from '../../assets';
import Beranda from './../../assets/icons/home.png';
import Notifikasi from './../../assets/icons/notifikasi.png';


import {Doa, Pesanan, Saldo, Chat, Jadwal, Profil, IconHomeNew, } from '../../assets';

export default class Muslim extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
	 var nama =	this.props.route.params.nama; 
	  var jumlahbeli =	this.props.route.params.jumlahbeli; 
	 var kategori =	this.props.route.params.kategori; 
    return (
      <SafeAreaView style={{flex :1 }}>
        <View Style={{flex:1, backgroundColor:'red', }}>
			<TouchableOpacity
			  onPress={() => this.props.navigation.navigate('Adzan')}>
			  <Image style={styles.imagedua} source={ImgAdzan} />
			  <Text style={styles.judul}>Adzan</Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => this.props.navigation.navigate('Doa')}>
			  <Image style={styles.imagedua} source={ImgDoa} />
			  <Text style={styles.judul}>Doa</Text>
			</TouchableOpacity>
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
                  onPress={() => this.props.navigation.navigate('Home',{name:nama,kategori:kategori})}>
                  <Image
                  source={Beranda}
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
                  />
                  <Text style={{marginBottom: 20}}>Beranda</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('Muslim',{nama:nama,kategori:kategori,jumlahbeli:jumlahbeli})}>
                  <Image
                    source={Doa}
                    style={{
                      width: 25,
                      height: 25,
                      marginTop: 30,
                      alignSelf: 'center',
                    }}
                  />
                  <Text style={{marginBottom: 20, color:'orange'}}>Muslim</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
				
				
				    <View style={{position:'absolute',height:20,width:20,backgroundColor:'green', borderRadius:20, alignItems:'center',right:5,top:3, zIndex:1}}>
         
                      <Text style={{color:'white', fontWeight:'bold'}}>
                                  
                     
                     {jumlahbeli} 
                    
                  
                  </Text>
            
        </View>
                <TouchableOpacity
                  onPress={() =>this.props.navigation.navigate('Orderan',{nama:nama,kategori:kategori,jumlahbeli:jumlahbeli})}>
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
                  onPress={() =>this.props.navigation.navigate('Notifikasi',{nama:nama,kategori:kategori,jumlahbeli:jumlahbeli})}>
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
  imagedua: {
    width: 150,
    height: 150,
	marginTop:20,
    alignSelf: 'center',
    borderRadius: 120,
    marginTop: 20,
  },

  judul: {
    fontSize: 28,
    textAlign: 'center',
    color: '#d59710',
    fontWeight: 'bold',
  },
});
