import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { FoodDummy1, FoodDummy2, FoodDummy3, FoodDummy4 } from '../../assets';
import { FoodCard, Gap, HomeProfile, HomeTabSection } from '../../components';
import { getFoodData } from '../../redux/action/home';



const Home = () => {
    
    const dispatch = useDispatch();
    const {food} = useSelector(state=>state.homeReducer);
    useEffect(() => {
        dispatch(getFoodData());
    });

    return (
        <ScrollView>

        <View style={styles.page} >
            <HomeProfile/>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >
                <View style={styles.FoodCardContainer} >
                <Gap width={24} />
                {food.map(itemFood => {
                    return (<FoodCard 
                        key={itemFood.id}
                        name={itemFood.name}
                        image={{ uri:itemFood.picturePath }} 
                        rating={itemFood.rate}
                        
                        />)
                        
                })}
                <Gap width={24} />
                </View>
                </ScrollView>

            </View>
            <View style={styles.tabContainer} >
               <HomeTabSection/>
            </View>
        </View>
        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    page:{
        flex:1,
        
    },
    profile:{
        width:50,
        height:50,
        borderRadius:8
    },
    profileContainer:{
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingHorizontal:24,
        paddingTop:32,
        paddingBottom:24,
        backgroundColor:'white'
    },
    Appname:{
        fontSize:22,
        fontFamily:'Poppins-Medium', 
        color:'#020202'
    },
    dec:{
        fontSize:14,
        fontFamily:'Poppins-Light',
        color: '#8d92A3'
    },
    FoodCardContainer:{
        flexDirection:'row',
        marginVertical:12
    },
    tabContainer:{
        flex:1
    }
})
