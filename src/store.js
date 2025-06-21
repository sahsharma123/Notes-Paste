import { configureStore } from '@reduxjs/toolkit'
import pasteReducer from './redux/pasteSlice'

export const store = configureStore({
  reducer: {
    paste:pasteReducer,
  },
})



//Redux tool kit internally do this 

// function pasteReducer(state, action) {
//   switch (action.type) {
//     case "pastes/addToPastes":
//       // do something
//     case "pastes/removeFromPastes":
//       // do something
//     default:
//       return state;
//   }
// }
