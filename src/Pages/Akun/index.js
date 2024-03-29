import React, {Component} from 'react';

import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  ProfilePhoto,
  IconUsermenu,
  IconNext,
  IconVoc,
  IconPromo,
  IconPembayaran,
  IconBahasa,
  IconKeluar,
  IconFavorit,
  IconBantuan,
} from '../../assets';
import {IconAkun, Logouser, Logokey} from '../../assets';
import {IconBack} from '../../assets';
export default class Akun extends Component {
	  constructor(props) {
    super(props);
    this.state = {
      nama: '',
      telepon: '',
      alamat: '',
      listData: [],
      idEdit: null,
    };

    this.url = 'https://mutawif.co.id/api/muapi/ambilakunmitra.php';
  }
  componentDidMount() {
    this.ambilListData();
  }

  async ambilListData() {
    var telepon = this.props.route.params.nama_lengkap;
	var nama_lengkap = this.props.route.params.nama_lengkap;
	var email_pribadi = this.props.route.params.email_pribadi;
    await fetch(this.url + '/?op=pilihprofil&telepon=' + telepon)
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
	 
	    var telepon =	this.props.route.params.telepon; 
	 	 var nama_lengkap =	this.props.route.params.nama_lengkap; 
		 	 var email_pribadi =	this.props.route.params.email_pribadi; 
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#eaeaea'}}>
        <ScrollView>
          <View
            style={{
              backgroundColor: '#222a32',
              height: 180,
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginBottom: 20,
            }}>
           
            
           
          </View>
          <View
            style={{
              marginTop: -120,
              backgroundColor: 'white',
              margin: 20,
              borderRadius: 20,
              padding: 10,
            }}>
            <View style={styles.article}>
              <View
                style={{
                  alignContent: 'center',
                  alignItems: 'center',
                }}>
                <View>
                  <Image
                    style={{width: 70, height: 70, borderRadius: 60}}
                    source={ProfilePhoto}
                  />
                </View>
				<View>
            {
                this.state.listData.map((val,index)=>(
                   
                      <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray"}} key={index}>{val.nama}</Text>

                  
                ))
            }
        </View>
                <View>
                 

                 
                </View>
              </View>
            </View>
			
			 
            <View style={styles.containeruser1}></View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profilnama')}>
              <View style={styles.menustyle}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text style={styles.menutext}>Nama Lengkap</Text>
                </View>

                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <Text>  <View>
            {
                this.state.listData.map((val,index)=>(
                   
                        <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray"}}>{val.nama_lengkap}</Text>

                  
                ))
            }
        </View></Text>
                  <Image
                    style={{width: 14, height: 14, marginTop: 5, marginLeft: 5}}
                    source={IconNext}
                  />
                </View>
              </View>
            </TouchableOpacity>

            <View style={styles.garis}></View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profilemail')}>
              <View style={styles.menustyle}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text style={styles.menutext}>Email</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
  <Text> <View>
            {
                this.state.listData.map((val,index)=>(
                   
                        <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray"}}>{val.email}</Text>

                  
                ))
            }
        </View></Text>
                  <TouchableOpacity>
                    <Image
                      style={{
                        width: 14,
                        marginTop: 5,
                        marginLeft: 5,
                        height: 14,
                      }}
                      source={IconNext}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>

            <View style={styles.garis}></View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profilnohp')}>
              <View style={styles.menustyle}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text style={styles.menutext}>Nomor Handphone</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <Text><View>
            {
                this.state.listData.map((val,index)=>(
                   
                         <Text style={{textAlign: 'center', fontSize: 12 ,color: "gray"}}>{val.telepon}</Text>

                  
                ))
            }
        </View></Text>
                  <TouchableOpacity>
                    <Image
                      style={{
                        width: 14,
                        marginTop: 5,
                        marginLeft: 5,
                        height: 14,
                      }}
                      source={IconNext}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>

           
           
             

              
            {/* <View style={styles.garis}></View> */}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  roundButton1: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    // marginTop: -20,
    marginBottom: 20,
    borderRadius: 40,
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    alignSelf: 'center',
    marginTop: 80,
    marginBottom: 100,
  },

  menustyle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginTop: 25,
  },

  garis: {
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
    marginTop: 10,
  },

  logoiconmail: {
    width: 20,
    height: 20,
  },

  menutext: {
    marginLeft: 10,
	color: "black",
  },

  containeruser: {
    marginTop: 10,
    height: 60,
    // marginBottom: -20,
  },
  welcome1: {
    margin: 10,
    textAlign: 'center',
    fontSize: 24,
    textAlign: 'left',
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },

  welcome2: {
    marginLeft: 10,
    textAlign: 'center',
    fontSize: 18,
    textAlign: 'left',
    fontFamily: 'Lato',
    fontWeight: 'bold',
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 2,
  },
});
