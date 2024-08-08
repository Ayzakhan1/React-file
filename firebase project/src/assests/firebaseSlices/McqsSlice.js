import { createSlice } from "@reduxjs/toolkit"
import { child, get, getDatabase, ref } from "firebase/database"
import { firebaseapp } from "../firebaseConfigue/FirebaseConfigue"


const intialState = {
    value: []

}

export const McqsSlice = createSlice({
    name:'mcqs',
    intialState,
    reducers:{
        getdata:async(state)=>{
         const db =  getDatabase(firebaseapp);
         const dbRef = ref(db)
        const response = await get(child(dbRef, 'mcqs'))

        console.log(response)
        }
    }

})

export const { getdata } = McqsSlice.actions

export default McqsSlice.reducer