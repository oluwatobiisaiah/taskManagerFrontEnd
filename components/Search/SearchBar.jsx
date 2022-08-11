

import {TextInput, StyleSheet} from "react-native"
import {useState} from "react"


const SearchNotes = ({unmodifiedNotes, setNotes}) =>{
const [searchValue, setSearchValue] = useState("")

const handleSearch = (value)=>{
  console.log(unmodifiedNotes)
  setSearchValue(value)
 const filterResult = unmodifiedNotes.filter(note => (note.taskTitle.toLowerCase().includes(value.toLowerCase())) || note.taskContent.toLowerCase().includes(value.toLowerCase())
 )
 
 filterResult.length > 0?setNotes(filterResult):setNotes(false)
}


  return(
          <TextInput
 style={styles.searchInput}
 value={searchValue}
 placeholder="Search Notes..."
 keyboardType="default"
 returnKeyType="search"
 placeholderTextColor="grey"
 onChangeText={handleSearch}
 />
    )
}

export default SearchNotes

const styles = StyleSheet.create({
searchInput:{
    height: 46,
    borderWidth: 0.5,
    backgroundColor: "#fff",
    flex: 1,
    padding: 10,
    color: "#000",
    borderRadius: 23,
}
})