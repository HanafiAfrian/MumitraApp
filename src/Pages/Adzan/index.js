import React, {Component , useState, useEffect } from 'react';
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {Bgadzan} from '../../assets';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment'


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

class Ambilwaktu extends Component {
  render() {
    const date= new Date()

 
    return (
      <View>
        <Text style={{
                      color: 'white',
                      marginLeft: -3,
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}> {moment(date).format('LL')} </Text>
      
 
      </View>
    )
  }
}

class Tanggalhijriyah extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tanggal: '',
   
      listData: [],
      idEdit: null,
    };

    this.url = 'https://mutawif.co.id/api/muapi/tanggal_hijriyah.php';
  }
  componentDidMount() {
    this.ambilListData();
  }

  async ambilListData() {
 
    await fetch(this.url)
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
  
    return (
         <View>
            {
                this.state.listData.map((val,index)=>(
                   
                        <Text  style={{
                      color: 'white',
                      marginLeft: 0,
                        fontSize: 18,
                      fontWeight: 'bold',
                    }}>{val.tanggal}</Text>

                  
                ))
            }
        </View>
    );
  }
}

export default class Adzan extends Component {
	constructor(props) {
    super(props);
    this.state = {
      tanggal: '',
   
      listData: [],
      idEdit: null,
	   date: new Date(),
    mode: 'date',
    tampil: false,
    };

    this.url = 'https://mutawif.co.id/api/muapi/adzan.php';
  }
  componentDidMount() {
    this.ambilListData();
  }

  async ambilListData() {
 
    await fetch(this.url)
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
	  
    return (
      <SafeAreaView style={{backgroundColor: '#222a32', flex: 1}}>
        <ImageBackground
          source={Bgadzan}
          resizeMode="cover"
          style={styles.image}>
          <ScrollView style={{marginLeft: 10, marginRight: 10}}>
            <View>
              <View style={styles.textone}>
             
                <Icon name="compass" size={22} color="#fff" />
              </View>

              <View>
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: 30,
                    fontWeight: 'bold',
                  }}>
                  <Jam /><Text style={{fontWeight: 'normal'}}> </Text>
                </Text>
              
              </View>

              <View style={styles.textone}>
                <Text></Text>
                <Icon name="calendar" size={22} color="#fff" />
              </View>

              <View style={styles.textone}>
                <Text style={{color: 'white'}}>
				<Ambilwaktu />
				
				</Text>
                <Text style={{color: 'white'}}>
				
				<Tanggalhijriyah />



				 </Text>
              </View>
            </View>

            <View style={{marginBottom: 20}}>
              <View>
                <View style={styles.boxsolat}>
                  <View>
                    <Text style={{fontSize: 28, color: 'white'}}>Subuh</Text>
                  </View>
                  <View>
                    <Text>
                      <View>
           {this.state.listData.map((val, index) => (
                  <Text key={index}>
                                  
                                 <Text style={{fontSize: 20, color: 'white',   fontWeight: 'bold',}}>
                     {val.Shubuh} 
                      </Text>
                  
                  </Text>
                ))}
        </View> <Icon name="clock-o" size={28} color="orange" />
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.boxsolat}>
                  <View>
                    <Text style={{fontSize: 28, color: 'white'}}>Terbit</Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 20, color: 'white',   fontWeight: 'bold',}}>
                     {this.state.listData.map((val, index) => (
                  <Text key={index}>
                                  
                                 <Text style={{fontSize: 20, color: 'white',   fontWeight: 'bold',}}>
                     {val.Terbit} 
                      </Text>
                  
                  </Text>
                ))} <Icon name="clock-o" size={28} color="orange" />
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.boxsolat}>
                  <View>
                    <Text style={{fontSize: 28, color: 'white'}}>Dzuhur</Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 28, color: 'white'}}>
                       {this.state.listData.map((val, index) => (
                  <Text key={index}>
                                  
                                 <Text style={{fontSize: 20, color: 'white',   fontWeight: 'bold',}}>
                     {val.Dzuhur} 
                      </Text>
                  
                  </Text>
                ))} <Icon name="clock-o" size={28} color="orange" />
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.boxsolat}>
                  <View>
                    <Text style={{fontSize: 28, color: 'white'}}>Ashar</Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 28, color: 'white'}}>
                          {this.state.listData.map((val, index) => (
                  <Text key={index}>
                                  
                                 <Text style={{fontSize: 20, color: 'white',   fontWeight: 'bold',}}>
                     {val.Ashr} 
                      </Text>
                  
                  </Text>
                ))} <Icon name="clock-o" size={28} color="orange" />
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.boxsolat}>
                  <View>
                    <Text style={{fontSize: 28, color: 'white'}}>Magrib</Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 28, color: 'white'}}>
                           {this.state.listData.map((val, index) => (
                  <Text key={index}>
                                  
                                 <Text style={{fontSize: 20, color: 'white',   fontWeight: 'bold',}}>
                     {val.Maghrib} 
                      </Text>
                  
                  </Text>
                ))} <Icon name="clock-o" size={28} color="orange" />
                    </Text>
                  </View>
                </View>
              </View>
              <View>
                <View style={styles.boxsolat}>
                  <View>
                    <Text style={{fontSize: 28, color: 'white'}}>Isya</Text>
                  </View>
                  <View>
                    <Text style={{fontSize: 28, color: 'white'}}>
                                {this.state.listData.map((val, index) => (
                  <Text key={index}>
                                  
                                 <Text style={{fontSize: 20, color: 'white',   fontWeight: 'bold',}}>
                     {val.Isya} 
                      </Text>
                  
                  </Text>
                ))} <Icon name="clock-o" size={28} color="orange" />
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  textone: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  boxsolat: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    backgroundColor: '#161b21',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
});
