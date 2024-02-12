import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
   Linking,
} from 'react-native';
import {Mitraseven} from '../../assets';
import Icon from 'react-native-vector-icons/FontAwesome';
import Beranda from './../../assets/icons/home.png';
import Notifikasi from './../../assets/icons/notifikasi.png';


import {Doa, Pesanan, Saldo, Chat, Jadwal, Profil, IconHomeNew, } from '../../assets';

export default class Orderan extends Component {
	
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
		  this.setState({username:json.data.result[0].username});
   this.setState({nama_produk:json.data.result[0].nama_produk});  
   this.setState({telepon:json.data.result[1].telepon});
    this.setState({latitudecostumer:json.data.result[0].latitudecostumer});
   this.setState({longitudecostumer:json.data.result[0].longitudecostumer});
      this.setState({invoice:json.data.result[0].invoice});
   this.setState({status:json.data.result[0].status});
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
		
      })
      .catch(error => {
        console.log(error);
      });
  }
   klikSimpan() {
     if(this.state.nama_produk == '')
   {
      alert('Tidak Ada Pesanan Aktif');
	   
   }
   else {
      alert('Pesanan di batalkan');
	   this.props.navigation.replace('Splash');
    } 
   }
	  klikSimpan1() {
		  var nama =	this.props.route.params.nama; 
   if(this.state.nama_produk == '')
   {
      alert('Tidak Ada Pesanan Aktif');
	   
   }
   
   else 
   {
				this.props.navigation.navigate('TibadiLokasi',
			  {username:nama, nama:this.state.username, 
			  nama_produk : this.state.nama_produk,
			  	  telepon : this.state.telepon,
			  latitudecostumer:this.state.latitudecostumer,
			  longitudecostumer:this.state.longitudecostumer,
			  invoice:this.state.invoice})
   }
    } 
	
  render() {
	    var jumlahbeli =	this.props.route.params.jumlahbeli; 
	     if (this.state.status=="Proses")
   {
   
this.props.navigation.replace('Diperjalanan',
			  {username:nama, nama:this.state.username, 
			  nama_produk : this.state.nama_produk,
			  latitudecostumer:this.state.latitudecostumer,
			    telepon : this.state.telepon,
			  longitudecostumer:this.state.longitudecostumer,
			  invoice:this.state.invoice})
	  }
	  
	  
	  
	     else if (this.state.status=="Kirim")
   {
 this.props.navigation.replace('SudahSampai',
			  {username:nama, nama:this.state.username, 
			  nama_produk : this.state.nama_produk,
			  latitudecostumer:this.state.latitudecostumer,
			    telepon : this.state.telepon,
			  longitudecostumer:this.state.longitudecostumer,
			  invoice:this.state.invoice})
	  }
	  
	    var nama =	this.props.route.params.nama; 
		 var kategori =	this.props.route.params.kategori; 
    return (
        <SafeAreaView style={{flex :1 }}>
     <ScrollView style={{flex :1, backgroundColor: 'black',}} >
		
			 <View style={styles.luar}>
       
          <View style={styles.dalam}>
		     <Text  style={{color: 'white', fontSize: 16 }} >
                    Nama Costumer 
                      </Text>
                <Text style={{marginTop: 10,color: 'white', fontSize: 18,marginTop: -24, marginLeft: 122, }} >
						  :
                      </Text>
			  {this.state.listData.map((val, index) => (
                 <View key={index}>
		     
                                  
                    <Text style={{color: 'white', fontSize: 18,marginTop: -24, marginLeft: 135,}} >
						 {val.username}
                      </Text>
                   
                </View>
                ))}
			     <Text  style={{color: 'white', fontSize: 16, marginTop: 1, }} >
                    Nomor Telepon 
                      </Text>
					     
					  
					       <Text style={{color: 'white', fontSize: 18,marginTop: -24, marginLeft: 122, }} >
						  :
                      </Text> 
			    {this.state.listData.map((val, index) => (
                 <View key={index}>
		     
                                  
                    <Text style={{color: 'white', fontSize: 18,marginTop: -24, marginLeft: 135, }} >
						{val.telepon} 
                      </Text>
                   
                </View>
                ))}
			  
			  
			    <Text  style={{color: 'white', fontSize: 16 , marginTop: 1,}} >
                  Pesanan  
                      </Text>
					  
					       <Text style={{color: 'white', fontSize: 18,marginTop: -24, marginLeft: 122, }} >
						  :
                      </Text> 
			    {this.state.listData.map((val, index) => (
                 <View key={index}>
		     
                                  
                    <Text style={{color: 'white', fontSize: 18,marginTop: -24, marginLeft: 135, }} >
				  {val.nama_produk}    {val.jumlah} 
                      </Text>
                   
                </View>
                ))} 
			  
       
		  
		  
				  <Text  style={{color: 'white', fontSize: 16 , marginTop: 1,}} >
                 Lokasi 
                      </Text>
					     <Text style={{color: 'white', fontSize: 18,marginTop: -24, marginLeft: 122, }} >
						  :
                      </Text>
			    {this.state.listData.map((val, index) => (
                 <View key={index}>
		     
                                  
                    <Text style={{color: 'white', fontSize: 18,marginTop: -24, marginLeft: 135, }} >
				  {val.tempat}    
                      </Text>
                   
                </View>
                ))}
				
					  <Text  style={{color: 'white', fontSize: 16 , marginTop: 1,}} >
                 Waktu 
                      </Text>
					      <Text style={{color: 'white', fontSize: 18,marginTop: -24, marginLeft: 122, }} >
						  :
                      </Text>
			    {this.state.listData.map((val, index) => (
                 <View key={index}>
		     
                                  
                    <Text style={{color: 'white', fontSize: 18,marginTop: -24, marginLeft: 135, }} >
			   {val.waktu_pemesanan} - {val.jam_pemesanan}     
                      </Text>
                   
                </View>
                ))}
  <View >
           
			  {this.state.listData.map((val, index) => (
                  <Text key={index}>
                                  
                  
                    <Text style={styles.asal}>
                     {val.jenis}    {val.subjenis} 
                      </Text>
                  </Text>
                ))}
			  
     
    
			  
			  
			 
			

			  
			  
			   
             
            </View>
        <View style={{marginTop: -30}}>
		
		 <Text  style={{color: 'white', fontSize: 16 }} >
                Pembayaran
                      
			    </Text>
					      <Text style={{color: 'white', fontSize: 18,marginTop: -24, marginLeft: 122, }} >
						  :
                      </Text>
			  
			  
			    {this.state.listData.map((val, index) => (
                <Text style={{color: 'white', fontSize: 17,marginTop: -22, marginLeft: 134, }} >
                                  
              {val.metode_pembayaran} 
                   
                      </Text>
                
                ))}
  <Text  style={{color: 'white', fontSize: 16 }} >
                 Total Biaya 
                      
			    </Text>
					      <Text style={{color: 'white', fontSize: 18,marginTop: -24, marginLeft: 122, }} >
						  :
                      </Text>
			  
			  
			    {this.state.listData.map((val, index) => (
                <Text style={{color: 'white', fontSize: 17,marginTop: -22, marginLeft: 134, }} >
                                  
              {val.total_real} {val.atau} {val.total_rupian} 
                   
                      </Text>
                
                ))}
               <Text  style={{color: 'white', fontSize: 16 }} >
                 Status 
                      </Text>
					  	      <Text style={{color: 'white', fontSize: 18,marginTop: -24, marginLeft: 122, }} >
						  :
                      </Text>
			  {this.state.listData.map((val, index) => (
                  <Text style={{color: 'white', fontSize: 18,marginTop: -22, marginLeft: 135, }} >
                                  
                   
                     {val.status}  
                      </Text>
                
                ))}
            </View>
			
          </View>

         
          <View style={styles.detail}>
            <View style={styles.closeview}>
              <Icon
                name="times"
                size={30}
                color="#900"
                style={{alignSelf: 'center', marginTop: 5}}
				onPress={() => this.klikSimpan()}
              />
            </View>
			
			{this.state.listData.map((val, index) => (
                 
                                  
               
                      <TouchableOpacity key={index}
             	onPress={() => this.klikSimpan1()}>
              <View style={styles.acc}>
                <Text style={styles.terima}>Terima</Text>
                <Text style={styles.time}> </Text>
              </View>
            </TouchableOpacity>
                   
                  
                
                ))}
			
			
         
          </View>
        </View>
		  <View style={styles.closeview2}>
           
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
                  <Text style={{marginBottom: 20, color:'orange'}}>Orderan</Text>
                </TouchableOpacity>
              </View>
			  
			  
			   <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <TouchableOpacity
                  onPress={() =>this.props.navigation.navigate('Notifikasi',{nama:nama,kategori:kategori, jumlahbeli:jumlahbeli})}>
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
  statuspemb: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  terima: {
    fontSize: 16,
    fontWeight: 'bold',
	 alignItems:'center', 
	 textAlign: 'center',
	    marginLeft: 35,
		
  },
  time: {
 
    padding: 10,
    borderRadius: 50,
  },
  acc: {
    backgroundColor: '#06a22f',
    borderWidth: 1,
    borderColor: '#06a22f',
    padding: 10,
    borderRadius: 30,
    width: '70%',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 20,
	
  },
  closeview: {
    borderWidth: 1,
    borderColor: '#900',
    padding: 10,
    borderRadius: 30,
    width: '35%',
	  marginBottom: 10,
  },
  
    closeview2: {
    borderWidth: 0,
    borderColor: 'white',
    padding: 10,
    borderRadius: 0,
    width: '0%',
	  marginBottom: 10,
  },
  detail: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  harga: {
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  pendapatan: {
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  bayar: {
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  jarak: {
    fontWeight: 'bold',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  asal: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  tujuan: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  jarak: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  dalam: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 10,
    marginTop: 10,
  },
  sebaris: {
    display: 'flex',
    flexDirection: 'row',
    justifyContentL: 'flex-start',
	  marginTop: -20,
  },
  icoresto: {
    width: 25,
    height: 25,
    maxWidth: 80,
    marginRight: 10,
  },
  luar: {
	  marginTop: 10,
	  marginLeft: 30,
	   marginRight: 20,
	  },
});
