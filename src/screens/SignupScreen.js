import React, { useEffect, useState } from 'react'
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
    ScrollView,
    StatusBar,
} from 'react-native'
// import SQLite from 'react-native-sqlite-storage'
import AsyncStorage from '@react-native-async-storage/async-storage';



const SignupScreen = ( {navigation}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conpassword, setConPassword] = useState('');
    var tempArray = []
   
    const setData = async  () => {

        let userData =  JSON.parse(await AsyncStorage.getItem('userData'));
       

        tempArray = userData

        if(name.length == 0 || email.length == 0 || password.length == 0 || conpassword.length == 0)
        {
            Alert.alert('Warning!','Please write your data.')
        }else{
            try{
                // await AsyncStorage.setItem('Username', name);
                // await AsyncStorage.setItem('UserEmail', email);
                // await AsyncStorage.setItem('Password', password);
                
        var userObject ={
            Username:name,
            UserEmail:email,
            Password:password
        }

       
        console.log(tempArray,'tempArray')

           
          if(tempArray != null){
            for(let item of tempArray){
                if(item.UserEmail == email){
                    Alert.alert('warning!','Email already exists!')
                    return false
                }
            }
          }
    
        tempArray.push(userObject)

        AsyncStorage.setItem('userData',JSON.stringify(tempArray));  
              Alert.alert('Message','You have successfully Registered!',[
                { 
                    text: "CANCEL",
                    onPress: () => console.log("Cancel Press"),
                    style: "cancel"
                },
                {
                    text: "OK",
                    onPress: () => {
                        navigation.navigate('SignIn');
                    },
                }
            ]) 
               
            
            } catch(error) {
                console.log(error);   
            }
        }
    }
    
    

    return (
        <KeyboardAvoidingView style={{flex: 1}}
        behavior={Platform.OS === "android" ? "padding" : "height"}>

        <SafeAreaView style={[styles.container,]}>
        <StatusBar backgroundColor='#009387' barStyle="light-content"/>
            <ImageBackground style={styles.img_back}
            source={require('../images/background.png')} >
                
                <View style={styles.body}>
                    <Text style={styles.text}>Welcome to Kisan Seva</Text>
                    <Text style={{fontSize:14},{marginBottom:10}}>Let’s help you meet up your tasks </Text>
                    <TextInput 
                        style={styles.input1} placeholder='Enter your full name' 
                        onChangeText={(value) => setName(value)}
                    />
                    <TextInput 
                        style={styles.input1} placeholder='Enter your email' 
                        onChangeText={(value) => setEmail(value)}
                    />
                    <TextInput 
                        style={styles.input1} placeholder='Enter password' 
                        onChangeText={(value) => setPassword(value)}
                    />
                    <TextInput 
                        style={styles.input1} placeholder='Confirm password' 
                        onChangeText={(value) => setConPassword(value)}
                    />

                    <TouchableOpacity style={styles.btn}  onPress={setData} >
                    <Image style={styles.img_btn} source={require('../images/signup_btn.png')}/>
                    
                    </TouchableOpacity>
                    <Text style={styles.text1}>Already have an account? <Text style={{fontWeight:'bold'},{color:'#17739A'}} onPress={()=> navigation.navigate('SignIn')}>Sign In</Text></Text>
                   
                </View>
                                                                                                                                                                                                                                                                                                 
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
        backgroundColor: '#EEEEEE',

    },
    btn:{
        width: '80%',
        height: '8%',
        borderRadius: 10,
        marginTop:'15%',
        alignItems:'center',
        margin: '2%'
    },
    img_btn:{
        width: '100%',
        height: '100%',
        borderRadius: 10,
        
    },
    body:{
        flex: 1,
        alignItems: 'center',
    },
    text:{

        fontSize: 20,
        fontWeight:'bold',
        color:'black',
        margin: '2%',
        marginTop: '30%'
       
    },
    input1:{
       
        backgroundColor:'#FFFFFF',
        width: '80%',
        height: '8%',
        borderRadius: 100,
        paddingLeft: 20,
        margin: '2%',
    },
    text2:{
        fontSize: 14,
        fontWeight:'bold',
        color:'#17739A',
    },
    text1:{
        alignItems: 'center',
        fontSize: 16,   
    }
});
export default SignupScreen;