const initialState = {
    checkOut: [],
    totalCost: 0,
    products_to_view: [{Artist:'Omar', id:'1', title:'Flower', type:'Photography', date:'2020', image:'http://', price:180},{Artist:'Omar', id:'2', title:'Flower2', type:'Photography', date:'2020', image:'http://', price:100},{Artist:'Omar', id:'3', title:'Flower3', type:'Photography', date:'2020', image:'http://', price:1100},{Artist:'Omar', id:'4', title:'Flower4', type:'Photography', date:'2020', image:'http://', price:200},{Artist:'Omar', id:'5', title:'Flower5', type:'Photography', date:'2020', image:'http://', price:150}],
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

      case 'Product_Removed': {
        return {
            ...state,
          checkOut: [
            ...state.checkOut,
            {
              id: action.playload.id,
              price: action.payload.price,
            }
          ],
          totalCost: state.totalCost-action.playload.price
        }
      }
      
      default:
        console.log('Nope, i was contacted');
        return state
    }
  }