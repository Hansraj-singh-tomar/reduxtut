// yha ham jitne bhi reducers hai unhe RootReducer file me combine kar denge 

import {combineReducers} from 'redux'
import cardItems from './reducer'
// import users from './users' // agar koi or reducer ho to usse bhi ham add kar sakte hai 
export default combineReducers({
    cardItems,
    // users,
})

// connect folder ki file hi responsible hoti hai react and redux ko connect karne ke liye  