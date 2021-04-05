import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FoodDummy1 } from '../../assets';
import {Button, Gap, Header, ItemListFood, ItemValue} from '../../components';

const OrderDetail = () => {
    return (
        <ScrollView>
        <Header
        title="Order Detail"
        subTitle="You Deserve better meal"
        onBack={()=>{}}
        />
        <View style={styles.content}>
            <Text style={styles.label} >Order Detail </Text>
            <ItemListFood 
                type="order-summary"
                name="Sop Buntil"
                price="2.500.000"
                items="14"
                image={FoodDummy1} 
                items={14}
                />
            <Text style={styles.label} >Detail Transaction </Text>
            <ItemValue label="Chery Healty" value="IDR 18.000.000"/>
            <ItemValue label="driver" value="IDR 50.000"/>
            <ItemValue label="tax 10%" value="IDR 1.000.000"/>
            <ItemValue 
            label="Total Price" 
            value="IDR 28.000.000"
            valueColor="#1ABC9C"
            />
        </View>
        <View style={styles.content}>
            <Text style={styles.label}  >Deliver To :</Text>
            <ItemValue label="Name" value="Desy Nurbany"/>
            <ItemValue label="Phone No" value="09485498544"/>
            <ItemValue label="Address" value="Karang Anyar "/>
            <ItemValue label="House No." value="A2"/>
            <ItemValue label="City" value="Bandung"/>
            
        </View>
        <View style={styles.content}>
            <Text style={styles.label}  >Order Status :</Text>
            <ItemValue label="#FM20909" value="Paid" valueColor="#1ABC9C"/>
            
        </View>
        <View style={styles.button}>
            <Button 
            text="Cancel My Order" 
            onPress={()=>navigation.replace('SuccessOrder')}
            color="#D9435e"
            textColor="white"
            />
        </View>
        <Gap height={40} />
    </ScrollView>
    )
}

export default OrderDetail

const styles = StyleSheet.create({
    content:{
        backgroundColor:'white',
        paddingHorizontal:24,
        paddingVertical:16,
        marginTop:24
    }, 
    label :{
        fontSize:14,
        fontFamily:'Poppins-Regular',
        color:'#020202',
        marginBottom: 8
    },
    button:{
        paddingHorizontal:24,
        marginTop:24
    }
})
