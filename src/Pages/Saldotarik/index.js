import React, {Component} from 'react';
import {Text, StyleSheet, View, ImageBackground,TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import CustomButton from './CustomButton';
import GlobalStyle from './GlobalStyle';
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
this.setState({nama_lengkap:json.data.result[0].nama_lengkap});
this.setState({nomor_rekening:json.data.result[0].nomor_rekening});
this.setState({saldo:json.data.result[0].saldo});
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
      })
      .catch(error => {
        console.log(error);
      });
  }
  klikSimpan(){
	
	var saldo = +this.state.saldo;
		   if(this.state.nominal > saldo){
        alert('Saldo Anda Tidak Mencukupi Untuk di Tarik');
      }else{
          if(this.state.idEdit){
            var urlAksi = this.url+"/?op=update&id="+this.state.idEdit;
          }else{
            var urlAksi = this.url+"/?op=pesan";
		
		var nominal =	this.state.nominal; 
		var nama_lengkap =	this.state.nama_lengkap; 
		var nomor_rekening =	this.state.nomor_rekening; 
		
var telepon = this.props.route.params.telepon;

     }
          

          fetch(urlAksi,{
              method:'post',
              headers:{
                  'Content-Type':'application/x-www-form-urlencoded'
              },
              body:
					"&nominal="+nominal+
					"&nama="+nama_lengkap+
					"&nomor_rekening="+nomor_rekening
					
					
          })
          .then((response)=>response.json())
          .then((json)=>{
			    alert ('Terimakasi telah melakukan penarikkan, Pemintaan akan di proses');
			 this.props.navigation.navigate('Saldo', {	
			telepon : telepon,			 
			
			 });
                           this.ambilListData();
          })
      }
       
		 
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
		  
{this.state.listData.map((val, index) => (
                  <Text key={index}>
                                  
                     <Text style={{fontSize: 18, color :'black'}}> 
                     Nama Lengkap    : {val.nama_lengkap} 
                      </Text>
                  
                  </Text>
				  
                ))}
        
{this.state.listData.map((val, index) => (
                  <Text key={index}>
                                  <Text style={{fontSize: 18, color :'black'}}></Text>
                     <Text style={{fontSize: 18, color :'black'}}> 
                    Nomor Rekening  : {val.nomor_rekening}


                      </Text>
                  
                  </Text>
                ))}
				{this.state.listData.map((val, index) => (
                  <Text key={index}>
                                  <Text style={{fontSize: 18, color :'black'}}></Text>
                     <Text style={{fontSize: 18, color :'black'}}> 
                   


					Saldo Anda            : {this.state.saldo}
                      </Text>
                  
                  </Text>
                ))}
				<View>

                </View>
					<Text style={styles.subformtext}></Text>
				<Text style={styles.subformtext}>Nominal :</Text>
					<Text style={styles.subformtext}></Text>
				 <TextInput
                style={styles.inputform}
                placeholder="100.000"
                 value = {this.state.nominal}
				 keyboardType = 'numeric'
				  placeholderTextColor="black"
                 onChangeText = {(text) => this.setState({nominal: text })}
                underlineColorAndroid="transparent"
              />
			  <CustomButton
			  style={{  
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 40,
	  textAlign: 'center',
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 100,}}
              title='Submit'
              color='#0d7883'
onPressFunction={() => this.klikSimpan()}
         
			  
          />
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
    height: 320,
    borderRadius: 5,
  },

  riwayat: {
    backgroundColor: 'white',
  },
    input: {
    borderBottomWidth: 1,
color : "black",
    width: 140,
    borderColor: '#eaeaea',
    marginBottom: 10,
  },
   subformtext: {
    marginLeft: 8,
    color: 'black',
  },
    inputform: {
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    borderColor: 'black',
	color : "black",
    // marginTop: 10,
    marginBottom: 10,
  },
});
