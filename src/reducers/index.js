//This is going to be our master reducer!! It will hold all our reducers.

//The master reducer doesn't manage any state on its own. It manages all the reducers. The reducers manage state, the master reducer manages the reducers. Export all reducers as an object using "combineReducers" and each property we export, will be available as state.PROPERTY.



//First, we need combineReducers from Redux
import { combineReducers } from 'redux';
//Bring in the reducer (module) that manages students
import StudentReducer from './StudentReducer';

// console.log(StudentReducer);

const rootReducer = combineReducers({
	//Each key/property in this object, will be available on the redux
	students: StudentReducer
})

export default rootReducer;