import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Selesai extends Component {
  render() {
    return (
      <View style={{height: '100%'}}>
        <View style={styles.headerbg}>
          <Text style={styles.nama}> Nourman</Text>
          <Text style={styles.resto}> Seven Days</Text>
        </View>
        <View style={styles.map}>
          <Text>Maps</Text>
        </View>
        <View style={styles.rowkotak}>
          <TouchableOpacity style={styles.kotak}>
            <Icon
              name="phone"
              size={30}
              color="orange"
              style={{
                alignSelf: 'center',
                marginTop: 5,
              }}
            />
            <Text style={styles.textbtn}>Telfon</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.kotak}>
            <Icon
              name="comments-o"
              size={30}
              color="orange"
              style={{alignSelf: 'center', marginTop: 5}}
            />
            <Text style={styles.textbtn}>Chat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.kotak}>
            <Icon
              name="shopping-basket"
              size={30}
              color="orange"
              style={{alignSelf: 'center', marginTop: 5}}
            />
            <Text style={styles.textbtn}>Pesanan</Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: '#222a32', height: '20%'}}>
          <TouchableOpacity
            style={styles.buttonorder}
            onPress={() => this.props.navigation.navigate('Beranda')}>
            <Text style={styles.btntext}>Selesai</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  btntext: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'orange',
    borderRadius: 50,
    paddingVertical: 15,
    paddingHorizontal: 80,
  },
  buttonorder: {
    alignItems: 'center',
    marginVertical: 10,
  },
  rowkotak: {
    display: 'flex',
    flexDirection: 'row',
  },
  textbtn: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
  kotak: {
    width: '34%',
    height: 70,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: '#222a32',
  },
  map: {
    backgroundColor: 'yellow',
    height: '70%',
  },

  headerbg: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#222a32',
  },
  nama: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  resto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
  },
});
