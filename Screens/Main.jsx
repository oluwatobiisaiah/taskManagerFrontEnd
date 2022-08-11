import { View, StyleSheet, ScrollView, Text, RefreshControl} from 'react-native';
import SearchArea from "../components/Search/SearchArea"
import Note from "../components/Notes/Note"
import AddNote from "../components/AddNote"
import DeleteNote from "../components/DeleteNote"
import useNotes from "../Hooks/useNotes"
import axios from "axios"
import React, {useState,useEffect} from "react"


export default function Main({navigation}){
 const [notes, unmodifiedNotes, dispatcher ] = useNotes()
 const [refreshing, setRefreshing] = useState(false)
const [idsToBeDeleted, setIdsToBeDeleted] = useState([])
const [deleteStatus, setDeleteStatus] = useState(false)
const [dataLoading, setDataLoading] = useState(true)

useEffect(()=>{
  if(idsToBeDeleted.length !== 0){
   setDeleteStatus(true)
  }
  else{
    setDeleteStatus(false)
  }
  
}, [idsToBeDeleted])


const onRefresh = React.useCallback(() =>{
  setRefreshing(true)
  async function getNotes(){
    dispatcher.getNotes()
   setRefreshing(false)
  }
  getNotes()
})
 
 useEffect(function(){
 dispatcher.getNotes()
 setDataLoading(false)
 }, [])
 
 React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatcher.getNotes()
    });
    return unsubscribe;
  }, [navigation]);
 return (
    <View style={styles.wrapper}>
    <ScrollView  vertical 
    refreshControl={
      <RefreshControl 
      refreshing={refreshing}
      onRefresh={onRefresh}/>}>

    <View style={styles.container}>
<SearchArea unmodifiedNotes={unmodifiedNotes} setNotes={dispatcher.setNotes}/>
 {
 !dataLoading && notes?notes.map((note, index) =>
<Note note={note}  key ={index} navigation={navigation}  deleteStatus={deleteStatus} idsToBeDeleted={idsToBeDeleted} setIdsToBeDeleted={setIdsToBeDeleted}
  setDeleteStatus={setDeleteStatus}
/>
):<Text style={styles.noNotes}>No Notes!</Text>

} 



</View>
    </ScrollView>
    
    
<AddNote navigation={navigation}/>
 {
 deleteStatus? <DeleteNote idsToBeDeleted={idsToBeDeleted}
 setIdsToBeDeleted={setIdsToBeDeleted}
 setDeleteStatus={setDeleteStatus} getNotes={dispatcher.getNotes}/>:<></>
 }
</View>
  )
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: '#0a0b0b',
    paddingTop: 24,
    flex:1
  },
  
  wrapper:{
    flex: 1,
    backgroundColor: '#0a0b0b',
  },
  noNotes:{
    color: "#ccc",
   // backgroundColor: "pink",
    textAlign: "center",
  },
  
  
});