import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Mitraseven} from '../../assets';

export default class PesananAktif extends Component {
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
  var nama =	this.props.route.params.username;

	
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
	    var username =	this.props.route.params.nama; 
		  var nama =	this.props.route.params.username;
    return (
      <ScrollView
        style={{
          backgroundColor: 'white',
        }}>
        <View style={styles.barisprofil}>
          <Icon
            name="user"
            size={30}
            color="grey"
            style={{
              alignSelf: 'center',
              marginTop: 5,
              marginRight: 20,
            }}
          />
          <Text
            style={{
              fontSize: 14,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
			{nama}
          </Text>
        </View>
        <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}></View>
        <View style={styles.sebarisdua}>
      
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
		   {this.state.listData.map((val, index) => (
                  <Text key={index}>
                                  
                   <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                     {val.nama_produk}    {val.jumlah}   
                      </Text>
                  
                  </Text>
                ))}
		  </Text>
        </View>
		  <View style={styles.sebarisdua}>
      
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
		   {this.state.listData.map((val, index) => (
                  <Text key={index}>
                                  
                   <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                     {val.jenis}    {val.subjenis}   
                      </Text>
                  
                  </Text>
                ))}
		  </Text>
        </View>
        <Text style={{marginLeft: 0, paddingHorizontal: 20, marginBottom: 10}}>
            {this.state.listData.map((val, index) => (
               
                                  
                   <Text style={{fontSize: 18, fontWeight: 'bold'}} key={index}>
                     {val.tempat}   
                      </Text>
                  
                
                ))}
        </Text>
        <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}></View>
        <View style={styles.sebaristiga}>
    
      
        </View>
        <View style={styles.sebaristiga}>
          <Text style={{fontSize: 18, fontWeight: 'bold', paddingVertical: 10, color:'red'}}>
            Harga
          </Text>
         <Text style={{fontSize: 18, fontWeight: 'bold', paddingVertical: 10}}>  {this.state.listData.map((val, index) => (
                  <Text key={index}>
                                  
                   <Text style={{fontSize: 18, fontWeight: 'bold', color:'red'}}>
                     {val.total_real}  {val.atau}     {val.total_rupian}  
                      </Text>
                  
                  </Text>
                ))} </Text>
        </View>
        <View style={{borderBottomWidth: 1, borderBottomColor: 'grey'}}></View>
        
      
        <View style={styles.barisdetail}>
          <Text></Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Orderan')}>
            <Text
              style={{
                color: 'red',
                fontSize: 16,
                paddingVertical: 10,
              }}>
              Belum Bayar
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  detailbaris: {},
  sebarisharga: {},
  sebaris: {
    display: 'flex',
    flexDirection: 'row',
    justifyContentL: 'flex-start',
  },
  sebarisdua: {
    paddingHorizontal: 20,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContentL: 'flex-start',
  },
  sebaristiga: {
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  barisdetail: {
    marginTop: 10,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  icoresto: {
    width: 25,
    height: 25,
    maxWidth: 80,
    marginRight: 10,
  },
  barisprofil: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginHorizontal: 20,
    marginVertical: 20,
  },

  produkimg: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    // marginHorizontal: 20,
    width: 80,
    height: 80,
    marginVertical: 10,
  },
});
