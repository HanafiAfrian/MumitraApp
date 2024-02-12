import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {Kurma} from '../../assets';
import {ScrollView} from 'react-native-gesture-handler';

export default class InfoTiga extends Component {
  render() {
    return (
      <ScrollView>
        <Image style={{marginTop: -60}} source={Kurma} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({});
