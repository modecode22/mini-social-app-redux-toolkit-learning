import { createSlice} from "@reduxjs/toolkit";


const initialState = [
  { id: 1, name: "moncef aissa" },
  { id: 2, name: "dj khaled" },
  { id: 3, name: "crestiano ronaldo" },
];



const usersSlice = createSlice({
  name: "users", 
  initialState, 
  reducers:{}
})


export const selectAllUsers =(state)=> state.users

export default usersSlice.reducer ;