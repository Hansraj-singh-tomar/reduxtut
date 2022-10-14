// reducer kya karega action se jo hame data milta hai usko store ke andar push karta hai 
// reducer action se jo data aa rha hai usse filter out kar ke ki mere pass kon se object ke andar data push karna hai add_to_cart karna hai remove to cart karna hai 
// usko store ke andar bhej dega or store se hame data page me dikh jayega

import { ADD_TO_CART, REMOVE_TO_CART } from '../constant'
const initialState = {
    cardData: []
}
// action se reducer me data ka flow container folder ke through aa rha hai 
export default function cardItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            // console.log("reducer",action)
            return [
                ...state,
                {cardData: action.data}
            ]
        case REMOVE_TO_CART:
            // console.log("reducer",action)
            state.pop();
            return [
                ...state,
                
            ]
        default:
            return state
    }
}
