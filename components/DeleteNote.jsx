
import {View, StyleSheet, TouchableOpacity} from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import axios from "axios"
export default function DeleteNote({idsToBeDeleted, setDeleteStatus, getNotes, setIdsToBeDeleted}){
  
  
  const deleteNotes = async () =>{
     for(i=0; i < idsToBeDeleted.length;++i){
    try{
    await axios.delete("https://tobitaskmanagerserver.herokuapp.com/api/v1/posts/" + idsToBeDeleted[i])
if(i === idsToBeDeleted.length - 1){
  setIdsToBeDeleted([])
}
    }
    catch(error){
      console.log(error.message)
    }
  }
  setDeleteStatus(false)
  getNotes()
  }
  
  return (
    
    <View style={styles.container}>
    <TouchableOpacity style={styles.touch} onPress={deleteNotes}>
    <MaterialCommunityIcons name="delete" size={28} color="white" />
    
    </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
  container:{
    alignItems: "center",
    paddingVertical: 10,
    backgroundColor: "black"
  }
})