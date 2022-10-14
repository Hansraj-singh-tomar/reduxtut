// component and redux map karne ke liye ham Home ko yha import kar rhe hai

// container 

// connect redux with react
// import react-redux. action and component 
// use mapDispatchToProps -  jab ham store me data send karte hai tab ham mapDispatchToProps ka use karte hai 
// use mapStateToProps -  jab ham store se data ko get karte hai tab ham iss method ka use karte hai 


import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart,removeToCart} from '../services/Actions/action'

const mapStateToProps = (state) => ({
    data:state.cardItems
})
const mapDispatchToProps = (dispatch) => ({
    
    addToCartHandler: (data) => dispatch(addToCart(data)),
    removeToCartHandler: (data) => dispatch(removeToCart(data))
})  // yha addToCartHandler hamara click event vala function hai and addTocart action ka function hai 
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;



// import Home from '../components/Home';
// import { useSelector, useDispatch } from 'react-redux';
// // koi bhi item get karne ke liye useSelector ka use karenege and or bhejne ke liye useDispatch ka use karenge
// import {addToCart,removeToCart} from '../services/Actions/action'

// const mapStateToProps = useSelector((state) => {
//     return state.cardItems
// })

