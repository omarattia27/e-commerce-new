const initialState = {
    checkOut: [],
    totalCost: 0,
    LoggedIn: '',
    user:'',
    products_to_view: [],
}
  
  export function appReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD': {
        //console.log(state.checkOut);
        return {
            ...state,
          checkOut: [
            ...state.checkOut,
              action.playload.product       
          ],
          totalCost: state.totalCost+action.playload.product.price
        }
      }

      case 'REMOVE': {
        console.log("CheckOut: ",state.checkOut)
        console.log("Found! ",state.checkOut.findIndex(x => x._id === action.playload.id));
        return {
            ...state,
            ...state.checkOut.splice(state.checkOut.findIndex(x => x._id === action.playload.id),1)
        }
      }

      case 'LOGGEDIN': {
        return {
            checkOut: state.checkOut,
            totalCost: state.totalCost,
            LoggedIn: action.playload[0],
            products_to_view: state.products_to_view,
            user:action.playload[1]
        }
      }

      case 'LOGGEDOUT': {
        return {
            checkOut: state.checkOut,
            totalCost: state.totalCost,
            LoggedIn: '',
            products_to_view: state.products_to_view,
            user:''
        }
      }
      
      case 'PRODUCTS': {
        console.log("products updated: ",action.products)
        return {
            checkOut: state.checkOut,
            totalCost: state.totalCost,
            LoggedIn: state.LoggedIn,
            products_to_view: action.playload,
            user:state.user
        }
      }
      
      default:
        console.log('Nope, i was contacted');
        return state
    }
  }