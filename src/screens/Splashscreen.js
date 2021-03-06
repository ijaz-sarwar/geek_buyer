import React from 'react'
import {
    SafeAreaw,
    StyleSheet,
    ScrollView,
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Image,
    Button
} from 'react-native';
function Splashscreen({ navigation }) {
    setTimeout(() => {
        navigation.navigate('SignIn');
    }, 3000);
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'black', justifyContent: 'center' }}>
            <Image style={{ height: 300, width: 300, borderRadius: 20, marginBottom: 100 }} source={require('../assets/geek2.jpeg')} />
        </View>
    )
}

export default Splashscreen
