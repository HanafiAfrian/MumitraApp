import React, {Component} from 'react';
import CustomButton from './CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Text,
  TextInput,
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
export default class Authotp extends Component {
	  constructor(props) {
    super(props);
    this.state = {
     
      listData: [],
      idEdit: null,
    };

    this.url = 'https://mutawif.co.id/api/muapi/ambilakunmitra.php';
  }
  componentDidMount() {
    this.ambilListData();
  }

  async ambilListData() {
    var telepon = this.props.route.params.name;
  var name = this.props.route.params.name;
	
    await fetch(this.url + '/?op=pilihprofil&telepon=' + telepon)
      .then(response => response.json())
      .then(json => {
		    this.setState({nama: json.data.result[0].nama });
                this.setState({ email: json.data.result[0].email })
                this.setState({ telepon: json.data.result[0].telepon })
				 this.setState({ kategori: json.data.result[0].kategori })
        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
		
        this.setState({listData: json.data.result});
		
		 this.props.navigation.replace('Auth');
                try {
                  var user = {
                    Name: this.props.route.params.name,
                    Age: this.state.telepon,
                    Email: this.state.email,
					 Kategori: this.state.kategori,
                  };
                  AsyncStorage.setItem('UserData', JSON.stringify(user));
                  navigation.replace('Auth');
                } catch (error) {
                  console.log(error);
                }
		
		
      })
      .catch(error => {
        console.log(error);
      });
  }
	
  render() {
	 var name = this.props.route.params.name;
	    
	 	
    return (
      
				<Text>
		
                  
			
			
       </Text>
    );
  }
}
