import React, {useState, useEffect} from 'react'
import {
    View,
    StyleSheet,
    ImageBackground,
    Image,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
} from 'react-native'
// import SQLite from 'react-native-sqlite-storage'
import AsyncStorage from '@react-native-async-storage/async-storage';
// const db = SQLite.openDatabase(
//     {
//         name : 'MainDB',
//         location :'default',
//     },
//     ()=>{},
//     error => {console.log(error)}
// );



const SigninScreen = ( {navigation} ) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() =>{
        // getData();
    },[]);

    const getData = async () =>{
       try {
        let userData =  JSON.parse(await AsyncStorage.getItem('userData'));
        console.log(userData);
        var flag = false
        if(userData == null){
            // alert then navigation
            flag = false
            // Alert.alert('Warning','Data does not exists!');
            // navigation.navigate('SignUp');
            Alert.alert('Warning','Data does not exists!',[
                { 
                    text: "CANCEL",
                    onPress: () => console.log("Cancel Press"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => {
                        navigation.navigate('SignUp');
                    },
                }
            ])
        }
        else{
            for(let item of userData){
                if(item.UserEmail == email && item.Password == password){
                    flag = true
                }
            }
        }

        if(flag){
            Alert.alert('Success','You have successfully Sign In!',[
                { 
                    text: "CANCEL",
                    onPress: () => console.log("Cancel Press"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => {
                        navigation.navigate('Home');
                    },
                }
            ])
        }
        else{
            Alert.alert('Warning','Invalid Credintials!');
        }
    //   await AsyncStorage.getItem('UserEmail')
    //     .then(value =>{
    //         if(value!=null){
    //             setEmail(value);
    //         }
    //     });
    //   await  AsyncStorage.getItem('Password')
    //     .then(value =>{
    //         if(value!=null){
    //             setPassword(value);
    //         }
    //     })
           
       } catch (error) {
           console.log(error);
       }
    }
    return (
        <KeyboardAvoidingView style={{flex:1}}
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <SafeAreaView style={[styles.container,]}>
            <ImageBackground style={styles.img_back}
            source={require('../images/background.png')} >
                
                
                <View style={styles.body}>
                    <Text style={styles.text}>Welcome Back!</Text>
                    <Image style={styles.img} source={require('../images/login_pic.png')}/>
                    <TextInput style={styles.input1} placeholder='Enter your email'
                        onChangeText={(value) => setEmail(value)}
                    />
                    <TextInput style={styles.input1} placeholder='Enter password'
                        onChangeText={(value) => setPassword(value)}
                    />
                    <Text style={styles.text2}>Forgot password</Text>

                    <TouchableOpacity  style={styles.btn} onPress={getData}>
                    <Image style={styles.img_btn} source={require('../images/button.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.text1}>Don't have an account? <Text onPress={()=> navigation.navigate('SignUp')} style={{fontWeight:'bold'},{color:'#17739A'}}>Sign Up</Text></Text>
                </View>
                {/* <View style={styles.footer}>
                    <TouchableOpacity  style={styles.btn} onPress={getData}>
                    <Image style={styles.img_btn} source={require('../images/button.png')}/>
                    </TouchableOpacity>
                    
                </View>                                                                                                                                                                                                                                                                                                         */}
            </ImageBackground>
        </SafeAreaView>
         </KeyboardAvoidingView>
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
    img:{
        width: '40%',
        height: '25%',
        marginBottom: '2%'
     
    },
    btn:{
        width: '80%',
        height: '8%',
        borderRadius: 10,
        marginTop:'8%',
        alignItems:'center',
        
    },
    img_btn:{
        width: '100%',
        height: '100%',
        borderRadius: 10,
        
    },
    body:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    text:{
        fontSize: 20,
        fontWeight:'bold',
        color:'black',
        margin: '2%',
        marginTop: '25%'
       
    },
    input1:{       
            backgroundColor:'#FFFFFF',
            width: '80%',
            height: '8%',
            borderRadius: 100,
            paddingLeft: 20,
            margin: '1%',
    },
    text2:{
        fontSize: 14,
        fontWeight:'bold',
        color:'#17739A',
    },
    text1:{
        alignItems: 'center',
        fontSize: 16, 
        marginBottom: '10%'  
    }
});
export default SigninScreen;