import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Alert,
    TextInput,
} from 'react-native';
import CustomButton from './CustomButton';
import GlobalStyle from './GlobalStyle';

export default function Auth({ navigation, route }) {
const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
	 const [kategori, setKategori] = useState('');
	
 useEffect(() => {
        getData();
    }, []);
 const getData = () => {
        try {
            AsyncStorage.getItem('UserData')
                .then(value => {

                 if (value == null) {
                    
                       AsyncStorage.clear();
                      navigation.navigate('FrmLoginFirst');
                  
                } 

             else {

                        let user = JSON.parse(value);
						setAge(user.Age);
                        setName(user.Name);
                        
                        setEmail(user.Email);
                        setKategori(user.Kategori);
                   

                    
						
        setTimeout( () => {
		navigation.replace('Home',{name: user.Name, kategori:user.Kategori ,age : user.Age, email :user.Email});
        }, 2)
             
                

    


			 }

                })
        } catch (error) {
            console.log(error);
        }
    }


    const removeData = async () => {
        try {
            await AsyncStorage.clear();
            navigation.navigate('Splash');
        } catch (error) {
            console.log(error);
        }
    }
  

    return (
        <View style={styles.body}>
  
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
    },
    input: {
        width: 300,
        borderWidth: 1,
        borderColor: '#555',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        textAlign: 'center',
        fontSize: 20,
        marginTop: 130,
        marginBottom: 10,
    }
})