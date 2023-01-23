import React  ,{useState} from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import  Header  from "./Header";
import ListItem from "./ListItem"
import AddItem from "./AddItem";

const App = () => {

  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Egg'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'HGG'},
    {id: 5, text: 'hjh'}
  ])


  const DeleteItem = (id)=>{
    setItems(prevItems=>{
      return prevItems.filter(
        item => item.id != id
      )
      })
  }

  const addItem = (text)=>{
    console.log(items[items.length-1].id+1);
    setItems(prevItems=>{
      return [{id:items[items.length-1].id+1, text:text},...prevItems]
      })

      
  }

  return(
    <View style={style.container}>
      <Header title={'Shopping List'} />
      <AddItem addItem={addItem}/>
      <FlatList data={items} renderItem={({item}) => <ListItem item={item} DeleteItem={DeleteItem}/> }/>
    </View>
  ) 
}


const style = StyleSheet.create ({
  container:{
    flex:1,
  }
})
export default App