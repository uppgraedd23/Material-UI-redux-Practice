const ADD_ITEM = 'ADD_ITEM';


const initState = {
    items: JSON.parse(localStorage.getItem('priceList')) ||
    [
        {name: 'демо айтем 1', brand: 'Nike', description: 'great', price: 10},
        {name: 'демо айтем 2', brand: 'Ferogama', description: 'bullshit', price: 11},
        {name: 'демо айтем 3', brand: 'Brioni', description: 'bad', price: 12},
        {name: 'демо айтем 4', brand: 'Ethro', description: 'sucks', price: 13},
    ]
}


const priceReducer = (state = initState, action) => {

    switch (action.type) {

        case ADD_ITEM: {
            console.log(action)
            let newItem = action.form
            let newPriceList = [...state.items, newItem]
            localStorage.setItem('priceList', JSON.stringify(newPriceList))
            return {
                ...state,
                items: newPriceList
            };
        }
        default:
            return state;
    }
}

export const newItemCreator = (form) => ({type: ADD_ITEM, form})

export default priceReducer