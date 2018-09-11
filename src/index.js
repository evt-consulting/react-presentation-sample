import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import thunk from 'redux-thunk';

import employeeReducer from './store/reducers/employeeReducer';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const rootReducer = combineReducers({
//     employeeReducer
// });

// const store = createStore(rootReducer, composeEnhancers(
//     applyMiddleware(thunk)
// ));

const app = (<App />
    // <Provider store={store}>
    //     <App />
    // </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
