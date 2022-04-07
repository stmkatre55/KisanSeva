import React from 'react'
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    SafeAreaView,
    Text,
    TouchableOpacity,
    
} from 'react-native'


const SplashScreen = ( {navigation} ) => {
    return (
        <SafeAreaView style={[styles.container,]}>
            <ImageBackground style={styles.img_back}
            source={require('../images/background.png')} >
                <View style={styles.header}>
                    <Image style={styles.logo} source={require('../images/logo.png')}/>
                </View>
                <View style={styles.body}>
                    <Text style={styles.text1}>"Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals & happiness."</Text>
                </View>
                <TouchableOpacity style={styles.footer} onPress={ () => navigation.navigate('SignIn')}> 
                    <Image style={styles.btn}source={require('../images/btn_start.png')}/>
                </TouchableOpacity>
                                                                                                                                                                                                                                                                                                                         
            </ImageBackground>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex : 1,
        
    },
    img_back:{
        flex: 1,
        backgroundColor: '#EEEEEE'
    },
    logo:{
        width: 300,
        height: 300,
    },
    btn:{
        width: 330,
        height: 60,
        borderRadius: 10
    },
    header:{
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 150,
    },
    
    body:{
        flex: 3,
        alignItems: 'center',
    },
    
    footer:{
        flex: 2,
        alignItems:'center'
       
    },
    text1:{
       
        fontFamily:'Diner',
        fontWeight:'900',
        fontStyle:'italic',
        fontSize: 18,
        padding: 30,
    
    }
});
export default SplashScreen;