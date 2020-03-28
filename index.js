const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICE_CREAM = 'BUY_ICE_CREAM';


function buyCake() {
    return {
        type: BUY_CAKE    
    };
}

function buyIceCream() {
    return {
        type: BUY_ICE_CREAM    
    };
}

const initialState = {
    numOfCakes: 10,
    numOfIceCream: 20
};

const initialCakeState = {
    numOfCakes: 10
};

const initialIceCreamState = {
    numOfIceCream: 20
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        };
        case BUY_ICE_CREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        };
        default: return state;
    }
};

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        };
        default: return state;
    }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICE_CREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        };
        default: return state;
    }
};


const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});


const store = createStore(rootReducer,applyMiddleware(logger));

console.log("Initial state ", store.getState());
const unsubscribe = store.subscribe(() => {
    // console.log("Updated state ", store.getState());
});

store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyCake());
store.dispatch(buyIceCream());

unsubscribe();