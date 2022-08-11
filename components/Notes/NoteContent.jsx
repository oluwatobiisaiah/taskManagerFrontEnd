
import {Text,TouchableOpacity, StyleSheet} from "react-native"
import {useState, useEffect} from "react"

export default function NoteContent({note, navigation,deleteStatus, idsToBeDeleted, setIdsToBeDeleted, setDeleteStatus}) {
  
  const { taskTitle: title, taskContent: content,_id:id,isCompleted} = note

  const data = {
       id,
       title,
       content,
       isCompleted
     }
  const [selection, setSelection] = useState(false)
  
 useEffect(() => {
   if(!selection){
     const newIds = idsToBeDeleted.filter(_id => _id !== id)
   setIdsToBeDeleted(newIds)
   
   }
   else{
     setIdsToBeDeleted([...idsToBeDeleted, id])
   }
   
 }, [selection])
  
  
  const handleSelection = ()=>{
     if(deleteStatus) {
         setSelection(!selection)
       }
       else{
       navigation.navigate("Create Note", data)
       }
  }
  return (
    <TouchableOpacity style={[styles.contentContainer, {backgroundColor: deleteStatus && selection?"rgba(255,255,255,0.1)":"transparent"}]}
     onPress={handleSelection}
     onLongPress={() => {
       setSelection(true)
       setIdsToBeDeleted([...idsToBeDeleted, id])
     }}
     >
      <Text style={styles.title} >{title}</Text>
      <Text 
      numberOfLines={3}
      ellipSizeMode="tail"
      style={styles.body}
      >
        {content}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contentContainer:{
    flex: 1,
    padding: 10,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  }
  ,
  body:{
    color: "#ccc",
  }
})