const initialState = {
    currentStore: null,
    status: 'loading',
    error: null,
    sort: 'default',
    filterPrice: {id:'0',  
                value: 'default'}
};

export default function storeReducer(state = initialState, action) {
    switch (action.type) {
        case 'REQUEST_STORE_INFO': {
            return {
                ...state,
                status: "loading",
                error: null
            };
        }
        case 'RECEIVE_STORE_INFO': {
            return {
                ...state,
                currentStore: {
                    ...state.currentStore,
                    store: [...action.store]                 
                }, 
                status: "idle"
            };
        }
        case 'RECEIVE_STORE_INFO_ERROR': {
            return {
                ...state,                
                status: "error",
                error: action.error
            };
        }
        case 'UPDATE_STORE_SORT':{
            return {
                ...state,
                sort: action.value
            };        
        }
        case 'UPDATE_STORE_FILTER_PRICE':{
            return {
                ...state,
                filterPrice: {...action.value}
            };        
        }
        default: {
            return state;
        }
    };
};