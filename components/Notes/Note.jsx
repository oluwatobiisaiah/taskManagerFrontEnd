

import {Text,View, StyleSheet} from "react-native"
import NoteImage from "./NoteImage"
import NoteContent from "./NoteContent"

export default function Note({note,navigation, deleteStatus, idsToBeDeleted, setIdsToBeDeleted, setDeleteStatus}){
  
  return(
    <View style={styles.noteContainer}>
    <NoteImage />
    <NoteContent note={note} navigation={navigation}  deleteStatus={deleteStatus} idsToBeDeleted={idsToBeDeleted} setIdsToBeDeleted={setIdsToBeDeleted} setDeleteStatus={setDeleteStatus}/>
    </View>
    )
}

const styles = StyleSheet.create({
  noteContainer:{
    paddingHorizontal: 12,
    paddingVertical: 10,
    flexDirection: "row",
    backgroundColor: "rgba(42,42,42,0.3)",
    marginHorizontal: 10,
    marginBottom: 8,
  }
})


