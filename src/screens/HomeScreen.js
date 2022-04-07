import React, { useEffect } from 'react'
import{
    View,
    Text,
    StyleSheet,
    ImageBackground,  

} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Icon } from 'react-native-vector-icons/FontAwesome';
import Carousel from 'react-native-snap-carousel';



const HomeScreen = () => {
    return(
        <SafeAreaView style={[styles.container]}>
             <ImageBackground style={styles.img_back}
            source={require('../images/background.png')} >
                <View style={styles.header}>
                    {/* <Icon name='bars' size={20} color="#FFF"></Icon> */}
                        <Text>Home Screen</Text>
                </View>
                <View style={styles.slider}>
                                        
                </View>
            
             </ImageBackground>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex : 1,
        

    },
    img_back:{
        flex:1,
    },
    header:{
        margin: '1%',
        marginTop:'2%',
        marginBottom:'2%',
        width: '98%',
        height: '8%',
        backgroundColor: '#26C4CE',
        
    },
});
export default HomeScreen;