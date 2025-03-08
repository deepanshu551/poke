import {createSlice} from "@reduxjs/toolkit";

const allPokemonSlice = createSlice({

   name: "allpokemon",
   initialState: {},
   reducers:{
      setAllPokemons: (state,action) =>{
         state.allPokemons = action.payload
      }
   }
});

export const {setAllPokemons} = allPokemonSlice.actions;
export default allPokemonSlice.reducer;
