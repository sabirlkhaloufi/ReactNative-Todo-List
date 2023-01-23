import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Button  } from "react-native";


const ListItem = ({item, DeleteItem}) => {
  return(
    <TouchableOpacity style={style.listItem}>
        <View style={style.listItemView}>
            <Text style={style.listItemText}>
                {item.text}
            </Text>
            <Button onPress={()=>DeleteItem(item.id)} title="remove" color={"red"} style={style.listItemButton}></Button>
        </View>
    </TouchableOpacity>
  ) 
}


const style = StyleSheet.create({
    listItem: {
        padding: 15,
        backgroundColor: "#f8f8f8",
        borderBottomWidth: 5,
        borderColor: "#eee"
    },
    listItemView: {
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center'
    }
})

export default ListItem