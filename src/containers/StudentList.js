import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectStudent from '../actions/SelectStudent';
//Bind action creators is a function in redux that will trigger the action through every single reducer
import { bindActionCreators } from 'redux';


class StudentList extends Component{
	//We have access to this.props.students because we brough it in below in mapStateToProps
	//You're passing an entire function as an argument to onClick. we want to be able to pass a variable to the function. 
	//if you do this:  this.props.selectStudent() , you would run the function instead of passing it. we only want to PASS it! This is a JSX thing.
	render(){
		var studentArray = [];
		this.props.students.map((student, index)=>{
			studentArray.push(
				<li key={index} onClick={()=>this.props.selectStudent(student.name)}>{student.name}
				</li>
				)
		});

		// console.log(this.props.students); //this.props.students is coming from mapStateToProps below
		return(
			<div>
				{studentArray}
			</div>
		)
	}
}

//This function will tie together whatever is returned from the reducer we called to this.props. This is the GLUE between redux state and THIS component knowing about it.
//Another way...we are going to pick our reducers and they will be available to the component as this.props.NAMEBELOW.


function mapStateToProps(state){
	// return the object b.c what we wanted was an object. state.students is from redux. masterroot has a property of students (state.students)
	//mapStateToProps maps state to right on state to left
	return{
		students: state.students
	}	
}

function mapDispatchToProps(dispatch){
	//bindActionCreators method expects an object
	return bindActionCreators({
		//(this.props.selectStudent) : name of action(which we imported above)
		selectStudent: SelectStudent
	}, dispatch)
}

//in connect module, you always need redux state but you don't always need redux action.
//connect module: connect(redux state, redux action)(component it links up)
// export default StudentList; change to =>
// console.log(connect(mapStateToProps, mapDispatchToProps)) will give you a function
export default connect(mapStateToProps, mapDispatchToProps)(StudentList);


//mapStateToProps is a function. It's getting state from connect. Connect comes from react-redux. React-redux has providers and stores. Stores contains all the reducers.

//var aComponentThatHasReduxStateAndActions = (mapStateToProps, mapDispatchToProps)(StudentList);
//