import { StyleSheet, Text, View, FlatList,ScrollView } from 'react-native'
import React,{useEffect,useState}from 'react'
import {useNavigation} from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';

const ListFoodItems = ({route}) => {
  const [foodList,setFoodList] = useState([])


    const navigation = useNavigation();
    const {date,userID,chooseTime} = route.params;
    const fetchOrderDetails = async (selectedUserID, selectedDate,selectedTime) => {
      console.log(selectedDate,selectedUserID ,selectedTime)
      try {
        console.log(selectedDate,selectedUserID ,selectedTime)
        const documentSnapshot = await firestore()
          .collection('orderDetails')
          .doc(selectedUserID)
          .collection(selectedDate)
          .doc('details')
          .collection(selectedTime)
          .doc("items")
          .get()

        const foodArr = documentSnapshot.data().name
        console.log(foodArr)
        const foodFormat = foodArr.map((name, index) => ({ ID: index + 1, Name: name}))
        setFoodList(foodFormat)

         // console.log(documentSnapshot.data())
    
        // if (documentSnapshot.exists) {
        //   const {bfCount,lunchCount,snacksCount,dinnerCount} = documentSnapshot.data();
        //   console.log(bfCount,lunchCount)
         
          
        
         // console.log("lo",location);
          // Process the retrieved data here
         
      } catch (error) {
        console.log('Error fetching order details:', error);
      }
    };

    useEffect(()=>{
      fetchOrderDetails(userID,date,chooseTime);
    },[]);
    

    

  return (
    <ScrollView nestedScrollEnabled={true}>
        <Appbar.Header>
            <Appbar.BackAction onPress={() => {navigation.navigate("OrderedItems",{date,userID})}} />
            <Appbar.Content titleStyle={{marginLeft:200,fontWeight:'bold',fontSize:24}} title="Food Items"/>
          </Appbar.Header>
        <FlatList
          data={foodList}
          style={{flex: 1, marginTop: 40}}
          renderItem={({item}) => (
              <View style={styles.container1}>
                  <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                      <Text style={{fontSize:20,fontWeight:'bold',marginHorizontal:20,marginVertical:10,color:'black'}}>{item.Name}</Text>
                  </View>
              </View>
          )}
          keyExtractor={item => item.ID.toString()}
        />
    </ScrollView>
  )
}

const styles = StyleSheet.create({})

export default ListFoodItems;