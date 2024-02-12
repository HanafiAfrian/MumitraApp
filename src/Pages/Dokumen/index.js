import React, {Component} from 'react';
import {Text, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import {ScrollView} from 'react-native';
import {ProfilePhoto} from '../../assets';

import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default class Dokumen extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.welcomebg}>
          <TouchableOpacity
            style={styles.iconbackstyle}
            onPress={() => this.props.navigation.navigate('Daftar')}>
            {/* <Image source={IconBack} /> */}
            <Icon
              name="chevron-left"
              size={20}
              color="#fff"
              style={{marginTop: 30, marginLeft: 10}}
            />
          </TouchableOpacity>
          <Text style={styles.welcome}>
            Unggah <Text style={{color: 'orange'}}> Dokumen</Text>
          </Text>
        </View>
        <View style={styles.baris}>
          <View>
            <Text>Nourman Rizky Muda</Text>
            <Text>nourmanrizkymuda@gmail.com</Text>
            <Text>+6282274267112</Text>
          </View>
          <View>
            <Image source={ProfilePhoto} style={styles.iconstyle} />
          </View>
        </View>
        <View style={{borderBottomColor: 'grey', borderBottomWidth: 1}}></View>

        <View style={{padding: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Upload Berkas</Text>
          <Text>
            Mohon upload foto dan berkas-berkas berikut isi informasi yang
            dibutuhkan
          </Text>
        </View>

        {/* FOTO PROFIL */}
        <TouchableOpacity>
          <View style={styles.row1}>
            <View style={styles.row2}>
              <View style={styles.kotak}>
                <Icon
                  name="image"
                  size={40}
                  color="grey"
                  style={{alignSelf: 'center', marginTop: 15}}
                />
              </View>
              <View style={{marginLeft: 10, paddingVertical: '10%'}}>
                <Text style={{fontWeight: 'bold'}}>Foto Profil</Text>
                <Text>UPLOAD</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.garis}></View>
        {/*END FOTO PROFIL */}

        {/* FOTO FULL BODY */}
        <TouchableOpacity>
          <View style={styles.row1}>
            <View style={styles.row2}>
              <View style={styles.kotak}>
                <Icon
                  name="image"
                  size={40}
                  color="grey"
                  style={{alignSelf: 'center', marginTop: 15}}
                />
              </View>
              <View style={{marginLeft: 10, paddingVertical: '10%'}}>
                <Text style={{fontWeight: 'bold'}}>Foto Full Body</Text>
                <Text>UPLOAD</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.garis}></View>
        {/*END FULL BODY */}

        {/* Curiculum Vitae */}
        <TouchableOpacity>
          <View style={styles.row1}>
            <View style={styles.row2}>
              <View style={styles.kotak}>
                <Icon
                  name="image"
                  size={40}
                  color="grey"
                  style={{alignSelf: 'center', marginTop: 15}}
                />
              </View>
              <View style={{marginLeft: 10, paddingVertical: '10%'}}>
                <Text style={{fontWeight: 'bold'}}>Curiculum Vitae</Text>
                <Text>UPLOAD</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.garis}></View>
        {/* Curiculum Vitae*/}

        {/* KTP/ID ASLI */}
        <TouchableOpacity>
          <View style={styles.row1}>
            <View style={styles.row2}>
              <View style={styles.kotak}>
                <Icon
                  name="image"
                  size={40}
                  color="grey"
                  style={{alignSelf: 'center', marginTop: 15}}
                />
              </View>
              <View style={{marginLeft: 10, paddingVertical: '10%'}}>
                <Text style={{fontWeight: 'bold'}}>KTP/ID Asli</Text>
                <Text>UPLOAD</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.garis}></View>
        {/* KTP/ID ASLI */}

        {/* SKCK ASLI */}
        <TouchableOpacity>
          <View style={styles.row1}>
            <View style={styles.row2}>
              <View style={styles.kotak}>
                <Icon
                  name="image"
                  size={40}
                  color="grey"
                  style={{alignSelf: 'center', marginTop: 15}}
                />
              </View>
              <View style={{marginLeft: 10, paddingVertical: '10%'}}>
                <Text style={{fontWeight: 'bold'}}>SKCK Asli</Text>
                <Text>UPLOAD</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.garis}></View>
        {/* SKCK ASLI */}

        {/* BUKU REKENING */}
        <TouchableOpacity>
          <View style={styles.row1}>
            <View style={styles.row2}>
              <View style={styles.kotak}>
                <Icon
                  name="image"
                  size={40}
                  color="grey"
                  style={{alignSelf: 'center', marginTop: 15}}
                />
              </View>
              <View style={{marginLeft: 10, paddingVertical: '10%'}}>
                <Text style={{fontWeight: 'bold'}}>Buku Rekening</Text>
                <Text>UPLOAD</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.garis}></View>
        {/* SKCK ASLI */}

        <TouchableOpacity
          style={styles.roundButton1}
          onPress={() => this.props.navigation.navigate('Otp')}>
          <Text style={styles.btntext}>Konfirmasi</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  row1: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  row2: {
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  panah: {
    padding: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingVertical: '10%',
    justifyContent: 'flex-end',
  },

  garis: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginTop: -10,
    marginRight: 20,
    marginLeft: 20,
  },
  roundButton1: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 10,
    marginBottom: 20,
    marginTop: 10,
    borderRadius: 5,
    backgroundColor: 'orange',
  },

  btntext: {
    fontSize: 16,
    color: '#eaeaea',
    fontWeight: 'bold',
  },

  kotak: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'grey',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    color: '#eaeaea',
    fontSize: 24,
    fontFamily: 'Lato',
    marginTop: -28,
    fontWeight: 'bold',
  },
  welcomebg: {
    height: 80,
    backgroundColor: '#1b2333',
  },

  iconstyle: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },

  baris: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});
