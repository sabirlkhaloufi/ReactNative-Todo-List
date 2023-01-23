import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";


const AddItem = ({addItem}) => {

    const [text, setText] = useState('')
    const onChange = (textValue)=>{
        setText(textValue)
        console.log(text);
    }

  return(
    <View>
        <TextInput placeholder="Add Item..." style={style.input} onChangeText={onChange}/>
        <TouchableOpacity style={style.btn} onPress={()=>addItem(text)}>
            <Text style={style.btnText}>Add Item</Text>
        </TouchableOpacity>
    </View>
  ) 
}


const style = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: "#c2bad8",
        padding:0,
        margin: 5
    },
    btnText: {
        color: "darkslateblue",
        fontSize: 20,
        textAlign: 'center'
    }
})

export default AddItem