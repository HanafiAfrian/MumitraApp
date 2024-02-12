import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {BottomNavigator} from '../components/';

import Home from '../Pages/Home';

import Splash from '../Pages/Splash';
import Saldo from '../Pages/Saldo';

import Profil from '../Pages/Profil';

// akun
import Profilnama from '../Pages/Profilnama';
import Profilemail from '../Pages/Profilemail';
import Profilnohp from '../Pages/Profilnohp';
import Profilrek from '../Pages/Profilrek';

import Notifikasi from '../Pages/Notifikasi';
import Masuk from '../Pages/Masuk';
import FrmLogin from '../Pages/FrmLogin';


import FrmLoginFirst from '../Pages/FrmLoginFirst';

import FrmDaftar from '../Pages/FrmDaftar';
import FrmDaftarCheckInCheckOut from '../Pages/FrmDaftarCheckInCheckOut';
import FrmDaftarHajarAswad from '../Pages/FrmDaftarHajarAswad';
import FrmDaftarHospital from '../Pages/FrmDaftarHospital';
import FrmDaftarKursiRoda from '../Pages/FrmDaftarKursiRoda';
import FrmDaftarLaundry from '../Pages/FrmDaftarLaundry';
import FrmDaftarMassage from '../Pages/FrmDaftarMassage';
import FrmDaftarMoneyChanger from '../Pages/FrmDaftarMoneyChanger';
import FrmDaftarMUFood from '../Pages/FrmDaftarMUFood';
import FrmDaftarMutawif from '../Pages/FrmDaftarMutawif';
import FrmDaftarMutawifah from '../Pages/FrmDaftarMutawifah';
import FrmDaftarSimCard from '../Pages/FrmDaftarSimCard';
import FrmDaftarTaxi from '../Pages/FrmDaftarTaxi';
import Lupapasswordnext from '../Pages/Lupapasswordnext';

import Auth from '../Pages/Auth';
import Authotp from '../Pages/Authotp';

import Chat from '../Pages/Chat';
import ChatDetail from '../Pages/ChatDetail';
import Saldotarik from '../Pages/Saldotarik';
import Saldotopup from '../Pages/Saldotopup';











import Otp from '../Pages/Otp';
import Dokumen from '../Pages/Dokumen';
import ChooseJob from '../Pages/ChooseJob';
// import InfoSatu from '../Pages/InfoSatu';
import InfoDua from '../Pages/InfoDua';
import InfoTiga from '../Pages/InfoTiga';
import InfoPertama from '../Pages/InfoPertama';
import Adzan from '../Pages/Adzan';
import Doa from '../Pages/Doa';
import DoaDetail from '../Pages/DoaDetail';
import Akun from '../Pages/Akun';
import BantuanFaq from '../Pages/BantuanFaq';
import Voucher from '../Pages/Voucher';
import Orderan from '../Pages/Orderan';
import Orderanmutawif from '../Pages/Orderanmutawif';
import Orderanmutawifah from '../Pages/Orderanmutawifah';
import OrderanRicebox from '../Pages/OrderanRicebox';
import OrderanKusrsiRoda from '../Pages/OrderanKusrsiRoda';
import OrderanSimCard from '../Pages/OrderanSimCard';
import OrderanMoneyChanger from '../Pages/OrderanMoneyChanger';
import OrderanChekinChekOut from '../Pages/OrderanChekinChekOut';
import OrderanHospital from '../Pages/OrderanHospital';
import OrderanHajarAzwad from '../Pages/OrderanHajarAzwad';
import OrderanMessage from '../Pages/OrderanMessage';
import OrderanMufood from '../Pages/OrderanMufood';
import OrderanMuCar from '../Pages/OrderanMuCar';
import OrderanLaundry from '../Pages/OrderanLaundry';



