import { View, TextInput, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Ionicons } from '@expo/vector-icons';

import axios from "axios"


const TitleInput = ({title, setTitle, content, setContent,isCompleted, navigation, id}) => {
  
  async function submitNote(){
    try{
      
    const result = await axios.post("https://tobitaskmanagerserver.herokuapp.com/api/v1/posts/", {
      taskTitle: title,
      taskContent: content
    })
   
    navigation.navigate("Notes")
   }
    catch(error){
      console.log(error.message)
    }
    
  }
  
  async function updateNote(){
    
    try{
    const note = await axios.put("https:tobitaskmanagerserver.herokuapp.com/api/v1/posts",
    {
      id,
      taskTitle: title,
      taskContent: content,
      isCompleted:false
    }
    )
    

    navigation.navigate("Notes")
    }
    catch(error){
      console.log(error.message)
    }
  }
  
  
  return (
    <View style={styles.titleinputContainer}>
    <View style={styles.titleWrapper}>  
    <Text style={styles.titleLabel}> 4:59 PM July 30, 2022 </Text>
    
    <TouchableOpacity onPress={() => id?updateNote():submitNote()}>
   
   <Ionicons name="checkmark-circle-sharp" size={30} color="white" />
   
    </TouchableOpacity>
    
    </View>
      <TextInput 
      style={styles.titleinput}
      autoFocus
      value={title}
      onChangeText={setTitle}
      selectionColor="lime"
      placeholder="Note Title" 
      placeholderTextColor="grey"
      />
    </View>
  );
};

export default TitleInput;

const styles = StyleSheet.create({
  titleinputContainer: {
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 10,
    height: 50,
    backgroundColor: "#111415"
    //backgroundColor: "red"
  },
  titleWrapper:{
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 10
  },
  titleLabel: {
    fontStyle: "italic",
    fontSize: 13,
    marginBottom: 10,
    color: "#ffffff",
  },
  titleinput: {
    borderColor: "transparent",
    borderBottomColor: "#fff",
    borderWidth: 1,
    height: 30,
    paddingHorizontal: 10,
    fontWeight: "bold",
    color: "#fff",
    fontSize: 20,
    
  },
});
