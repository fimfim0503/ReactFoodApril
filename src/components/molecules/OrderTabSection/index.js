import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, FoodDummy6 } from '../../../assets';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native'

const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#020202', height:3, width:'15%', marginLeft:'3%' }}
      style={{ 
          backgroundColor: 'white', 
          elevation:0, 
          shadowOpacity:0,
          borderBottomColor:'#F2F22',
          borderBottomWidth:1, 
        
        }}
      tabStyle={{ width:'auto' }}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ fontFamily:'Poppins-Medium',
        color: focused ? '#020202' : '#8d92a3'
        }}>{route.title}
        </Text>
      )}
    />
  );

const InProgress = () => {
  const navigation = useNavigation();
    return (
      <View style={{paddingTop:8, paddingHorizontal:24}}>
          <ItemListFood 
          rating={4} 
          image={FoodDummy1} 
          onPress={()=> navigation.navigate('OrderDetail')} 
          type="in-progress"
          items={3} 
          price="2.000.000" 
          name="Sop Bumi"
          
          /> 

          <ItemListFood 
          rating={4} 
          image={FoodDummy2} 
          onPress={()=> navigation.navigate('OrderDetail')} 
          type="in-progress"
          items={3} 
          price="2.000.000" 
          name="Sop Bumi"
          /> 

          <ItemListFood 
          rating={3} 
          image={FoodDummy3} 
          onPress={()=> navigation.navigate('OrderDetail')} 
          type="in-progress"
          items={3} 
          price="2.000.000" 
          name="Sop Bumi"
          /> 

          <ItemListFood 
          rating={3} 
          image={FoodDummy4} 
          onPress={()=> navigation.navigate('OrderDetail')} 
          type="in-progress"
          items={3} 
          price="2.000.000" 
          name="Sop Bumi"
          /> 

          <ItemListFood 
          rating={3} 
          image={FoodDummy4} 
          onPress={()=> navigation.navigate('OrderDetail')} 
          type="in-progress"
          items={3} 
          price="2.000.000" 
          name="Sop Bumi"
          /> 

          <ItemListFood 
          rating={3} 
          image={FoodDummy4} 
          onPress={()=> navigation.navigate('OrderDetail')} 
          type="in-progress"
          items={3} 
          price="2.000.000" 
          name="Sop Bumi"
          /> 

          <ItemListFood 
          rating={3} 
          image={FoodDummy4} 
          onPress={()=> navigation.navigate('OrderDetail')} 
          type="in-progress"
          items={3} 
          price="2.000.000" 
          name="Sop Bumi"
          /> 

      </View>
      
    )
};
const PastOrders= () => {
  const navigation = useNavigation();
    return (
      <View style={styles.content}>
         
         <ItemListFood 
          rating={4} 
          image={FoodDummy1} 
          onPress={()=> navigation.navigate('OrderDetail')} 
          type="past-orders"
          items={3} 
          price="2.000.000" 
          name="Sop Bumi"
          date="Jun 12, 14:00"
          status="Cancel"
          
          /> 

<ItemListFood 
         rating={4} 
         image={FoodDummy1} 
         onPress={()=> navigation.navigate('OrderDetail')} 
         type="past-orders"
         items={3} 
         price="2.000.000" 
         name="Sop Bumi"
         date="Jun 12, 14:00"
         
          
          /> 

<ItemListFood 
          rating={4} 
          image={FoodDummy1} 
          onPress={()=> navigation.navigate('OrderDetail')} 
          type="past-orders"
          items={3} 
          price="2.000.000" 
          name="Sop Bumi"
          date="Jun 12, 14:00"
          status="Finished"
          
          /> 

      </View>
      
    )
};
   



  const initialLayout = { width: Dimensions.get('window').width };

const OrderTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: '1', title: 'in Progress' },
      { key: '2', title: 'Past Orders' },
      
    ]);
   
    const renderScene = SceneMap({
      1: InProgress,
      2: PastOrders,
      
    });

    return (
        
             <TabView
                    renderTabBar={renderTabBar}
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={initialLayout}
                    style={{ backgroundColor:'white' }}
                    />
        
    )
}

export default OrderTabSection

const styles = StyleSheet.create({})
