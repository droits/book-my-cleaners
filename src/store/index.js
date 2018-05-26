import { combineReducers, applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    form: formReducer,
});

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk)),
);

export default store;