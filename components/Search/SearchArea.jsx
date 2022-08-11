
import {View, StyleSheet} from "react-native"
import SearchNotes from "./SearchBar"

const SearchArea = ({unmodifiedNotes, setNotes}) => {
  
  return <View style={styles.searchArea}>
  <SearchNotes unmodifiedNotes={unmodifiedNotes} setNotes={setNotes}/>
  </View>
}

export default SearchArea

const styles = StyleSheet.create({
  searchArea:{
    flexDirection: "row",
    paddingHorizontal: 20,
    marginVertical: 20
    
  },
})