import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Mitraseven} from '../../assets';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import Beranda from './../../assets/icons/home.png';
import Notifikasi from './../../assets/icons/notifikasi.png';


import {Doa, Pesanan, Saldo, Chat, Jadwal, Profil, IconHomeNew, } from '../../assets';

export default class Notifikasiorder extends Component {
 constructor(props) {
    super(props);
    this.state = {
      nama: '',
      telepon: '',
      alamat: '',
	  metode_pembayaran :'',
      listData: [],
      idEdit: null,
    };

    this.url = 'https://mutawif.co.id/api/muapi/pesananmitra.php';
  }
  componentDidMount() {
    this.ambilListData();
  }

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
  
	
	
  render() {
	   var jumlahbeli =	this.props.route.params.jumlahbeli; 
	      var nama =	this.props.route.params.nama; 
	 var kategori =	this.props.route.params.kategori; 
    return (
    <SafeAreaView style={{flex :1 }}>

        <ScrollView style={{flex :1,}}>
        	<View Style={{height:80,}}>
			<View style={{backgroundColor: '#1b2333',}}>
          <View
            style={{
             flexDirection : 'row',
           alignItems: 'center',
            
              marginTop: 25,	
		  
            }}>
            <Text
              style={{
                marginBottom: 10,
 marginLeft: 20,
                fontWeight: 'bold',
                fontSize: 20,
                color: '#fff',
                 marginBottom: 20,
			
				 
              }}>
              Pesanan
            </Text>

               <Text
              style={{
                marginBottom: 14,

                fontWeight: 'bold',
                fontSize: 20,
                color: '#fff',
                marginLeft: 140,
			
				 
              }}
			  
			   onPress={() =>this.props.navigation.navigate('Rate',{nama:nama})}
			  >
              Penilaian
            </Text>
          </View>
          <View
            style={{
              borderBottomWidth: 4,
              borderBottomColor: 'orange',
              width: '50%',
			  
            }}></View>
        </View>

        <View style={styles.card}>
          <View style={styles.flexrow}>
            <View style={styles.flexico}>
              <Icon
                name="user-circle-o"
                size={20}
                color="orange"
                style={{
                  padding: 7,
                  // marginLeft: -10,
                  marginTop: -10,
                }}
              />
  <Text style={styles.icoprofil}>{nama}</Text>
            </View>
  
          </View>
          <View style={styles.row2}>
            <View style={styles.row2ico}>
         

              <View>
               
                   
           {this.state.listData.map((val, index) => (
                  <Text key={index}>
                                  
                      <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginVertical: 10,
                  }}>
                     {val.nama_produk} 
                      </Text>
                  
                  </Text>
                ))}
       
                
              
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',

                textAlign: 'right',
              }}>
             
              <Text style={styles.btnjml}>
			                   {this.state.listData.map((val, index) => (
                  <Text key={index}>
                                  
                      <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginVertical: 10,
                  }}>
                     {val.jumlah} 
                      </Text>
                  
                  </Text>
                ))}
			  </Text>

            </View>
          </View>
          <View style={styles.garis}></View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: 20,
              marginLeft: 30,
            }}>
            <Text style={styles.btnjml}>Total Pembayaran : </Text>
            <Text style={styles.btnjml}>
			                  {this.state.listData.map((val, index) => (
                  <Text key={index}>
                                  
                      <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    marginVertical: 10,
                  }}>
                    {val.total_real}  {val.atau}     {val.total_rupian}  
                      </Text>
                  
                  </Text>
                ))}
			</Text>
          </View>
        </View>
		</View>
  
        </ScrollView>
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
                  onPress={() => this.props.navigation.navigate('Muslim',{nama:nama,kategori:kategori, jumlahbeli:jumlahbeli})}>
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
                  <Text style={{marginBottom: 20,color:'orange'}}>Notifikasi</Text>
                </TouchableOpacity>
              </View>
			   </View>
		</SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  flexrow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
  },
  flexico: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  btnjml: {
    fontSize: 16,
    textAlign: 'right',

    fontWeight: 'bold',
    marginTop: 10,
  },
  icoresto: {
    width: 70,
    height: 70,
    maxWidth: 80,
  },
  bntbyr: {
    fontSize: 15,
    color: 'red',
    marginTop: 10,
  },
  garis: {
    borderBottomWidth: 1,
    borderStyle: 'dashed',
    borderBottomColor: 'grey',
    marginTop: 10,
  },
  icoprofil: {fontSize: 16, fontWeight: 'bold', marginTop: -5},
  row2: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },

  row2ico: {
    maxWidth: 180,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#eaeaea',
    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: 20,
    fontWeight: 'bold',
  },
  welcomebg: {
    height: 80,
    backgroundColor: '#1b2333',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconbackstyle: {
    marginLeft: 20,
    marginTop: 30,
    width: 20,
  },

  card: {
    marginTop: 20,
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 20,
  },
});
