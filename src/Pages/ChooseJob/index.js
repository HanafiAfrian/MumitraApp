import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import FontAwesome, {Icons} from 'react-native-fontawesome';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome';
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
  IconHajaswad,
  IconMufood,
  IconMassage,
  IconTaxi,
  IconLaundry,
} from '../../assets';

export class ChooseJob extends Component {
  render() {
    return (
      <ScrollView style={{backgroundColor: '#eaeaea'}}>
        <View style={styles.welcomebg}>
          <TouchableOpacity style={styles.iconbackstyle}     onPress={() => this.props.navigation.replace('FrmLoginFirst')}>
            <Icon name="chevron-left" size={20} color="#fff" />
            {/* <FontAwesome>{Icons.chevronLeft}</FontAwesome> */}
          </TouchableOpacity>
          <View>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontSize: 18,
                marginBottom: -20,
                marginTop: 0,
                fontWeight: 'bold',
				
              }}>
              
            </Text>
            <Text style={styles.welcome}onPress={() => this.props.navigation.replace('FrmLoginFirst')}>Pilih Pekerjaan Anda</Text>
          </View>
          <View></View>
        </View>

        <View style={styles.konten}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('FrmDaftar')}>
            <View style={styles.boxicon}>
              <Image source={IconNasibox} style={styles.iconstyle} />
              <Text
                style={{textAlign: 'center', fontSize: 12, fontWeight: 'bold', color:'gray'}}>
                Meal Box
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('FrmDaftarMutawif')}>
            <View style={styles.boxicon}>
              <Image source={IconMutawif} style={styles.iconstyle} />
              <Text
                style={{textAlign: 'center', fontSize: 12, fontWeight: 'bold', color:'gray'}}>
                Mutawif
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('FrmDaftarKursiRoda')}>
            <View style={styles.boxicon}>
              <Image source={IconKursiroda} style={styles.iconstyle} />
              <Text
                style={{textAlign: 'center', fontSize: 12, fontWeight: 'bold', color:'gray'}}>
                Kursi Roda
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('FrmDaftarMutawifah')}>
            <View style={styles.boxicon}>
              <Image source={IconMutawifah} style={styles.iconstyle} />
              <Text
                style={{textAlign: 'center', fontSize: 12, fontWeight: 'bold', color:'gray'}}>
                Mutawifah
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('FrmDaftarHospital')}>
            <View style={styles.boxicon}>
              <Image source={IconHospital} style={styles.iconstyle} />
              <Text
                style={{textAlign: 'center', fontSize: 12, fontWeight: 'bold', color:'gray'}}>
                Hospital
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('FrmDaftarCheckInCheckOut')}>
            <View style={styles.boxicon}>
              <Image source={IconCheckin} style={styles.iconstyle} />
              <Text
                style={{textAlign: 'center', fontSize: 12, fontWeight: 'bold', color:'gray'}}>
                Check In/Check Out
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('FrmDaftarMoneyChanger')}>
            <View style={styles.boxicon}>
              <Image source={IconMoney} style={styles.iconstyle} />
              <Text
                style={{textAlign: 'center', fontSize: 12, fontWeight: 'bold', color:'gray'}}>
                Money Changer
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('FrmDaftarHajarAswad')}>
            <View style={styles.boxicon}>
              <Image source={IconHajaswad} style={styles.iconstyle} />
              <Text
                style={{textAlign: 'center', fontSize: 12, fontWeight: 'bold', color:'gray'}}>
                Hajar Aswad
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('FrmDaftarMUFood')}>
            <View style={styles.boxicon}>
              <Image source={IconMufood} style={styles.iconstyle} />
              <Text
                style={{textAlign: 'center', fontSize: 12, fontWeight: 'bold', color:'gray'}}>
                MU-Food
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('FrmDaftarMassage')}>
            <View style={styles.boxicon}>
              <Image source={IconMassage} style={styles.iconstyle} />
              <Text
                style={{textAlign: 'center', fontSize: 12, fontWeight: 'bold', color:'gray'}}>
                Massage
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('FrmDaftarTaxi')}>
            <View style={styles.boxicon}>
              <Image source={IconTaxi} style={styles.iconstyle} />
              <Text
                style={{textAlign: 'center', fontSize: 12, fontWeight: 'bold', color:'gray'}}>
                Taxi
              </Text>
            </View>
          </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('FrmDaftarSimCard')}>
              <View style={styles.boxicon}>
                <Image source={IconSim} style={styles.iconstyle} />
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 12,
                    fontWeight: 'bold', color:'gray'
                  }}>
                  Sim Card
                </Text>
              </View>
            </TouchableOpacity>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',

              width: '100%',
            }}>
         
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('FrmDaftarLaundry')}>
              <View style={styles.boxicon}>
                <Image source={IconLaundry} style={styles.iconstyle} />
                <Text
                  style={{
                    textAlign: 'center',
                    fontSize: 12,
                    fontWeight: 'bold', color:'gray'
                  }}>
                  Laundry
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default ChooseJob;

const styles = StyleSheet.create({
  konten: {
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 20,
    padding: 20,
    paddingTop: -10,
  },
  boxicon: {width: 80, marginTop: 10},
  iconstyle: {
    alignSelf: 'center',
    marginTop: 20,
    width: 50,
    height: 50,
  },

  iconbackstyle: {
    marginLeft: 20,
    marginTop: 30,
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#eaeaea',
    fontSize: 18,
    fontFamily: 'Lato',
    marginTop: 22,
    fontWeight: 'bold',
  },
  welcomebg: {
    height: 80,
    backgroundColor: '#1b2333',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