import TibadiLokasi from '../Pages/TibadiLokasi';
import Diperjalanan from '../Pages/Diperjalanan';
import SudahSampai from '../Pages/SudahSampai';
import Selesai from '../Pages/Selesai';
import Muslim from '../Pages/Muslim';
import PesananAktif from '../Pages/PesananAktif';
import Rate from '../Pages/Rate';
import Lupapassword from '../Pages/Lupapassword';
import {BottomNavigator} from '../components/BottomNavigator';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name=" "
        component={Home}
        options={{headerShown: false}}
      />
     
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Voucher"
        component={Voucher}
        options={{
          title: 'Voucher',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="ChooseJob"
        component={ChooseJob}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Adzan"
        component={Adzan}
        options={{headerShown: false}}
      />
	   <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
	  
	    <Stack.Screen
        name="Auth"
        component={Auth}
        options={{headerShown: false}}
      />
	  
	     <Stack.Screen
        name="Chat"
        component={Chat}
            options={{headerShown: false}}
      />
	  
	     <Stack.Screen
        name="ChatDetail"
        component={ChatDetail}
        options={{headerShown: false}}
      />
	  
	    <Stack.Screen
        name="Authotp"
        component={Authotp}
        options={{headerShown: false}}
      />
	  
	  
	   <Stack.Screen
        name="Lupapassword"
        component={Lupapassword}
        options={{headerShown: false}}
      />
	  
	  
	   <Stack.Screen
        name="Lupapasswordnext"
        component={Lupapasswordnext}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Doa"
        component={Doa}
        options={{
          title: 'Doa',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="DoaDetail"
        component={DoaDetail}
        options={{
          title: 'Doa',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Profil"
        component={Profil}
        options={{
          title: 'Profil',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="BantuanFaq"
        component={BantuanFaq}
        options={{
          title: 'Profil',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Saldo"
        component={Saldo}
        options={{
          title: 'Saldo',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
	  
	   <Stack.Screen
        name="Saldotarik"
        component={Saldotarik}
        options={{
          title: 'Tarik',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
	  
	   <Stack.Screen
        name="Saldotopup"
        component={Saldotopup}
        options={{
          title: 'Top Up',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
	  
      <Stack.Screen
        name="Profilnama"
        component={Profilnama}
        options={{
          title: 'Nama',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Profilemail"
        component={Profilemail}
        options={{
          title: 'Email',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Profilnohp"
        component={Profilnohp}
        options={{
          title: 'No. Handphone',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="TibadiLokasi"
        component={TibadiLokasi}
        options={{
          title: 'Pesanan di Terima',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Rate"
        component={Rate}
        options={{
          title: 'Notifikasi',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Diperjalanan"
        component={Diperjalanan}
        options={{
          title: 'Pesanan di Antar',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="SudahSampai"
        component={SudahSampai}
        options={{
          title: 'Pesanan Selesai',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Selesai"
        component={Selesai}
        options={{
          title: 'Pesanan',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="PesananAktif"
        component={PesananAktif}
        options={{
          title: 'Pesanan',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Profilrek"
        component={Profilrek}
        options={{
          title: 'No. Rekening',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="InfoPertama"
        component={InfoPertama}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="InfoDua"
        component={InfoDua}
        options={{headerShown: false}}
      />
	  
	  <Stack.Screen
        name="Muslim"
        component={Muslim}
  options={{
          title: 'Muslim',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
         headerTintColor: '#fff',
          headerTitleAlign: 'center',
          
		  headerBackVisible : false,
		  
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
	  
	    <Stack.Screen
        name="Notifikasi"
        component={Notifikasi}
        options={{headerShown: false}}
      />
	  
	  
	    <Stack.Screen
        name="Orderan"
        component={Orderan}
  options={{
          title: 'Terima Orderan',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
         headerTintColor: '#fff',
          headerTitleAlign: 'center',
          
		  headerBackVisible : false,
		  
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
	    <Stack.Screen
        name="Orderanmutawif"
        component={Orderanmutawif}
  options={{
          title: 'Orderan',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
         headerTintColor: '#fff',
          headerTitleAlign: 'center',
          
		  headerBackVisible : false,
		  
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
	  
	   <Stack.Screen
        name="Orderanmutawifah"
        component={Orderanmutawifah}
  options={{
          title: 'Orderan',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
         headerTintColor: '#fff',
          headerTitleAlign: 'center',
          
		  headerBackVisible : false,
		  
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
	  
	   <Stack.Screen
        name="OrderanRicebox"
        component={OrderanRicebox}
  options={{
          title: 'Orderan ',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
         headerTintColor: '#fff',
          headerTitleAlign: 'center',
          
		  headerBackVisible : false,
		  
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
	  <Stack.Screen
        name="OrderanKusrsiRoda"
        component={OrderanKusrsiRoda}
  options={{
          title: 'Orderan ',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
         headerTintColor: '#fff',
          headerTitleAlign: 'center',
          
		  headerBackVisible : false,
		  
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
	  
	   <Stack.Screen
        name="OrderanSimCard"
        component={OrderanSimCard}
  options={{
          title: 'Orderan ',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
         headerTintColor: '#fff',
          headerTitleAlign: 'center',
          
		  headerBackVisible : false,
		  
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
	   <Stack.Screen
        name="OrderanMoneyChanger"
        component={OrderanMoneyChanger}
  options={{
          title: 'Orderan ',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
         headerTintColor: '#fff',
          headerTitleAlign: 'center',
          
		  headerBackVisible : false,
		  
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
	  
	   <Stack.Screen
        name="OrderanChekinChekOut"
        component={OrderanChekinChekOut}
  options={{
          title: 'Orderan ',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
         headerTintColor: '#fff',
          headerTitleAlign: 'center',
          
		  headerBackVisible : false,
		  
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
	   <Stack.Screen
        name="OrderanHospital"
        component={OrderanHospital}
  options={{
          title: 'Orderan ',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
         headerTintColor: '#fff',
          headerTitleAlign: 'center',
          
		  headerBackVisible : false,
		  
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
	  <Stack.Screen
        name="OrderanMessage"
        component={OrderanMessage}
  options={{
          title: 'Orderan ',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
         headerTintColor: '#fff',
          headerTitleAlign: 'center',
          
		  headerBackVisible : false,
		  
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
	   <Stack.Screen
        name="OrderanMufood"
        component={OrderanMufood}
  options={{
          title: 'Orderan ',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
         headerTintColor: '#fff',
          headerTitleAlign: 'center',
          
		  headerBackVisible : false,
		  
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
	   <Stack.Screen
        name="OrderanMuCar"
        component={OrderanMuCar}
  options={{
          title: 'Orderan ',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
         headerTintColor: '#fff',
          headerTitleAlign: 'center',
          
		  headerBackVisible : false,
		  
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
	  
	   <Stack.Screen
        name="OrderanLaundry"
        component={OrderanLaundry}
  options={{
          title: 'Orderan ',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
         headerTintColor: '#fff',
          headerTitleAlign: 'center',
          
		  headerBackVisible : false,
		  
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
	   <Stack.Screen
        name="OrderanHajarAzwad"
        component={OrderanHajarAzwad}
  options={{
          title: 'Orderan ',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
         headerTintColor: '#fff',
          headerTitleAlign: 'center',
          
		  headerBackVisible : false,
		  
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="InfoTiga"
        component={InfoTiga}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Akun"
        component={Akun}
        options={{
          title: 'Akun',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

      <Stack.Screen
        name="Masuk"
        component={Masuk}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FrmLogin"
        component={FrmLogin}
        options={{headerShown: false}}
      />
	  
	  
      <Stack.Screen
        name="FrmDaftar"
        component={FrmDaftar}
        options={{headerShown: false}}
      />
	  
	  
	   <Stack.Screen
        name="FrmDaftarCheckInCheckOut"
        component={FrmDaftarCheckInCheckOut}
        options={{headerShown: false}}
      />
	  
	    <Stack.Screen
        name="FrmDaftarHajarAswad"
        component={FrmDaftarHajarAswad}
        options={{headerShown: false}}
      />
	     <Stack.Screen
        name="FrmDaftarHospital"
        component={FrmDaftarHospital}
        options={{headerShown: false}}
      />
	  
	      <Stack.Screen
        name="FrmDaftarKursiRoda"
        component={FrmDaftarKursiRoda}
        options={{headerShown: false}}
      />
	  
	      <Stack.Screen
        name="FrmDaftarLaundry"
        component={FrmDaftarLaundry}
        options={{headerShown: false}}
      />
	    
	      <Stack.Screen
        name="FrmDaftarMassage"
        component={FrmDaftarMassage}
        options={{headerShown: false}}
      />
	        <Stack.Screen
        name="FrmDaftarMoneyChanger"
        component={FrmDaftarMoneyChanger}
        options={{headerShown: false}}
      />
	         <Stack.Screen
        name="FrmDaftarMUFood"
        component={FrmDaftarMUFood}
        options={{headerShown: false}}
      />
	          <Stack.Screen
        name="FrmDaftarMutawif"
        component={FrmDaftarMutawif}
        options={{headerShown: false}}
      />
	            <Stack.Screen
        name="FrmDaftarMutawifah"
        component={FrmDaftarMutawifah}
        options={{headerShown: false}}
      />
	              <Stack.Screen
        name="FrmDaftarSimCard"
        component={FrmDaftarSimCard}
        options={{headerShown: false}}
      />
	               <Stack.Screen
        name="FrmDaftarTaxi"
        component={FrmDaftarTaxi}
        options={{headerShown: false}}
      />
	     <Stack.Screen
        name="FrmLoginFirst"
        component={FrmLoginFirst}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Otp" component={Otp} options={{headerShown: false}} />
      <Stack.Screen
        name="Dokumen"
        component={Dokumen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
