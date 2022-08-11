import {View, StyleSheet, ScrollView} from "react-native"

import TitleInput from "../components/CreateNote/TitleInput"
import ContentInput from "../components/CreateNote/ContentInput"
import {useState, useEffect} from "react"


export default function CreateNote({navigation, route}){
  
  const {id, title, content, isCompleted} = route.params??{id: null, title: null, content: null, isCompleted: false}
  
  
  const [noteTitle, setNoteTitle] = useState("")
  const [noteContent, setNoteContent] = useState("")
  
  function checkRoute(){
    if(route.params){
      setNoteTitle(title)
      setNoteContent(content)
    }
  }
  useEffect(()=>{
  checkRoute()
  }, [])
  return (  
 <View style={styles.container}>
 
  <TitleInput title={noteTitle} setTitle={setNoteTitle} content={noteContent} setContent={setNoteContent} navigation={navigation} id={id} isCompleted={isCompleted}/>
  <ContentInput content={noteContent} setContent={setNoteContent}/>

  </View>

 )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: "#111415",
    flex: 1,
  }
})