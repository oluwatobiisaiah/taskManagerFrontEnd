
import {StyleSheet, TouchableOpacity} from "react-native"
import { Ionicons } from '@expo/vector-icons';

export default function AddNote({navigation}){
  return <TouchableOpacity style={styles.addNote}
  onPress={() => navigation.navigate("Create Note")}
  >
  <Ionicons name="add-sharp" size={40} color="white" />
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  addNote:{
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(200,215,255, 0.6)",
    position: "absolute",
    bottom: 50,
    right: 20,
  }
})
