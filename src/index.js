import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/App';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {createStore,applyMiddleware} from 'redux'
import rootReducers from "./reducers"
import {Provider} from "react-redux"
import routes from "./routes"
import {BrowserRouter as Router} from "react-router-dom"
import NavigationBar from "./components/NavigationBar"
const store=createStore(rootReducers,composeWithDevTools(applyMiddleware(logger,thunk)))
ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes}>
      <NavigationBar/>
    {routes}
    </Router>
    
  </Provider>,
    
  document.getElementById('root')
);
