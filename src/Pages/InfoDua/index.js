import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Gofish} from '../../assets';

export default class InfoDua extends Component {
  render() {
    return (
      <ScrollView>
        <Image style={{margin: 20}} source={Gofish} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
