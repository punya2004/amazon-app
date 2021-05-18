export const initialState = {
    basket: [],
    user: null,
}

// Selector
export const getBasketTotal = (basket) => 
  basket.reduce((amount, item) => item.price + amount, 0);

function Reducer (state, action) {
    console.log(action)
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            //logic to add in basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            }           
        case 'REMOVE_FROM_BASKET':
            //logic to remove from basket
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketitem) => basketitem.id === action.id)
            if (index >= 0){
                newBasket.splice(index,1)
            }else {
                console.warn(
                    `can't remove product (id: ${action.id}) as it's no item there`
                );
            }
            return {...state, basket: newBasket}
        default:
            return state;
    }
}

export default Reducer;