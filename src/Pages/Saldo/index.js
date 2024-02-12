import React, {Component} from 'react';
import {Text, StyleSheet, Button,View, ImageBackground} from 'react-native';
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
            <Text style={{fontSize: 14}}>Saldo Wallet</Text>
            <Text style={{fontSize: 28, fontWeight: 'bold'}}>  <View>
           {this.state.listData.map((val, index) => (
                  <Text key={index}>
                                  
                     <Text style={{fontSize: 28, fontWeight: 'bold'}}> 
                     SR {val.saldo} 
                      </Text>
                  
                  </Text>
                ))}
        </View></Text>
            <Text
              style={{fontSize: 12, marginTop: 20, zIndex: 2, maxWidth: '90%'}}>
              Perbanyak transaksi untuk mendapatkan lebih banyak bonus
            </Text>
          </View>
          <View>
           
          </View>
		   <View>
            <TouchableOpacity
              style={{
                width: 50,
                marginTop: 5,
                alignContent: 'center',
                // marginLeft: -40,
                // backgroundColor: 'red',
              }}
			  
			  onPress={() => this.props.navigation.navigate('Saldotarik',{telepon:telepon})}
			  >
              <View style={{marginLeft: 15}}>
                <Icon
                  name="minus-square-o"
                  size={30}
                  color="black"
                  // style={{marginTop: -5}}
				  onPress={() => this.props.navigation.navigate('Saldotarik',{telepon:telepon})}
                />
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginLeft: -5,
                    marginTop: -2,
                    color: 'black',
					
                  }}
				  onPress={() => this.props.navigation.navigate('Saldotarik',{telepon:telepon})}>
                  Tarik
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* </ImageBackground> */}
        </View>

        <View style={styles.riwayat}>
          <Text
            style={{
              marginLeft: 20,
              fontWeight: 'bold',
              fontSize: 22,
              padding: 10,
            }}>
            Riwayat Penarikan
          </Text>
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: '#eaeaea',
              marginLeft: 20,
              marginRight: 20,
              marginTop: 5,
            }}></View>

          <View
            style={{
              marginLeft: 20,
              marginRight: 20,

              paddingTop: 20,
              paddingBottom: 20,
              padding: 10,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.lasttx}>SR. 0</Text>
              <Text></Text>
            </View>
            <View>
              <Text style={styles.desc}>Status : Pending</Text>
            </View>
          </View>

          <View
            style={{
              marginLeft: 20,
              marginRight: 20,

              paddingTop: 20,
              paddingBottom: 20,
              padding: 10,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={styles.lasttx}>SR. 0</Text>
              <Text></Text>
            </View>
            <View>
              <Text style={styles.desc}>Status : Sukses</Text>
            </View>
			<View style={styles.styleLoginBtn}>
            <Button
            color="red" //button color
            title="Top Up"
            onPress={() => this.props.navigation.navigate('Saldotopup',{telepon:telepon})}
             />
          </View>
          </View>
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
  styleLoginBtn: {
        marginTop: 30,
        marginLeft: 5,
        marginRight: 5,
        borderWidth: 5,
        borderColor: "red",
        overflow: "hidden",
        marginBottom: 30,
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
    height: 140,
    borderRadius: 5,
  },

  riwayat: {
    backgroundColor: 'white',
  },
});
