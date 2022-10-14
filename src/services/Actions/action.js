// what is action 
// make function in action file
// Return data and type 
// Add constant and use constant in action

// action kya karega button ke click ke upar data lega or hamare redux store ke andar store karva dega  
//  data ko send karta hai hamari react ke component se redux ke store ke andar 
// or ye data kisi compenent ya ho sakta hai api se aa rha ho

import {ADD_TO_CART,REMOVE_TO_CART} from '../constant'
export const addToCart = (data) => {
    // console.log("action",data)
    return {
        type: ADD_TO_CART, // type me ham string iss liye pass nhi kar rhe hai kyonki hame iski jarurat rerducer me padegi to hamne isse variable me store kar diya hai 
        data: data,
    }
}
export const removeToCart = () => {
    console.log("action");
    return {
        type: REMOVE_TO_CART,
    }
}