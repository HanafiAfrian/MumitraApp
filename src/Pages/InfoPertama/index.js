import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {Baju} from '../../assets';
import {ScrollView} from 'react-native-gesture-handler';

export default class InfoPertama extends Component {
  render() {
    return (
      <ScrollView>
        <Image style={{marginTop: -60}} source={Baju} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
