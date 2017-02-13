import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//Remember, React and Redux don't know about each other. This will allow them to talk to each other.
//Bring in Provider, which comes from react-redux. 
//Provider needs a store
import {Provider} from 'react-redux';


//Get createStore method from redux. We will use it to create a store and pass to the store all our reducers. That created store will go to the provider.
import { createStore } from 'redux';

//Needs to be after createStore and before theStore
//Same as writing: import rootReducers from './reducers/index';
import reducers from './reducers/index';

//Make a store
const theStore = createStore(reducers);

//Wrapping the Provider component, which comes from react-redux, around your components. WIll allow the store (brain of redux) to get them to talk
ReactDOM.render(
	<Provider store={theStore}>
	  <App />
	</Provider>,
	  document.getElementById('root')
);
