
import React, {useState} from "react"
import axios from "axios"
export default function useNotes(){
  const [notes, setNotes] = useState(null)
  const [unmodifiedNotes, setUnmodifiedNotes] = useState(null)
  const getNotes = React.useCallback( async ()=>{
    try{
   let results = await axios.get("https://tobitaskmanagerserver.herokuapp.com/api/v1/posts/")
   
  if(results.data.data.length > 0){
    setNotes(results.data.data)
    setUnmodifiedNotes(results.data.data)
    }
    else{
    setNotes(false)
    setUnmodifiedNotes(false)
    }
    }
    catch(error){
      console.log(error.message)
    }
 }
 )
 
 const dispatcher= {
   setNotes,
   getNotes,
 }
 
 return [notes,unmodifiedNotes, dispatcher]
}