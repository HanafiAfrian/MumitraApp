import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView, Image} from 'react-native';
import {Excelent} from '../../assets';
import StarRating from 'react-native-star-rating';

export default class Rate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5,
	    listData: [],
      idEdit: null,
    };
	 this.url = 'https://mutawif.co.id/api/muapi/penilaianmitra.php';
  }

  componentDidMount() {
    this.ambilListData();
  }
  
  
   async ambilListData() {
  var nama =	this.props.route.params.nama; 

	
    await fetch(this.url + '/?op=ambildata&nama=' + nama)
      .then(response => response.json())
      .then(json => {

        console.log('Hasil yang didapat: ' + JSON.stringify(json.data.result));
        this.setState({listData: json.data.result});
		
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating,
    });
  }
  render() {
	     var nama =	this.props.route.params.nama; 
    return (
      <ScrollView>
        <View style={styles.row}>
        
         
        </View>
		
             <View>     
           {this.state.listData.map((val, index) => (
		   		  
				  <View style={styles.kotakpjg} key={index}>
          <View style={styles.rowpjg}>
            <Text style={styles.ulasan}>Penilaian Dari </Text>
			   <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginVertical: 10,
					color :'orange',
						marginTop : 10,
                  }}>
                     {val.costumer}   
                      </Text><Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginVertical: 10,
					color :'orange',
						marginTop : 11,
                  }}>  </Text>
           <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    marginVertical: 10,
					color :'orange',
						marginTop : 11,
                  }}>
                      Bintang  {val.nilai} 
                      </Text> 
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
            }}>
         
         
          </View>
        </View>
				  
				  
				  
                ))}
				   </View>
				
      
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  pujian: {
    fontWeight: 'bold',
  },

  tebal: {
    fontWeight: 'bold',
  },
  ulasan: {
    fontSize: 16,
    fontWeight: 'bold',
	marginTop : 15,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowpjg: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  kotakpjg: {
    backgroundColor: 'white',
    marginTop: 20,
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 10,
  },

  kotak: {
    marginHorizontal: 10,
    borderRadius: 10,
    height: 70,
    width: '45%',
    marginTop: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingVertical: 10,
  },
});
