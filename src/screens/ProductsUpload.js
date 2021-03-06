import React, { useState } from 'react'
import {
    SafeAreaw,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    ImageBackground,
    TouchableOpacity,
    TextInput,

    Button,
    Keyboard
} from 'react-native';
import DataList from "./DataList";
import ImagePicker from 'react-native-image-crop-picker';
function ProductsUpload({ navigation }) {
    const [name, setName] = useState()
    const [price, setPrice] = useState()
    const [stock, setStock] = useState()
    const [description, setDescription] = useState()
    const [productcontactinfo, setProductcontactinfo] = useState()
    const [category, setCategory] = useState()
    const [seller, setseller] = useState()
    const [taskItem, setTaskItem] = useState([
        {
            "name": "",
            "price": "",
            "description": "",
            "productcontactinfo": "",
            "category": "",
            "seller": "",
            "stock": "",
        }
    ])
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'black', justifyContent: 'center' }}>
            <TouchableOpacity style={{ height: 100, width: 150, borderWidth: 1, borderColor: 'red', justifyContent: 'center', borderRadius: 50, }}
                onPress={() => goToPickImage()}
            >
                <Text style={{ color: 'white', alignSelf: 'center', }}>Upload Image</Text>
            </TouchableOpacity>

            <View style={{ width: '80%', borderWidth: 1, marginTop: 20, borderRadius: 20, borderColor: 'red', alignSelf: 'center' }}>
                <TextInput style={{ color: 'white', }} placeholder={'Name'}
                    placeholderTextColor='white'
                    onChangeText={text => setName(text)}
                    name={name}
                    value={name}
                />
            </View>
            <View style={{ width: '80%', borderWidth: 1, marginTop: 20, borderRadius: 20, borderColor: 'red', alignSelf: 'center' }}>
                <TextInput style={{ color: 'white', }} placeholder={'Price'}
                    placeholderTextColor='white'
                    onChangeText={text => setPrice(text)}
                    price={price}
                    value={price}

                />

            </View>
            <View style={{ width: '80%', borderWidth: 1, marginTop: 20, borderRadius: 20, borderColor: 'red', alignSelf: 'center' }}>
                <TextInput style={{ color: 'white', }} placeholder={'Stock'}
                    placeholderTextColor='white'
                    onChangeText={text => setStock(text)}
                    price={stock}
                    value={stock} />
            </View>
            <View style={{ width: '80%', borderWidth: 1, marginTop: 20, borderRadius: 20, borderColor: 'red', alignSelf: 'center' }}>
                <TextInput style={{ color: 'white', }} placeholder={'Description'}
                    placeholderTextColor='white'
                    onChangeText={text => setDescription(text)}
                    price={description}
                    value={description} />
            </View>
            <View style={{ width: '80%', borderWidth: 1, marginTop: 20, borderRadius: 20, borderColor: 'red', alignSelf: 'center' }}>
                <TextInput style={{ color: 'white', }} placeholder={'Product Contact Info'}
                    placeholderTextColor='white'
                    onChangeText={text => setProductcontactinfo(text)}
                    price={productcontactinfo}
                    value={productcontactinfo} />
            </View>
            <View style={{ width: '80%', borderWidth: 1, marginTop: 20, borderRadius: 20, borderColor: 'red', alignSelf: 'center' }}>
                <TextInput style={{ color: 'white', }} placeholder={'Seller'}
                    placeholderTextColor='white'
                    onChangeText={text => setseller(text)}
                    price={seller}
                    value={seller} />
            </View>
            <View style={{ marginTop: 20, width: '20%', height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 20, borderColor: 'red', borderWidth: 1 }}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('DataList');
                        HnaleTask()
                    }}>
                    <Text style={{ color: 'white' }}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
function goToPickImage() {
    ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true
    }).then(image => {
        console.log("image console ===>", image);
    });
}

export default ProductsUpload
