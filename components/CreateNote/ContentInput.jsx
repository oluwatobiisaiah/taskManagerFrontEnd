import { View, TextInput, Text, StyleSheet, ScrollView } from "react-native";

const ContentInput = ({content, setContent}) => {
  return (

    <View style={styles.contentInputContainer}>
      
      <TextInput
 style={styles.contentInput} 
 placeholder="Write a Note..."
 placeholderTextColor="grey"
 multiline
value={content}
onChangeText={setContent}
 selectionColor="lime"
 
 
      />
    </View>
    
  );
};

export default ContentInput;

const styles = StyleSheet.create({
  contentInputContainer: {
    marginTop: 5,
    paddingHorizontal: 10,
    flex: 1,
    //backgroundColor: "red"
  },
  
    
  contentInput: {
   //borderColor: "transparent",
    borderWidth: 1,
    flex: 1,
    minHeight:"100%",
    fontSize: 16,
    textAlignVertical: "top",
    padding: 10,
    color: "#fff",
    //backgroundColor: "blue",
    
  },
});
