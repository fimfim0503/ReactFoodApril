import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4, FoodDummy6 } from '../../../assets';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native'
import ItemListMenu from '../ItemListMenu';


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

const Account = () => {
  const navigation = useNavigation();
    return (
      <View style={{paddingTop:8, paddingHorizontal:24}}>
       <ItemListMenu text="Edit Profile"/>
        <ItemListMenu text="Home Address"/>
        <ItemListMenu text="Security"/>
        <ItemListMenu text="Payment"/>
      </View>
      
    )
};
const FoodMarket= () => {
  const navigation = useNavigation();
    return (
      <View style={{paddingTop:8, paddingHorizontal:24}}>
         
        <ItemListMenu text="Rate App"/>
        <ItemListMenu text="Help Center"/>
        <ItemListMenu text="Privacy & Policy"/>
        <ItemListMenu text="Term & Conditions"/>

      </View>
      
    )
};
   



  const initialLayout = { width: Dimensions.get('window').width };

const ProfileTabSection = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: '1', title: 'Account' },
      { key: '2', title: 'FoodMarket' },
      
    ]);
   
    const renderScene = SceneMap({
      1: Account,
      2: FoodMarket,
      
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

export default ProfileTabSection

const styles = StyleSheet.create({})
