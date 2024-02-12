import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Buku} from '../../assets';

export default class Doa extends Component {
  render() {
    return (
      <ScrollView>
        <View>
          <Image style={styles.buku} source={Buku} />
          <TouchableOpacity
            style={styles.roundButton1}
            onPress={() => this.props.navigation.navigate('DoaDetail')}>
            <Text
              style={{
                color: 'white',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              LIHAT DOA
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  buku: {
    width: '96%',
    height: 480,
    alignSelf: 'center',
    marginTop: 5,
  },

  roundButton1: {
    marginBottom: 20,
    width: '96%',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 5,
    // borderRadius: 5,
    backgroundColor: '#e6b86a',
    borderRadius: 5,
    alignSelf: 'center',
  },
});
